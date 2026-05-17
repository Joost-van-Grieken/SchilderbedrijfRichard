import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase.from('quote_requests').insert([form]);

    if (dbError) {
      setError('Er is iets misgegaan. Probeer het opnieuw.');
    } else {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  const inputClassName =
    'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow';

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: body text */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Vraag een vrijblijvende offerte aan
            </h2>
            <div className="w-12 h-1 rounded-full mb-6 bg-accent" />
            <p className="text-gray-600 leading-relaxed mb-6">
              Heeft u een schilderklus of wilt u meer informatie over mijn diensten?
              Vul het formulier in en ik neem zo snel mogelijk contact met u op.
              Ik bied altijd een vrijblijvende offerte aan.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-accent" />
                Gratis en vrijblijvende offerte
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-accent" />
                Snel reactie binnen 24 uur
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-accent" />
                Persoonlijk kleuradvies inbegrepen
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              {success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-accent-light">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bedankt voor uw aanvraag!</h3>
                  <p className="text-gray-500 text-sm">Ik neem zo snel mogelijk contact met u op.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm font-semibold underline text-accent"
                  >
                    Nog een aanvraag indienen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Naam <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Uw volledige naam"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      E-mailadres <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="uw@email.nl"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Bericht <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Beschrijf uw schilderklus of stel een vraag..."
                      className={`${inputClassName} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm bg-accent transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                  >
                    {loading ? 'Verzenden...' : (
                      <>
                        <Send className="w-4 h-4" />
                        Offerte aanvragen
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
