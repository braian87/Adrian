"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <h1 className="text-xl font-bold">Natural Building Co.</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              Our Work
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Building Naturally, Living Sustainably
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  We create beautiful, sustainable, and eco-friendly structures using traditional techniques and natural
                  materials. Our passion is building in harmony with nature.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Natural Building"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in sustainable building techniques that are both beautiful and environmentally friendly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Mud Houses"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Mud Houses</h3>
                <p className="text-muted-foreground">
                  Sustainable, energy-efficient homes built with natural materials that breathe and regulate temperature
                  naturally.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Clay Ovens"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Clay Ovens</h3>
                <p className="text-muted-foreground">
                  Traditional wood-fired ovens that provide exceptional heat retention and impart unique flavors to your
                  food.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Rocket Stoves"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Rocket Stoves</h3>
                <p className="text-muted-foreground">
                  Highly efficient cooking and heating systems that use minimal fuel while producing maximum heat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="About Us"
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <p className="text-muted-foreground md:text-xl">
                  We are a team of passionate builders dedicated to reviving traditional building techniques for modern
                  living. With over a decade of experience in natural building, we've helped countless families create
                  sustainable, beautiful homes and structures that stand the test of time.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Our approach combines ancient wisdom with modern knowledge, resulting in structures that are not only
                  environmentally friendly but also comfortable, durable, and aesthetically pleasing.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Work With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Completed Work */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Completed Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recently completed projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Completed Project 1"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Eco-Friendly Family Home</h3>
                  <p className="text-sm text-muted-foreground">Mud brick construction with living roof</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Completed Project 2"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Community Clay Oven</h3>
                  <p className="text-sm text-muted-foreground">Traditional design with modern improvements</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Completed Project 3"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Integrated Rocket Stove System</h3>
                  <p className="text-sm text-muted-foreground">Heating and cooking solution for off-grid cabin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Work Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Other Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore more of our diverse building projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Other Project 1"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Natural Swimming Pool</h3>
                  <p className="text-sm text-muted-foreground">Chemical-free water filtration system</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Other Project 2"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Cob Garden Wall</h3>
                  <p className="text-sm text-muted-foreground">Decorative and functional boundary</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Other Project 3"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-all hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold">Earthen Floor Installation</h3>
                  <p className="text-sm text-muted-foreground">Natural, durable flooring solution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch to discuss your project or learn more about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12 lg:gap-12">
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
                  window.open(`https://wa.me/1163604558?text=${whatsappMessage}`, "_blank")
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" className="min-h-[120px]" required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <WhatsApp className="mr-2 h-4 w-4" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-lg font-bold">Natural Building Co.</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Building sustainable structures in harmony with nature since 2010.
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
              <Link href="https://wa.me/1163604558" className="text-muted-foreground hover:text-foreground">
                <WhatsApp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (163) 604-558</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contact@naturalbuilding.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>123 Eco Street, Sustainable City, Earth</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="grid gap-2 text-sm">
              <Link href="#services" className="hover:underline">
                Services
              </Link>
              <Link href="#about" className="hover:underline">
                About Us
              </Link>
              <Link href="#portfolio" className="hover:underline">
                Our Work
              </Link>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8 px-4 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Natural Building Co. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

