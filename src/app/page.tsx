'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Palette, User } from 'lucide-react'
import Link from 'next/link'

const offerings = [
  {
    id: 'konstelace',
    title: 'Konstelace',
    description: 'Rodinné a systémové konstelace pro hlubší pochopení vztahů a vzorců.',
    icon: Users,
    color: 'from-teal-100/80 to-teal-200/80',
    hoverColor: 'from-teal-200/90 to-teal-300/90',
    position: { x: 0, y: -100 },
  },
  {
    id: 'arteterapie',
    title: 'Arteterapie',
    description: 'Terapeutická práce s uměním a kreativitou pro sebevyjádření a léčení.',
    icon: Palette,
    color: 'from-orange-100/80 to-orange-200/80',
    hoverColor: 'from-orange-200/90 to-orange-300/90',
    position: { x: 100, y: 0 },
  },
  {
    id: 'doprovazeni',
    title: 'Doprovázení',
    description: 'Osobní doprovázení na cestě osobního růstu a sebepoznání.',
    icon: Heart,
    color: 'from-amber-100/80 to-amber-200/80',
    hoverColor: 'from-amber-200/90 to-amber-300/90',
    position: { x: 0, y: 100 },
  },
  {
    id: 'individuální-prace',
    title: 'Individuální práce',
    description: 'Jednotlivé sezení zaměřená na specifické potřeby a výzvy.',
    icon: User,
    color: 'from-slate-100/80 to-slate-200/80',
    hoverColor: 'from-slate-200/90 to-slate-300/90',
    position: { x: -100, y: 0 },
  },
]

export default function Home() {
  const [hoveredOffering, setHoveredOffering] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6"
            >
              Dagmar Mazalová
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Osobní doprovázení prostřednictvím konstelací, arteterapie a individuální práce
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-serif italic text-primary mb-12"
            >
              &ldquo;Konstelace nelze popsat, musí se zažít.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Circle Visualization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Moje služby
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Každá služba je jedinečnou cestou k sebepoznání a osobnímu růstu
            </p>
          </div>

          {/* Circle Visualization */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Circle */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center z-10 backdrop-blur-sm border border-white/20 shadow-lg">
              <span className="text-primary font-serif font-semibold text-sm text-center">
                Centrum<br />péče
              </span>
            </div>

            {/* Offering Circles */}
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="absolute"
                style={{
                  transform: `translate(${offering.position.x}px, ${offering.position.y}px)`,
                }}
                onMouseEnter={() => setHoveredOffering(offering.id)}
                onMouseLeave={() => setHoveredOffering(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${offering.color} ${hoveredOffering === offering.id ? offering.hoverColor : ''} flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm border border-white/30 transition-all duration-300 circle-hover`}
                >
                  <offering.icon className="w-8 h-8 text-foreground" />
                </motion.div>
                
                {/* Offering Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredOffering === offering.id ? 1 : 0,
                    y: hoveredOffering === offering.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 bg-background/95 backdrop-blur-sm border border-white/30 rounded-lg p-4 shadow-lg z-20"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {offering.description}
                  </p>
                  <Link
                    href={`/sluzby#${offering.id}`}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
                  >
                    Zjistit více →
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Grid for smaller screens */}
          <div className="md:hidden grid grid-cols-2 gap-6 mt-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/95 backdrop-blur-sm border border-white/30 rounded-lg p-6 text-center shadow-lg"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${offering.color} flex items-center justify-center mx-auto mb-4`}>
                  <offering.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {offering.description}
                </p>
                <Link
                  href={`/sluzby#${offering.id}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
                >
                  Zjistit více →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
          >
            Připraveni začít svou cestu?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Kontaktujte mě a společně najdeme tu správnou cestu pro váš osobní růst
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
              href="/o-mne"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
            >
              Více o mně
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}