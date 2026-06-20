import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactSection = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert(t('contact.form.success'));
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                {t('contact.title')}
                <div className="h-px bg-primary-cyan/50 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <div className="bg-[#2a2a2a]/40 backdrop-blur-md p-4 xl:p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                        <div className="w-12 h-12 bg-[#111] rounded-xl flex flex-shrink-0 items-center justify-center border border-white/5">
                            <i className="bi bi-envelope text-xl text-primary-cyan"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm mb-1">{t('contact.email')}</h4>
                            <p className="text-neutral-400 text-[12px] xl:text-[13px] font-light break-all">noval.akbar.906@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-[#2a2a2a]/40 backdrop-blur-md p-4 xl:p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                        <div className="w-12 h-12 bg-[#111] rounded-xl flex flex-shrink-0 items-center justify-center border border-white/5">
                            <i className="bi bi-geo-alt text-xl text-primary-cyan"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm mb-1">{t('contact.address')}</h4>
                            <p className="text-neutral-400 text-[12px] xl:text-[13px] font-light break-words">{t('contact.addressValue')}</p>
                        </div>
                    </div>
                    <div className="bg-[#2a2a2a]/40 backdrop-blur-md p-4 xl:p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                        <div className="w-12 h-12 bg-[#111] rounded-xl flex flex-shrink-0 items-center justify-center border border-white/5">
                            <i className="bi bi-person-workspace text-xl text-primary-cyan"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm mb-1">{t('about.freelance')}</h4>
                            <p className="text-primary-cyan text-[12px] xl:text-[13px] font-semibold">{t('about.available')}</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-[#2a2a2a]/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-white mb-6">{t('contact.subtitle')}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.form.name')}
                                    className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t('contact.form.email')}
                                    className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <textarea
                                placeholder={t('contact.form.message')}
                                rows={5}
                                className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-transparent border-2 border-primary-cyan hover:bg-primary-cyan text-white font-semibold rounded-xl transition-colors flex items-center gap-2 uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <i className="bi bi-arrow-repeat animate-spin"></i>
                            ) : (
                                <i className="bi bi-send"></i>
                            )}
                            {isSubmitting ? 'Sending...' : t('contact.form.send')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
