import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-velvet-black text-velvet-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/velvet-dream-logo.png" alt="VelvetDream" width={200} height={80} className="mb-4" />
            <p className="text-sm text-velvet-white/70 text-center md:text-left">
              Une maison créative née d&apos;une passion pour l&apos;imaginaire et une esthétique fusionnant douceur,
              diversité et élégance.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-velvet-gold font-semibold text-lg mb-4">Liens Rapides</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#a-propos" className="text-velvet-white/80 hover:text-velvet-gold transition-colors">
                À propos
              </Link>
              <Link href="#univers" className="text-velvet-white/80 hover:text-velvet-gold transition-colors">
                Univers
              </Link>
              <Link href="#projets" className="text-velvet-white/80 hover:text-velvet-gold transition-colors">
                Projets
              </Link>
              <Link href="#valeurs" className="text-velvet-white/80 hover:text-velvet-gold transition-colors">
                Valeurs
              </Link>
              <Link href="#contact" className="text-velvet-white/80 hover:text-velvet-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-velvet-gold font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <Link
                href="https://linktr.ee/nekoniyah"
                className="flex items-center gap-2 text-velvet-white/80 hover:text-velvet-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm md:text-base">linktr.ee/nekoniyah</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-velvet-white/10 text-center text-sm text-velvet-white/50">
          <p>© {new Date().getFullYear()} VelvetDream. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
