import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate auth success
        navigate('/admin/dashboard');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center layout-container">
            <div className="corp-card w-full max-w-md p-8 shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[color:var(--accent-color)] flex items-center justify-center mb-4 shadow-md">
                        <Lock size={32} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-primary">{t('admin.login')}</h1>
                    <p className="text-secondary mt-2 text-sm">{t('nav.home')} / ELHAWY AI</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-primary">البريد الإلكتروني (Admin Email)</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-primary border border-color rounded-lg px-4 py-3 text-primary outline-none focus:border-[color:var(--accent-color)] transition-colors"
                            placeholder="admin@elhawy.com"
                            dir="ltr"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-primary">كلمة المرور (Password)</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-primary border border-color rounded-lg px-4 py-3 text-primary outline-none focus:border-[color:var(--accent-color)] transition-colors"
                            placeholder="••••••••"
                            dir="ltr"
                        />
                    </div>

                    <button type="submit" className="corp-btn-primary w-full py-3 text-lg mt-2 justify-center gap-2">
                        <LogIn size={20} /> دخول
                    </button>
                </form>
            </div>
        </div>
    );
};
