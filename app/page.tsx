"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Menu, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder-logo.png?height=40&width=40"
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded mt-2 ml-2"
            />
            <h1 className="text-xl font-bold">Construccion Natural</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Servicios
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre Nosotros
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              Nuestros Trabajos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contacto
            </Link>
          </nav>

          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Contáctanos</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="#services"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="#portfolio"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nuestros Trabajos
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contáctanos
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  "Barro, fuego y hogar: la construcción consciente."
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground md:text-xl">
                  Expertos en bioconstrucción ecológica con materiales naturales.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#contact">Contáctanos</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="#services">Nuestros Servicios</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/casa3.jpg?height=400&width=600"
                alt="Natural Building"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="aspect-video object-cover transition-all hover:scale-105 mt-6 lg:mt-0"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"></p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-2 sm:p-4">
                  <Image
                    src="/casa2.jpg?height=400&width=600"
                    alt="Mud Houses"
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Casas de Barro</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Viviendas sustentables y eficientes térmicamente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-2 sm:p-4">
                  <Image
                    src="/horno.jpg?height=400&width=600"
                    alt="Clay Ovens"
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Hornos de Barro</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Hornos tradicionales para una cocina natural.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center sm:col-span-2 lg:col-span-1">
                <div className="p-2 sm:p-4">
                  <Image
                    src="/rocket.jpg?height=400&width=600"
                    alt="Rocket Stoves"
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-video object-cover transition-all hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Estufas Rocket</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Calor eficiente con menos leña.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="/casa4.jpg?height=550&width=550"
                alt="About Us"
                width={550}
                height={550}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover order-2 lg:order-1"
              />
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Sobre Nosotros
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground md:text-xl">
                  Somos una empresa de bioconstrucción especializada en la creación de casas de barro, hornos de barro y
                  estufas Rocket de alto rendimiento. Creemos en la construcción sustentable, utilizando materiales
                  naturales y técnicas ecológicas que garantizan confort, eficiencia y armonía con el entorno. Nuestro
                  compromiso es ofrecer soluciones de vivienda más saludables, económicas y en equilibrio con la
                  naturaleza.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground md:text-xl">
                  Nuestro enfoque combina la sabiduría antigua con el conocimiento moderno, dando como resultado
                  estructuras que no solo son respetuosas con el medio ambiente, sino también cómodas, duraderas y
                  estéticamente agradables.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="#contact">Trabaja con nosotros</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Completed Work */}
        <section id="portfolio" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Trabajo Terminado
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Eche un vistazo a algunos de nuestros proyectos completados recientemente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/casa1.jpg?height=400&width=600"
                  alt="Completed Project 1"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Casa Familiar Ecológica</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Construcción de adobe con techo verde</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/horno.jpg?height=400&width=600"
                  alt="Completed Project 2"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Horno de barro comunitario</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Diseño tradicional con mejoras modernas.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
                <Image
                  src="/rocket.jpg?height=400&width=600"
                  alt="Completed Project 3"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Sistema de estufa Rocket integrado</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Solución de calefacción y cocina para cabañas fuera de la red.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Work Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Otros Proyectos
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore más de nuestros diversos proyectos de construcción.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/piscina.jpg?height=400&width=600"
                  alt="Other Project 1"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Piscina natural</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Sistema de filtración de agua sin químicos.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/muro.jpg?height=400&width=600"
                  alt="Other Project 2"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Muro de jardín de adobe</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Límite decorativo y funcional.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
                <Image
                  src="/piso.jpg?height=400&width=600"
                  alt="Other Project 3"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Instalación de suelo de tierra.</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Solución de suelo natural y duradera.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Contáctanos</h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Póngase en contacto con nosotros para hablar sobre su proyecto o conocer más sobre nuestros servicios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-8 md:py-12">
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const firstName = formData.get("firstName")
                  const lastName = formData.get("lastName")
                  const whatsapp = formData.get("whatsapp")
                  const email = formData.get("email")
                  const message = formData.get("message")

                  // Format the message for WhatsApp
                  const whatsappMessage = encodeURIComponent(
                    `Name: ${firstName} ${lastName}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nMessage: ${message}`,
                  )

                  // Open WhatsApp with the pre-filled message
                  window.open(`https://wa.me/5491163604558?text=${whatsappMessage}`, "_blank")
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input id="whatsapp" name="whatsapp" type="tel" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" name="message" className="min-h-[120px]" required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <WhatsApp className="mr-2 h-4 w-4" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-8 md:py-12">
        <div className="container grid gap-8 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder-logo.png?height=40&width=40"
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-lg font-bold">Construccion Natural</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Construyendo estructuras sostenibles en armonía con la naturaleza desde 2010.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://wa.me/5491163604558" className="text-muted-foreground hover:text-foreground">
                <WhatsApp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Información del contacto</h3>
            <div className="grid gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+54 (11) 63604558</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contact@construccionnatural.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Warnes 123, Merlo, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold">Enlaces rápidos</h3>
            <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 text-xs sm:text-sm">
              <Link href="#services" className="hover:underline">
                Servicios
              </Link>
              <Link href="#about" className="hover:underline">
                Sobre Nosotros
              </Link>
              <Link href="#portfolio" className="hover:underline">
                Nuestros Trabajos
              </Link>
              <Link href="#contact" className="hover:underline">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8 px-4 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Construccion Natural. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

