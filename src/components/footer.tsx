import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Kontakt
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:info@dagmarmazalova.cz"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  info@dagmarmazalova.cz
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+420123456789"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +420 123 456 789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <p className="text-muted-foreground">
                  Praha, Česká republika
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Služby
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sluzby#konstelace"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Konstelace
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby#arteterapie"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Arteterapie
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby#doprovazeni"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Doprovázení
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby#individuální-prace"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Individuální práce
                </Link>
              </li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Filozofie
            </h3>
            <p className="text-muted-foreground italic text-sm leading-relaxed">
              &ldquo;Konstelace nelze popsat, musí se zažít.&rdquo;
            </p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Osobní doprovázení prostřednictvím konstelací, arteterapie a individuální práce.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Dagmar Mazalová. Všechna práva vyhrazena.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm">
                Vytvořeno s láskou pro osobní rozvoj
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
