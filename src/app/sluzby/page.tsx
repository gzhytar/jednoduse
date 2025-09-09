'use client'

import { motion } from 'framer-motion'
import { Users, Palette, Heart, User, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

const offerings = [
  {
    id: 'konstelace',
    title: 'Konstelace',
    description: 'Rodinné a systémové konstelace pro hlubší pochopení vztahů a vzorců v rodině a dalších systémech.',
    longDescription: 'Konstelace jsou terapeutickou metodou, která nám umožňuje nahlédnout do skrytých dynamik v rodinných a jiných systémech. Pomocí zástupců můžeme zobrazit a prožít vztahy, které nás ovlivňují, často nevědomě. Tato metoda pomáhá odhalit a uvolnit blokády, které brání našemu osobnímu růstu a zdravým vztahům.',
    icon: Users,
    color: 'from-teal-100/80 to-teal-200/80',
    features: [
      'Rodinné konstelace',
      'Systémové konstelace',
      'Individuální konstelace',
      'Skupinové sezení',
      'Práce s transgeneračními vzorci'
    ],
    duration: '2-3 hodiny',
    price: '1500 CZK',
    benefits: [
      'Hlubší pochopení rodinných dynamik',
      'Uvolnění blokád a vzorců',
      'Lepší vztahy v rodině',
      'Sebepoznání a osobní růst',
      'Uzdravení rodinných vztahů'
    ]
  },
  {
    id: 'arteterapie',
    title: 'Arteterapie',
    description: 'Terapeutická práce s uměním a kreativitou pro sebevyjádření, léčení a osobní rozvoj.',
    longDescription: 'Arteterapie využívá kreativní proces jako terapeutický nástroj. Prostřednictvím malování, kreslení, modelování a dalších uměleckých technik můžeme vyjádřit a zpracovat emoce, myšlenky a zkušenosti, které jsou obtížně vyjádřitelné slovy. Tato metoda je vhodná pro všechny věkové kategorie a nevyžaduje umělecké dovednosti.',
    icon: Palette,
    color: 'from-orange-100/80 to-orange-200/80',
    features: [
      'Malování a kreslení',
      'Modelování z hlíny',
      'Koláže a asambláže',
      'Práce s barvami a tvary',
      'Symbolická práce'
    ],
    duration: '60-90 minut',
    price: '1200 CZK',
    benefits: [
      'Sebevyjádření a komunikace',
      'Zvládání stresu a úzkosti',
      'Zvýšení sebevědomí',
      'Rozvoj kreativity',
      'Emocionální uvolnění'
    ]
  },
  {
    id: 'doprovazeni',
    title: 'Doprovázení',
    description: 'Osobní doprovázení na cestě osobního růstu, sebepoznání a životních změn.',
    longDescription: 'Doprovázení je proces, ve kterém vás podporuji na vaší životní cestě. Společně prozkoumáváme vaše potřeby, cíle a výzvy, hledáme zdroje a strategie pro jejich řešení. Tento přístup je založen na respektu k vaší jedinečnosti a na víře ve vaši schopnost najít vlastní odpovědi a řešení.',
    icon: Heart,
    color: 'from-amber-100/80 to-amber-200/80',
    features: [
      'Individuální sezení',
      'Životní koučink',
      'Podpora při změnách',
      'Práce s cíli a vizemi',
      'Rozvoj sebevědomí'
    ],
    duration: '60 minut',
    price: '1000 CZK',
    benefits: [
      'Jasnost v životních cílech',
      'Zvýšení sebevědomí',
      'Lepší rozhodování',
      'Podpora při změnách',
      'Osobní růst a rozvoj'
    ]
  },
  {
    id: 'individuální-prace',
    title: 'Individuální práce',
    description: 'Jednotlivé sezení zaměřená na specifické potřeby, výzvy a osobní témata.',
    longDescription: 'Individuální práce je přizpůsobena vašim specifickým potřebám a situaci. Můžeme kombinovat různé přístupy - konstelace, arteterapii, koučink nebo jiné metody podle toho, co je pro vás nejvhodnější. Každé sezení je jedinečné a zaměřené na váš osobní růst a uzdravení.',
    icon: User,
    color: 'from-slate-100/80 to-slate-200/80',
    features: [
      'Přizpůsobené přístupy',
      'Kombinace metod',
      'Flexibilní délka sezení',
      'Intenzivní práce',
      'Osobní témata'
    ],
    duration: '60-120 minut',
    price: '1200-2000 CZK',
    benefits: [
      'Osobní přístup',
      'Hluboká práce s tématy',
      'Flexibilita metod',
      'Intenzivní podpora',
      'Měření pokroku'
    ]
  }
]

export default function OfferingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
            >
              Moje služby
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Každá služba je jedinečnou cestou k sebepoznání a osobnímu růstu. 
              Společně najdeme tu správnou metodu pro vaše potřeby.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                id={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/95 backdrop-blur-sm border border-white/30 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${offering.color} flex items-center justify-center flex-shrink-0`}>
                    <offering.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {offering.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  {/* Long Description */}
                  <p className="text-foreground leading-relaxed">
                    {offering.longDescription}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-3">
                      Co zahrnuje:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offering.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-3">
                      Výhody:
                    </h3>
                    <ul className="space-y-2">
                      {offering.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Duration */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/30">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{offering.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{offering.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
          >
            Máte otázky nebo chcete začít?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Ráda s vámi proberu, která služba by pro vás byla nejvhodnější
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
              href="/cenik"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
            >
              Zobrazit ceník
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
