'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, Palette, Heart, User } from 'lucide-react'

const offerings = [
  {
    id: 'konstelace',
    title: 'Konstelace',
    description: 'Rodinné a systémové konstelace pro hlubší pochopení vztahů a vzorců v rodině a dalších systémech.',
    longDescription: 'Konstelace jsou terapeutickou metodou, která nám umožňuje nahlédnout do skrytých dynamik v rodinných a jiných systémech. Pomocí zástupců můžeme zobrazit a prožít vztahy, které nás ovlivňují, často nevědomě. Tato metoda pomáhá odhalit a uvolnit blokády, které brání našemu osobnímu růstu a zdravým vztahům.',
    icon: Users,
    color: '#B2F5EA', // teal-200
    hoverColor: '#81E6D9', // teal-300
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
    color: '#FED7AA', // orange-200
    hoverColor: '#FDBA74', // orange-300
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
    color: '#FDE68A', // amber-200
    hoverColor: '#FCD34D', // amber-300
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
    color: '#E2E8F0', // slate-200
    hoverColor: '#CBD5E1', // slate-300
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

export default function CircleOfferings() {
  const [selectedOffering, setSelectedOffering] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const getSegmentPath = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total
    const nextAngle = (2 * Math.PI * (index + 1)) / total
    
    const x1 = radius + radius * Math.cos(angle - Math.PI / 2)
    const y1 = radius + radius * Math.sin(angle - Math.PI / 2)
    const x2 = radius + radius * Math.cos(nextAngle - Math.PI / 2)
    const y2 = radius + radius * Math.sin(nextAngle - Math.PI / 2)
    
    const largeArcFlag = nextAngle - angle <= Math.PI ? 0 : 1
    
    return `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
  }

  const getSegmentCenter = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total + Math.PI / total
    const x = radius + (radius * 0.7) * Math.cos(angle - Math.PI / 2)
    const y = radius + (radius * 0.7) * Math.sin(angle - Math.PI / 2)
    return { x, y }
  }

  const radius = isMobile ? 150 : 200

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Circle Visualization */}
      <div className="relative flex justify-center items-center mb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-md"
        >
          <svg 
            width={radius * 2} 
            height={radius * 2} 
            className="drop-shadow-lg w-full h-auto"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          >
            {/* Define gradients */}
            <defs>
              {offerings.map((offering) => (
                <linearGradient key={`gradient-${offering.id}`} id={`gradient-${offering.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={offering.color} />
                  <stop offset="100%" stopColor={offering.hoverColor} />
                </linearGradient>
              ))}
            </defs>
            
            {offerings.map((offering, index) => {
              const center = getSegmentCenter(index, offerings.length, radius)
              const isSelected = selectedOffering === offering.id
              
              return (
                <g key={offering.id}>
                  <motion.path
                    d={getSegmentPath(index, offerings.length, radius)}
                    fill={isSelected ? `url(#gradient-${offering.id})` : offering.color}
                    stroke="white"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300 hover:opacity-90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedOffering(isSelected ? null : offering.id)}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  
                  {/* Icon and text */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <foreignObject
                      x={center.x - (isMobile ? 30 : 40)}
                      y={center.y - (isMobile ? 20 : 25)}
                      width={isMobile ? "60" : "80"}
                      height={isMobile ? "40" : "50"}
                      className="pointer-events-none"
                    >
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <offering.icon className={`${isMobile ? 'w-5 h-5' : 'w-7 h-7'} text-slate-700 mb-1`} />
                        <span className={`${isMobile ? 'text-[11px]' : 'text-sm'} font-semibold text-slate-700 text-center leading-tight`}>
                          {offering.title.split(' ').map((word, i) => (
                            <tspan key={i} x="50%" dy={i > 0 ? "1.3em" : "0"} textAnchor="middle">
                              {word}
                            </tspan>
                          ))}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                </g>
              )
            })}
          </svg>
        </motion.div>
      </div>

      {/* Selected Offering Details */}
      <AnimatePresence mode="wait">
        {selectedOffering && (
          <motion.div
            key={selectedOffering}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-card/95 backdrop-blur-sm border border-white/30 rounded-lg p-8 max-w-2xl mx-auto"
          >
            {(() => {
              const offering = offerings.find(o => o.id === selectedOffering)
              if (!offering) return null
              
              return (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: offering.color }}
                    >
                      <offering.icon className="w-8 h-8 text-slate-700" />
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
                      <span className="text-muted-foreground">{offering.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground font-medium">{offering.price}</span>
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
