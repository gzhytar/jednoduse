'use client'

import { motion } from 'framer-motion'
import { Check, Clock, Users, Heart, User } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Konstelace',
    icon: Users,
    price: '1500',
    currency: 'CZK',
    duration: '2-3 hodiny',
    description: 'Rodinné a systémové konstelace pro hlubší pochopení vztahů',
    features: [
      'Individuální nebo skupinové sezení',
      'Práce s rodinnými systémy',
      'Zástupci pro zobrazení dynamik',
      'Hluboká práce s tématy',
      'Následná podpora'
    ],
    color: 'from-blue-100 to-blue-200',
    popular: false
  },
  {
    name: 'Arteterapie',
    icon: Heart,
    price: '1200',
    currency: 'CZK',
    duration: '60-90 minut',
    description: 'Terapeutická práce s uměním a kreativitou',
    features: [
      'Všechny materiály v ceně',
      'Individuální přístup',
      'Bezpečný prostor pro vyjádření',
      'Práce s emocemi a traumaty',
      'Výtvory si odnášíte domů'
    ],
    color: 'from-green-100 to-green-200',
    popular: true
  },
  {
    name: 'Doprovázení',
    icon: Heart,
    price: '1000',
    currency: 'CZK',
    duration: '60 minut',
    description: 'Osobní doprovázení na cestě růstu',
    features: [
      'Individuální koučink',
      'Práce s cíli a vizemi',
      'Podpora při změnách',
      'Rozvoj sebevědomí',
      'Flexibilní přístup'
    ],
    color: 'from-amber-100 to-amber-200',
    popular: false
  },
  {
    name: 'Individuální práce',
    icon: User,
    price: '1200-2000',
    currency: 'CZK',
    duration: '60-120 minut',
    description: 'Přizpůsobené sezení podle vašich potřeb',
    features: [
      'Kombinace různých metod',
      'Přizpůsobená délka sezení',
      'Intenzivní práce s tématy',
      'Osobní přístup',
      'Měření pokroku'
    ],
    color: 'from-purple-100 to-purple-200',
    popular: false
  }
]

const additionalServices = [
  {
    name: 'Úvodní konzultace',
    price: '500 CZK',
    duration: '30 minut',
    description: 'Seznámení a zjištění vašich potřeb'
  },
  {
    name: 'Sledné sezení',
    price: '800 CZK',
    duration: '45 minut',
    description: 'Kratší sezení pro udržení pokroku'
  },
  {
    name: 'Skupinové workshopy',
    price: '800 CZK',
    duration: '2 hodiny',
    description: 'Tematické workshopy pro malé skupiny'
  },
  {
    name: 'Online konzultace',
    price: '900 CZK',
    duration: '60 minut',
    description: 'Sezení přes videohovor'
  }
]

export default function PricingPage() {
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
              Ceník služeb
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Transparentní ceny pro všechny služby. Každá investice do sebe je investice do vašeho štěstí a růstu.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Nejoblíbenější
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200 mt-auto ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  Zarezervovat
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Další služby
            </h2>
            <p className="text-lg text-muted-foreground">
              Doplňkové služby pro vaše potřeby
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">
                  {service.price}
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  {service.duration}
                </p>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Platební podmínky
            </h2>
            <p className="text-lg text-muted-foreground">
              Všechny informace o platbách a rezervacích
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-serif font-semibold text-foreground mb-4">
                Způsoby platby
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hotovost při sezení</li>
                <li>• Bankovní převod</li>
                <li>• Platební kartou</li>
                <li>• Online platba</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-serif font-semibold text-foreground mb-4">
                Rezervace a stornování
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rezervace minimálně 24h dopředu</li>
                <li>• Stornování do 24h před sezením zdarma</li>
                <li>• Při pozdějším stornování 50% ceny</li>
                <li>• Možnost přesunutí termínu</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Často kladené otázky
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Jsou ceny konečné nebo se připočítávají další poplatky?
              </h3>
              <p className="text-muted-foreground">
                Všechny ceny jsou konečné a zahrnují veškeré materiály a pomůcky. Nejsou žádné skryté poplatky.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Mohu kombinovat různé služby?
              </h3>
              <p className="text-muted-foreground">
                Ano, ráda s vámi proberu kombinaci různých přístupů podle vašich potřeb. Cena se upraví podle délky a náročnosti sezení.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Nabízíte slevy pro pravidelné klienty?
              </h3>
              <p className="text-muted-foreground">
                Ano, pro klienty s pravidelnými sezeními nabízím balíčky se slevou. Kontaktujte mě pro více informací.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
          >
            Máte otázky k cenám?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Ráda s vámi proberu všechny detaily a pomohu vybrat tu správnou službu
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/kontakt"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Kontaktovat mě
            </Link>
            <Link
              href="/sluzby"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
            >
              Zobrazit služby
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
