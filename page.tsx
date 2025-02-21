import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b border-[#fdb424]">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#fdb424]">Girl&apos;s Touch Erica</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm hover:text-[#fdb424]" href="#about">
              À propos
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="#products">
              Nos Produits
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="#treatments">
              Soins
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/shop">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5 text-[#fdb424]" />
              </Button>
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=100086552594108" target="_blank">
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5 text-[#fdb424]" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Existing sections... */}

        <section id="products" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-[#000001]">
              Nos Produits Naturels
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Crème Hydratante"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2 text-[#000001]">Crème Coiffante</h3>
                  <p className="text-sm text-[#000001] mb-4">
                    Une crème légère et nourrissante pour tous types de cheveux.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sérum Anti-âge"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2 text-[#000001]">Creme de Blé</h3>
                  <p className="text-sm text-[#000001] mb-4">
                    Une crème puissante pour le blanchissement de la peau.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Masque Purifiant"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2 text-[#000001]">Creme du Jour</h3>
                  <p className="text-sm text-[#000001] mb-4">Un mcreme qui protège de toutes les nocifs de la journée</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-[#fdb424] hover:bg-[#fdb424]/90 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contactez-nous pour commander
              </Button>
            </div>
          </div>
        </section>

        {/* Other existing sections... */}
      </main>
      <footer className="border-t border-[#fdb424]">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:justify-between md:gap-4">
          <p className="text-xs text-[#000001]">©Sullivan 2025 - Girl&apos;s Touch Erica. Tous droits réservés.</p>
          <p className="text-xs text-[#000001]">Soins du visage naturels et bio</p>
        </div>
      </footer>
    </div>
  )
}

