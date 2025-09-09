'use client'

import { motion } from 'framer-motion'
import { Users, Palette, Heart, User } from 'lucide-react'
import SluzbyHero from '@/components/sluzby-hero'
import SluzbyCta from '@/components/sluzby-cta'

const offerings = [
  {
    id: 'konstelace',
    title: 'Konstelace',
    description: 'Rodinné a systémové konstelace pro hlubší pochopení vztahů a vzorců v rodině a dalších systémech.',
    longDescription: 'Konstelace jsou terapeutickou metodou, která nám umožňuje nahlédnout do skrytých dynamik v rodinných a jiných systémech. Pomocí zástupců můžeme zobrazit a prožít vztahy, které nás ovlivňují, často nevědomě. Tato metoda pomáhá odhalit a uvolnit blokády, které brání našemu osobnímu růstu a zdravým vztahům.',
    icon: Users,
    color: 'from-teal-100 to-teal-200',
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
    color: 'from-orange-100 to-orange-200',
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
    color: 'from-amber-100 to-amber-200',
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
    color: 'from-slate-100 to-slate-200',
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
      <SluzbyHero />

      {/* Services Listing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:gap-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                id={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/95 backdrop-blur-sm border border-white/30 rounded-lg p-8 shadow-lg"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Icon and Basic Info */}
                  <div className="md:col-span-1">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${offering.color} flex items-center justify-center mb-6`}>
                      <offering.icon className="w-10 h-10 text-slate-700" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                      {offering.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {offering.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Délka:</span>
                        <span className="text-sm font-medium text-foreground">{offering.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Cena:</span>
                        <span className="text-sm font-medium text-foreground">{offering.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Content */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-foreground leading-relaxed">
                      {offering.longDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h3 className="font-serif font-semibold text-foreground mb-3">
                          Co zahrnuje:
                        </h3>
                        <ul className="space-y-2">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SluzbyCta />
    </div>
  )
}
