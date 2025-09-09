'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SluzbyCta() {
  return (
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
  )
}
