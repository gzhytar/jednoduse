import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact-form'

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ráda s vámi proberu vaše potřeby a pomohu najít tu správnou cestu pro váš osobní růst
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Kontaktní informace
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
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
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
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
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Kde mě najdete
            </h2>
            <p className="text-lg text-muted-foreground">
              Praktikuji v klidném prostředí v centru Prahy
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
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
          </div>
        </div>
      </section>
    </div>
  )
}
