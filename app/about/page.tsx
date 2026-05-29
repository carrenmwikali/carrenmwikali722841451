import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb, Sparkles, Users, Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Usawa Collective",
  description: "Learn about Usawa Collective and our mission to illuminate, support, and scale proven gender equality solutions for lasting transformation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-[#FFF8E7] relative overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#FECE00]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-[#FFC48E]/30 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-[#156159] text-white">About Us</Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Amplifying what works for gender equality
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Usawa — meaning equality in Swahili — represents our commitment to 
                illuminating, supporting, and scaling proven gender equality solutions 
                for lasting transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#FECE00]/20 rounded-full flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h2 className="font-serif text-2xl mb-4 text-[#156159]">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision is a present and future where proven gender equality solutions 
                    are amplified, scaled, and embedded into systems to drive lasting transformation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#FFC48E]/30 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h2 className="font-serif text-2xl mb-4 text-[#156159]">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to illuminate, support, and scale proven gender equality solutions 
                    by amplifying what works, equipping women leaders with resources to grow their impact, 
                    and building ecosystems that embed these solutions into policies, funding, and systems 
                    for lasting change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">The Challenge</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                What We Solve For
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-[#156159] text-white rounded-full flex items-center justify-center mb-4">
                    <span className="font-semibold">01</span>
                  </div>
                  <h3 className="font-serif text-lg mb-3 text-[#156159]">Proven Solutions Remain Invisible</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Many gender equality interventions are working but lack visibility, 
                    investment, and scale to create widespread impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-[#156159] text-white rounded-full flex items-center justify-center mb-4">
                    <span className="font-semibold">02</span>
                  </div>
                  <h3 className="font-serif text-lg mb-3 text-[#156159]">Ventures Lack Know-How</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Many entrepreneurs, including women founders, struggle to build gender-transformative 
                    businesses due to limited expertise, mentorship, and funding.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-[#156159] text-white rounded-full flex items-center justify-center mb-4">
                    <span className="font-semibold">03</span>
                  </div>
                  <h3 className="font-serif text-lg mb-3 text-[#156159]">Collaboration Gaps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Despite growing momentum for gender equality, efforts remain siloed, 
                    limiting knowledge-sharing and coordinated action at scale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">Our Approach</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                What We Do
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#FECE00]/20 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Thought Leadership & Storytelling</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Amplifying solutions that work by showcasing gender-transformative initiatives 
                    and approaches through podcasts, articles, and strategic convenings to influence 
                    narratives and investments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#FFC48E]/30 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Venture Support & Gender Transformation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Helping ventures become more gender-transformative and supporting women founders 
                    to scale solutions through mentorship, training, and funding readiness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#C0CDED]/40 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Convening & Community Building</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creating spaces for women to connect, share knowledge, and collaborate, while 
                    partnering with key stakeholders to amplify gender-transformative efforts and 
                    drive collective action.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-20 bg-[#FFF8E7]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#156159] text-white">Our Team</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                Meet the Founders
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-md overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/carren-mwanzia.jpg"
                      alt="Carren Mwanzia"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-1 text-center text-[#156159]">Carren Mwanzia</h3>
                  <p className="text-sm font-medium text-[#FECE00] mb-4 text-center">Co-Founder</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    A gender equality advocate with over 7 years of expertise in gender, agriculture, 
                    financial inclusion, climate, and investment advisory. With a background in finance, 
                    investment analysis, and strategy development, she has worked across Africa and 
                    Southeast Asia, advising public, private, and philanthropic organizations on market 
                    research, program design, and scaling gender-transformative solutions.
                  </p>
                  <div className="text-center mt-4">
                    <a 
                      href="https://linkedin.com/in/carren-mwanzia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-[#156159] hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/madhuri-mukherjee.png"
                      alt="Madhuri Mukherjee"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-1 text-center text-[#156159]">Madhuri Mukherjee</h3>
                  <p className="text-sm font-medium text-[#FECE00] mb-4 text-center">Co-Founder</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    A gender equality advocate and practitioner with over 10 years of experience and 
                    background in investment banking, risk management, and impact advisory, specializing 
                    in agriculture, financial inclusion, and gender equity. She applies a gender and power 
                    lens to drive systemic change, working on care models, women&apos;s entrepreneurship, and 
                    the intersection of gender and climate resilience across emerging markets.
                  </p>
                  <div className="text-center mt-4">
                    <a 
                      href="https://linkedin.com/in/madhuri-mukherjee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-[#156159] hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-20 bg-[#156159] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Whether you have a story to share, want to collaborate, or are interested 
              in supporting our work, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#FECE00] text-black hover:bg-[#FECE00]/90" asChild>
                <a href="mailto:usawacollective@gmail.com">
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/podcast">
                  Listen to Equal Footing
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
