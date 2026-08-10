"use client";
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  lang: string;
  dict: {
    title: string;
    description: string;
    emailMe: string;
    phone: string;
    successTitle: string;
    successDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    msgLabel: string;
    msgPlaceholder: string;
    sending: string;
    sendBtn: string;
  };
}

export default function Contact({ lang, dict }: ContactProps) {
  const [state, handleSubmit] = useForm('xjgndzzr');

  return (
    <section id="contact-section" className="py-24 bg-slate-900 px-6 text-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        {/* Left Column: Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-6">{dict.title}</h2>
          <p className="text-slate-400 mb-10 text-lg">
            {dict.description}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 text-indigo-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">{dict.emailMe}</p>
                <p className="font-semibold">info@vireelagency.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 text-indigo-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">{dict.phone}</p>
                <p className="font-semibold">+1 ‪(301) 686-7740‬</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl min-h-[400px] flex flex-col justify-center">
          {state.succeeded ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{dict.successTitle}</h3>
              <p className="text-slate-400 text-lg">
                {dict.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{dict.nameLabel}</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white transition-all" placeholder={dict.namePlaceholder} />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-2" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{dict.emailLabel}</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white transition-all" placeholder="info@vireelagency.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-2" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{dict.msgLabel}</label>
                <textarea rows={4} name="message" required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white transition-all" placeholder={dict.msgPlaceholder}></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-2" />
              </div>
              
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg disabled:opacity-70 disabled:cursor-wait flex justify-center"
              >
                {state.submitting ? dict.sending : dict.sendBtn}
              </button>
              
              <ValidationError errors={state.errors} className="text-red-400 text-sm text-center mt-4" />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}