import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
          Stránka nebyla nalezena
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Omlouvám se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Domů</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zpět</span>
          </button>
        </div>
      </div>
    </div>
  )
}
