'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import Heading from './Heading'

interface CountryCode {
  code: string
  flag: string
  name: string
}

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const COUNTRY_CODES: CountryCode[] = [
  { code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: '+1', flag: '🇺🇸', name: 'USA / Canada' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+381', flag: '🇷🇸', name: 'Serbia' },
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
]

const inputClass =
  'w-full bg-body border border-border rounded-md px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange transition-colors duration-200 font-gabarito'

const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.09 },
  }),
}

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' })
  const [countryCode, setCountryCode] = useState<CountryCode>(COUNTRY_CODES[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, phone: `${countryCode.code} ${form.phone}` }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className="min-h-[100vh] py-36 md:py-16 lg:py-20 flex flex-col gap-14 lg:gap-20 h-fit"
      id="contact"
    >
      <div>
        <Heading>Contact</Heading>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-10 lg:gap-16 items-start"
      >
        {/* Left decorative panel */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="leading-none select-none">
            <div className="font-nabla text-[4.5rem] text-yellow italic">LET'S</div>
            <div className="font-nabla text-[4.5rem] text-orange italic">WORK</div>
            <div className="font-nabla text-[3rem] text-white/40 italic">TOGETHER</div>
          </div>
          <p className="text-gray-400 text-md leading-7">
            Have a project in mind, a question, or just want to say hi? Fill in the form and
            I'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
              Based in Thessaloniki, Greece
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0" />
              Available for freelance projects
            </div>
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
          className="bg-card border border-border rounded-md p-6 lg:p-8"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-5 py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-orange/10 border border-orange flex items-center justify-center"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF7727"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-white font-gabarito">Message sent!</h3>
                <p className="text-gray-400 max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-1 text-orange text-sm underline underline-offset-4 hover:text-yellow transition-colors duration-200"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Full Name */}
                <motion.div
                  custom={0}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2"
                >
                  <label className="text-sm font-semibold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Georgios Vasileiou"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  custom={1}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2"
                >
                  <label className="text-sm font-semibold text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  custom={2}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2"
                >
                  <label className="text-sm font-semibold text-gray-400">Phone Number</label>
                  <div className="flex gap-2">
                    {/* Country code dropdown */}
                    <div className="relative flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        className="h-full bg-body border border-border rounded-md px-3 flex items-center gap-2 text-white hover:border-orange focus:outline-none focus:border-orange transition-colors duration-200 min-w-[96px]"
                      >
                        <span className="text-base">{countryCode.flag}</span>
                        <span className="text-sm">{countryCode.code}</span>
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-auto"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="absolute left-0 top-full mt-1 z-50 bg-card border border-border rounded-md overflow-y-auto max-h-52 min-w-[190px] shadow-xl shadow-black/50"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <li key={c.code + c.name}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCountryCode(c)
                                    setDropdownOpen(false)
                                  }}
                                  className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm hover:bg-border transition-colors duration-150 ${
                                    countryCode.code === c.code && countryCode.name === c.name
                                      ? 'text-orange'
                                      : 'text-gray-300'
                                  }`}
                                >
                                  <span>{c.flag}</span>
                                  <span className="flex-1">{c.name}</span>
                                  <span className="text-gray-500 tabular-nums">{c.code}</span>
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="69X XXX XXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${inputClass} flex-1`}
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  custom={3}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex flex-col gap-2"
                >
                  <label className="text-sm font-semibold text-gray-400">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {/* Error message */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-sm"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.div
                  custom={4}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 rounded-md border border-border bg-orange text-md md:text-lg font-semibold flex items-center gap-3 hover:shadow-[-3px_3px_0px_#FFE864] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  >
                    <AnimatePresence mode="wait">
                      {status === 'loading' ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2.5"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2.5"
                        >
                          Send Message
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
