import type { Metadata } from "next"
import Image from "next/image"
import { Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Equal Footing Podcast | Usawa Collective",
  description: "Equal Footing is a podcast spotlighting African voices reimagining gender equity through bold stories, real solutions, and feminist systems change.",
}

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-[#FFF8E7] relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#FECE00]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#FFC48E]/30 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <Badge className="mb-4 bg-[#156159] text-white">
                  <Headphones className="w-3 h-3 mr-1" />
                  Podcast
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
                  Equal Footing
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  A podcast by Usawa Collective spotlighting African voices reimagining gender equity — 
                  through bold stories, real solutions, and feminist systems change.
                </p>
                <p className="text-muted-foreground mb-6">
                  We speak to changemakers, innovators, and thought leaders working to drive gender equality across Africa and beyond.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[#156159] hover:bg-[#156159]/90" asChild>
                    <a href="https://open.spotify.com/show/69cn2pk0GR8jiRnZkFHZ4Z?si=c54cad5173394895" target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                  </Button>
                  <Button variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10" asChild>
                    <a href="https://podcasts.apple.com/ke/podcast/equal-footing/id1868161956" target="_blank" rel="noopener noreferrer">
                      Apple Podcasts
                    </a>
                  </Button>
                  <Button variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10" asChild>
                    <a href="https://www.youtube.com/@UsawaCollective" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/equal-footing-cover.jpg"
                    alt="Equal Footing Podcast"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FECE00] rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFC48E] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">What to Expect</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                Conversations That Matter
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FECE00]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif text-xl text-[#156159]">01</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2 text-[#156159]">Bold Stories</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hear from African women leaders, entrepreneurs, and advocates who are 
                    challenging norms and creating change in their communities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFC48E]/30 rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif text-xl text-[#156159]">02</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2 text-[#156159]">Real Solutions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Discover gender-transformative approaches that are actually working — 
                    from grassroots initiatives to systemic interventions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#C0CDED]/40 rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif text-xl text-[#156159]">03</span>
                  </div>
                  <h3 className="font-serif text-lg mb-2 text-[#156159]">Systems Change</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Explore how to embed gender equality into policies, funding, and 
                    systems for lasting, transformative impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet the Hosts */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">Your Hosts</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                Meet the Voices Behind Equal Footing
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl mb-2 text-[#156159]">Carren Mwanzia</h3>
                  <p className="text-sm font-medium text-[#FECE00] mb-3">Co-Founder</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A gender equality advocate with over 7 years of expertise in gender, agriculture, 
                    financial inclusion, climate, and investment advisory. With a background in finance 
                    and strategy development, she has worked across Africa and Southeast Asia, advising 
                    organizations on market research, program design, and scaling gender-transformative solutions.
                  </p>
                  <a 
                    href="https://linkedin.com/in/carren-mwanzia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-[#156159] hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl mb-2 text-[#156159]">Madhuri Mukherjee</h3>
                  <p className="text-sm font-medium text-[#FECE00] mb-3">Co-Founder</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A gender equality advocate and practitioner with over 10 years of experience in 
                    investment banking, risk management, and impact advisory. Specializing in agriculture, 
                    financial inclusion, and gender equity, she applies a gender and power lens to drive 
                    systemic change, working on care models, women&apos;s entrepreneurship, and the intersection 
                    of gender and climate resilience.
                  </p>
                  <a 
                    href="https://linkedin.com/in/madhuri-mukherjee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-[#156159] hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-12 md:py-16 bg-[#FECE00]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4 text-black">
              Listen on Your Favorite Platform
            </h2>
            <p className="text-black/70 mb-6 max-w-lg mx-auto">
              Equal Footing is available on all major podcast platforms. Subscribe to never miss an episode.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button className="bg-[#156159] hover:bg-[#156159]/90 text-white" asChild>
                <a href="https://open.spotify.com/show/69cn2pk0GR8jiRnZkFHZ4Z?si=c54cad5173394895" target="_blank" rel="noopener noreferrer">
                  Spotify
                </a>
              </Button>
              <Button className="bg-[#156159] hover:bg-[#156159]/90 text-white" asChild>
                <a href="https://podcasts.apple.com/ke/podcast/equal-footing/id1868161956" target="_blank" rel="noopener noreferrer">
                  Apple Podcasts
                </a>
              </Button>
              <Button className="bg-[#156159] hover:bg-[#156159]/90 text-white" asChild>
                <a href="https://www.youtube.com/@UsawaCollective" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
