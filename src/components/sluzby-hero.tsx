'use client'

import { motion } from 'framer-motion'

export default function SluzbyHero() {
  return (
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
  )
}
