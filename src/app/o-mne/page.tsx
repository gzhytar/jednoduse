'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Users } from 'lucide-react'

const credentials = [
  {
    title: 'Certifikovaná terapeutka konstelací',
    institution: 'Institut pro rodinné konstelace',
    year: '2018'
  },
  {
    title: 'Arteterapeutka',
    institution: 'Česká arteterapeutická asociace',
    year: '2019'
  },
  {
    title: 'Kouč osobního rozvoje',
    institution: 'International Coaching Federation',
    year: '2020'
  },
  {
    title: 'Specializace na trauma',
    institution: 'Institut pro trauma terapii',
    year: '2021'
  }
]

const experience = [
  {
    title: 'Soukromá praxe',
    description: 'Individuální a skupinové sezení s klienty',
    years: '2018 - současnost'
  },
  {
    title: 'Centrum pro rodinu',
    description: 'Vedení rodinných konstelací a arteterapie',
    years: '2019 - 2022'
  },
  {
    title: 'Léčebné centrum',
    description: 'Práce s klienty s traumaty a závislostmi',
    years: '2020 - 2021'
  },
  {
    title: 'Vzdělávací centrum',
    description: 'Vedení workshopů a seminářů',
    years: '2019 - současnost'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                O mně
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Jmenuji se Dagmar Mazalová a již více než 6 let pomáhám lidem na jejich cestě k sebepoznání a osobnímu růstu.
              </p>
               <blockquote className="text-lg italic text-primary border-l-4 border-primary pl-6 mb-8">
                 &ldquo;Věřím, že každý člověk má v sobě zdroje pro uzdravení a růst. Mým posláním je být průvodcem na této cestě.&rdquo;
               </blockquote>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground italic">
                    Symbolické foto - respektujeme soukromí
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Má cesta
            </h2>
            <p className="text-lg text-muted-foreground">
              Jak jsem se dostala k práci s lidmi a jejich osobním rozvojem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-foreground leading-relaxed mb-6">
              Moje cesta k terapeutické práci začala před více než deseti lety, kdy jsem sama procházela náročným obdobím v životě. 
              Během této doby jsem objevila sílu konstelací a arteterapie, které mi pomohly najít odpovědi na otázky, které jsem si kladla.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Tato zkušenost mě inspirovala k tomu, abych se začala vzdělávat v těchto oblastech a pomáhala ostatním lidem na jejich cestě. 
              Věřím, že každý z nás má v sobě moudrost a zdroje pro uzdravení - někdy jen potřebujeme průvodce, který nám pomůže je objevit.
            </p>
            <p className="text-foreground leading-relaxed">
              Dnes se specializuji na kombinaci různých přístupů - konstelací, arteterapie a koučinku - protože každý člověk je jedinečný 
              a potřebuje individuální přístup. Mým cílem je vytvořit bezpečný prostor, kde se můžete cítit přijímáni a podporováni v růstu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Vzdělání a certifikace
            </h2>
            <p className="text-lg text-muted-foreground">
              Průběžně se vzdělávám a rozvíjím své dovednosti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-foreground mb-1">
                      {credential.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {credential.institution}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {credential.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Zkušenosti
            </h2>
            <p className="text-lg text-muted-foreground">
              Praxe v různých prostředích a s různými klienty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {exp.description}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {exp.years}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Má filozofie
            </h2>
            <div className="space-y-6">
               <blockquote className="text-2xl md:text-3xl font-serif italic text-primary mb-8">
                 &ldquo;Konstelace nelze popsat, musí se zažít.&rdquo;
               </blockquote>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Věřím, že každý člověk má v sobě moudrost a zdroje pro uzdravení. Mým posláním je být průvodcem na cestě k sebepoznání, 
                kde společně objevujeme vaše vnitřní síly a možnosti růstu.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Respektuji vaši jedinečnost a vytvářím bezpečný prostor, kde se můžete cítit přijímáni a podporováni. 
                Společně najdeme tu správnou cestu pro váš osobní rozvoj.
              </p>
            </div>
          </motion.div>
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
            Chcete se seznámit osobně?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Ráda s vámi proberu, jak vám mohu pomoci na vaší cestě
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/kontakt"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Kontaktovat mě
            </a>
            <a
              href="/sluzby"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
            >
              Zobrazit služby
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
