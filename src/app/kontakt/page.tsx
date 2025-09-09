'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@dagmarmazalova.cz',
    href: 'mailto:info@dagmarmazalova.cz'
  },
  {
    icon: Phone,
    title: 'Telefon',
    value: '+420 123 456 789',
    href: 'tel:+420123456789'
  },
  {
    icon: MapPin,
    title: 'Adresa',
    value: 'Praha, Česká republika',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Pracovní doba',
    value: 'Po-Pá: 9:00-18:00\nSo: 9:00-14:00',
    href: '#'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          consent: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
            >
              Kontakt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ráda s vámi proberu vaše potřeby a pomohu najít tu správnou cestu pro váš osobní růst
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Kontaktní informace
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 p-6 bg-muted/30 rounded-lg"
              >
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Proč mě kontaktovat?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bezplatná úvodní konzultace</li>
                  <li>• Individuální přístup k vašim potřebám</li>
                  <li>• Pomoc s výběrem vhodné služby</li>
                  <li>• Odpovědi na všechny vaše otázky</li>
                  <li>• Rezervace termínu</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Napište mi
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800">
                    Děkuji za vaši zprávu! Ozvu se vám co nejdříve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800">
                    Omlouvám se, došlo k chybě. Zkuste to prosím znovu nebo mě kontaktujte telefonicky.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Vaše jméno"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="vas@email.cz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="+420 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Zajímá mě služba
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Vyberte službu</option>
                      <option value="konstelace">Konstelace</option>
                      <option value="arteterapie">Arteterapie</option>
                      <option value="doprovazeni">Doprovázení</option>
                      <option value="individuální-prace">Individuální práce</option>
                      <option value="jiné">Jiné</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Popište, s čím vám mohu pomoci..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    Souhlasím se zpracováním osobních údajů podle GDPR. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Odesílám...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Odeslat zprávu</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Kde mě najdete
            </h2>
            <p className="text-lg text-muted-foreground">
              Praktikuji v klidném prostředí v centru Prahy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8 text-center"
          >
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa bude zobrazena zde
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Praha, Česká republika
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Přesnou adresu vám pošlu po rezervaci termínu
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
