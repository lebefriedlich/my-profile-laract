import React, { Component } from 'react';

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

class ContactForm extends Component<{}, State> {
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
        let error: { [key: string]: string } = {};
        const { name, lastname, email, subject, message } = this.state;

        if (!name) error.name = 'Please enter your name';
        if (!lastname) error.lastname = 'Please enter your Lastname';
        if (!email) error.email = 'Please enter your email';
        if (!subject) error.subject = 'Please enter your subject';
        if (!message) error.message = 'Please enter your message';

        return error;
    };

    submitHandler = async (e: React.FormEvent) => {
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
                        message: 'Message sent successfully!',
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
                        message: result.message || 'Failed to send message.',
                    },
                    loading: false,
                });
            }
        } catch (err) {
            console.error(err);
            this.setState({
                notification: {
                    type: 'error',
                    message: 'Network error, please try again.',
                },
                loading: false,
            });
        }
    };

    render() {
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
                                    placeholder="Name"
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
                                    placeholder="Lastname"
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
                                    placeholder="Email"
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
                                    placeholder="Subject"
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
                                    placeholder="Message"
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
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default ContactForm;
