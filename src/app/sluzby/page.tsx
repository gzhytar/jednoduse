import CircleOfferings from '@/components/circle-offerings'
import SluzbyHero from '@/components/sluzby-hero'
import SluzbyCta from '@/components/sluzby-cta'

export default function OfferingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SluzbyHero />

      {/* Circle Offerings Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CircleOfferings />
        </div>
      </section>

      {/* CTA Section */}
      <SluzbyCta />
    </div>
  )
}
