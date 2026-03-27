import React, { Component } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// Definisikan tipe data untuk state
interface State {
    name: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
    error: { [key: string]: string }; // Error objek dengan kunci sebagai string
    loading: boolean;
    notification: { type: string; message: string } | null;
}

interface ContactFormProps {
    t: (key: string) => string;
}

class ContactFormComponent extends Component<ContactFormProps, State> {
    state: State = {
        name: '',
        lastname: '',
        email: '',
        subject: '',
        message: '',
        error: {},
        loading: false,
        notification: null,
    };

    clearNotification = () => {
        this.setState({ notification: null });
    };

    changeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        // Memastikan bahwa nama input (name) adalah kunci yang valid di state dan error
        this.setState({
            [name]: value,
            error: { ...this.state.error, [name]: '' }, // Menghapus pesan error terkait input tersebut
        } as unknown as Pick<State, keyof State>);
    };

    validate = () => {
        const { t } = this.props;
        let error: { [key: string]: string } = {};
        const { name, lastname, email, subject, message } = this.state;

        if (!name) error.name = t('contact.form.nameError');
        if (!lastname) error.lastname = t('contact.form.lastnameError');
        if (!email) error.email = t('contact.form.emailError');
        if (!subject) error.subject = t('contact.form.subjectError');
        if (!message) error.message = t('contact.form.messageError');

        return error;
    };

    submitHandler = async (e: React.FormEvent) => {
        const { t } = this.props;

        e.preventDefault();
        this.setState({ loading: true, notification: null } as Pick<
            State,
            'loading' | 'notification'
        >);

        const error = this.validate();
        this.setState({ error } as Pick<State, 'error'>);

        if (Object.keys(error).length > 0) {
            this.setState({ loading: false } as Pick<State, 'loading'>);
            return;
        }

        const { name, lastname, email, subject, message } = this.state;

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name,
                    lastname,
                    email,
                    subject,
                    message,
                }),
            });

            const contentType = res.headers.get('content-type') || '';
            let result: any = null;

            if (contentType.includes('application/json')) {
                result = await res.json();
            } else {
                const text = await res.text();
                console.error('Non-JSON response from server:', text);
                throw new Error('Server returned non-JSON response');
            }

            if (res.ok && result.success) {
                this.setState({
                    notification: {
                        type: 'success',
                        message: t('contact.form.success'),
                    },
                    loading: false,
                    name: '',
                    lastname: '',
                    email: '',
                    subject: '',
                    message: '',
                    error: {},
                });
            } else {
                this.setState({
                    notification: {
                        type: 'error',
                        message: result.message || t('contact.form.error'),
                    },
                    loading: false,
                });
            }
        } catch (err) {
            console.error(err);
            this.setState({
                notification: {
                    type: 'error',
                    message: t('contact.form.error'),
                },
                loading: false,
            });
        }
    };

    render() {
        const { t } = this.props;
        const {
            name,
            lastname,
            email,
            subject,
            message,
            error,
            loading,
            notification,
        } = this.state;

        return (
            <>
                {notification && (
                    <div className={`form-alert ${notification.type}`}>
                        <span>{notification.message}</span>
                        <button
                            type="button"
                            className="alert-close"
                            onClick={this.clearNotification}
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>
                )}

                <form onSubmit={this.submitHandler} className="form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                                <input
                                    value={name}
                                    onChange={this.changeHandler}
                                    type="text"
                                    name="name"
                                    placeholder={t('contact.form.name')}
                                />
                                <p>{error.name}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                                <input
                                    value={lastname}
                                    onChange={this.changeHandler}
                                    type="text"
                                    name="lastname"
                                    placeholder={t('contact.form.lastname')}
                                />
                                <p>{error.lastname}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                                <input
                                    value={email}
                                    onChange={this.changeHandler}
                                    type="email"
                                    name="email"
                                    placeholder={t('contact.form.email')}
                                />
                                <p>{error.email}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                                <input
                                    value={subject}
                                    onChange={this.changeHandler}
                                    type="text"
                                    name="subject"
                                    placeholder={t('contact.form.subject')}
                                />
                                <p>{error.subject}</p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-field">
                                <textarea
                                    value={message}
                                    onChange={this.changeHandler}
                                    name="message"
                                    placeholder={t('contact.form.message')}
                                ></textarea>
                                <p>{error.message}</p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-submit">
                                <button
                                    type="submit"
                                    className="template-btn"
                                    disabled={loading}
                                >
                                    {loading ? t('contact.form.sending') : t('contact.form.send')}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

const ContactForm = () => {
    const { t } = useLanguage();
    return <ContactFormComponent t={t} />;
};

export default ContactForm;
