import { useState } from 'react';
import { Send, ShieldCheck, User, MessageCircle, CheckCircle, Globe, Loader2 } from 'lucide-react';
import { CONTACT_API_URL } from '../config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: "Can't log in / Password reset",
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Email Support Request: ${formData.issue}`,
          to_email: 'info@yagamail.shop' // Reference email for the backend
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', issue: "Can't log in / Password reset", message: '' });
      } else {
        throw new Error('Failed to send request. Please try again later.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="support-form" className="py-24 bg-zinc-50 w-full font-sans text-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Ready to get your <span className="text-blue-800">Email fixed?</span>
          </h2>
          <p className="text-zinc-600 text-[18px] max-w-2xl mx-auto leading-relaxed">
            Just fill out the simple form below. Our team will read your message and get back to you with a solution that works.
          </p>
        </div>

        <div className="grid lg:grid-cols-10 gap-12 items-start">
          {/* Left: Simple Points */}
          <div className="lg:col-span-4 space-y-8 py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-[17px] font-medium">Your info is safe and private</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
              <p className="text-[17px] font-medium">Talk to a real person, no bots</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="text-[17px] font-medium">Fast help that actually lasts</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-[17px] font-medium">Simple and clear advice</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <p className="text-[17px] font-medium">Works with all email providers</p>
            </div>
          </div>

          {/* Right: The Simple Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-100 shadow-md">
            {status.success ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Request Sent Successfully!</h3>
                <p className="text-zinc-600">Thank you for reaching out. One of our experts will contact you shortly at your provided email address.</p>
                <button 
                  onClick={() => setStatus({ ...status, success: false })}
                  className="bg-blue-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-zinc-900 transition-all"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[14px] font-semibold text-zinc-700 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe" 
                      className="w-full bg-zinc-50 px-5 py-4 rounded-xl border border-zinc-100 focus:bg-white focus:border-blue-500 outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[14px] font-semibold text-zinc-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full bg-zinc-50 px-5 py-4 rounded-xl border border-zinc-100 focus:bg-white focus:border-blue-500 outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="issue" className="text-[14px] font-semibold text-zinc-700 ml-1">What's the problem?</label>
                  <select 
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 px-5 py-4 rounded-xl border border-zinc-100 focus:bg-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Can't log in / Password reset</option>
                    <option>Emails not sending or receiving</option>
                    <option>Syncing across devices</option>
                    <option>Security / Hacked account</option>
                    <option>Other / Not sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[14px] font-semibold text-zinc-700 ml-1">Tell us more</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Briefly describe what's happening..." 
                    className="w-full bg-zinc-50 px-5 py-4 rounded-xl border border-zinc-100 focus:bg-white focus:border-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status.error && (
                  <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                    {status.error}
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-blue-800 text-white py-4.5 rounded-xl text-[16px] font-bold hover:bg-zinc-900 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Help Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
