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
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#000001]">
                    Soins du Visage Naturels
                  </h1>
                  <p className="max-w-[600px] text-[#000001] md:text-xl">
                    Des produits bio faits maison par les soins de Tatie Erica pour révéler votre beauté naturelle.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#fdb424] hover:bg-[#fdb424]/90 text-white">
                    Visitez-nous
                  </Button>
                  <Button size="lg" variant="outline" className="text-[#fdb424] border-[#fdb424] hover:bg-[#fdb424]/10">
                    Découvrir nos Produits
                  </Button>
                </div>
              </div>
              <Image
                alt="Natural skincare products"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:aspect-square"
                height="600"
                src=""
                width="600"
              />
            </div>
          </div>
        </section>

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
                  <h3 className="font-bold mb-2 text-[#000001]">Crème Hydratante</h3>
                  <p className="text-sm text-[#000001] mb-4">
                    Une crème légère et nourrissante pour tous types de peau.
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
                  <h3 className="font-bold mb-2 text-[#000001]">Sérum Anti-âge</h3>
                  <p className="text-sm text-[#000001] mb-4">
                    Un sérum puissant pour lutter contre les signes du vieillissement.
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
                  <h3 className="font-bold mb-2 text-[#000001]">Masque Purifiant</h3>
                  <p className="text-sm text-[#000001] mb-4">Un masque détoxifiant pour une peau nette et éclatante.</p>
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

        <section id="treatments" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-[#000001]">Nos Soins</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-[#000001]">Soin en Profondeur</h3>
                  <p className="text-sm text-[#000001]">
                    Un traitement intensif qui nettoie en profondeur, élimine les impuretés et revitalise votre peau.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-[#000001]">Soin Deluxe</h3>
                  <p className="text-sm text-[#000001]">
                    Une expérience de soin luxueuse et complète pour une régénération totale de la peau.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#fdb424]">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-[#000001]">Soin Hydra Faciale</h3>
                  <p className="text-sm text-[#000001]">
                    Un soin hydratant avancé qui repulpe et revitalise la peau en profondeur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-[#000001]">Venez Nous Rencontrer</h2>
            <p className="text-[#000001] mb-6">
              Pas besoin de rendez-vous ! Venez nous voir pour commencer votre parcours vers une peau naturellement
              belle.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="https://web.facebook.com/profile.php?id=100086552594108" target="_blank">
                <Button className="bg-[#fdb424] hover:bg-[#fdb424]/90 text-white">
                  <Facebook className="w-4 h-4 mr-2" />
                  Suivez-nous sur Facebook
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#fdb424]">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:justify-between md:gap-4">
          <p className="text-xs text-[#000001]">©Sullivan 2025 Girl&apos;s Touch Erica. Tous droits réservés.</p>
          <p className="text-xs text-[#000001]">Soins du visage naturels et bio</p>
        </div>
      </footer>
    </div>
  )
}

