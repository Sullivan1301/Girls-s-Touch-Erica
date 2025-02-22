import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Girl's Touch Erica - Soins du visage naturels",
  description: "Des produits bio faits maison par les soins de Tatie Erica pour révéler votre beauté naturelle.",
  icons: {
    icon: "/icon.png",
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

