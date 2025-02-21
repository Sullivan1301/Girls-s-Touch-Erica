"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Facebook, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Shop() {
  const [name, setName] = useState("")
  const [products, setProducts] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const orderData = {
      name,
      products,
      address,
      contact,
      date: new Date().toISOString(),
    }

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        alert("Commande envoyée avec succès!")
        router.push("/")
      } else {
        alert("Erreur lors de l'envoi de la commande. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b border-[#fdb424]">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#fdb424]">Girl&apos;s Touch Erica</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm hover:text-[#fdb424]" href="/#about">
              À propos
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="/#products">
              Nos Produits
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="/#treatments">
              Soins
            </Link>
            <Link className="text-sm hover:text-[#fdb424]" href="/#contact">
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Passer une commande</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="products">Produits</Label>
            <Textarea id="products" value={products} onChange={(e) => setProducts(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="address">Adresse de livraison</Label>
            <Textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="contact">Numéro de contact</Label>
            <Input id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full bg-[#fdb424] hover:bg-[#fdb424]/90 text-white">
            Envoyer la commande
          </Button>
        </form>
      </main>
      <footer className="border-t border-[#fdb424]">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:justify-between md:gap-4">
          <p className="text-xs text-[#000001]">© 2024 Girl&apos;s Touch Erica. Tous droits réservés.</p>
          <p className="text-xs text-[#000001]">Soins du visage naturels et bio</p>
        </div>
      </footer>
    </div>
  )
}

