import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <div className="animate-slide-in space-y-6">
      <h2 className="section-title">Contact</h2>

      {/* Map Section */}
      <div className="relative w-full h-[320px] sm:h-[400px] bg-white/60 backdrop-blur-xl border border-gray-100 rounded-[2rem] p-2 shadow-sm group">
        <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-[inset_0_4px_20px_rgba(0,0,0,0.03)] z-10"></div>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.39893976352!2d75.71960250669528!3d26.8851416795493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714496245084!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[1.5rem] w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
        />
        
        {/* Floating Location Badge */}
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none transform group-hover:-translate-y-1 transition-transform duration-700">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md shadow-lg shadow-indigo-100/30 rounded-2xl border border-gray-100">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </div>
            <span className="text-[11px] font-bold text-gray-800 tracking-widest uppercase">
              Jaipur, India
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pt-10 pb-6 px-2 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-3xl font-semibold text-gray-900 mb-4 font-cinzel tracking-tight">Let's Build Something Great</h3>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Got an innovative idea or a challenging technical problem? Let's collaborate and engineer your vision into a high-performance reality.
          </p>
        </div>

        {sent && (
          <div className="mb-8 max-w-2xl mx-auto px-4 py-3 bg-emerald-50/80 backdrop-blur-md border border-emerald-200 rounded-2xl text-emerald-700 text-sm font-medium flex items-center justify-center gap-2 animate-slide-in">
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Message successfully sent! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative group">
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:bg-white"
              />
            </div>
            <div className="relative group">
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:bg-white"
              />
            </div>
          </div>
          
          <div className="relative group">
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full bg-white/60 backdrop-blur-xl border border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:bg-white"
            />
          </div>
          
          <div className="relative group bg-white/60 backdrop-blur-xl border border-gray-100 rounded-[1.5rem] focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:bg-white">
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="relative w-full h-full bg-transparent border-0 px-6 py-5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-none pb-24 rounded-[1.5rem] z-10"
            />
            
            {/* The Cutout Corner Patch (Inverted Border Radius Effect) */}
            <div className="absolute -bottom-px -right-px w-[88px] h-[88px] bg-gray-50 border-t border-l border-gray-100 rounded-tl-[1.5rem] p-3 flex items-end justify-end group-focus-within:border-indigo-500 transition-colors duration-200 z-20">
              <button 
                type="submit" 
                id="contact-submit" 
                className="w-14 h-14 bg-gray-900 text-white rounded-[1rem] flex items-center justify-center"
                title="Send Message"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
