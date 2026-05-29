import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Headphones, Lightbulb, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#f8f6f3]">
          {/* Subtle accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#156159]/5 hidden lg:block" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left content */}
              <div className="py-12 lg:py-0">
                <div className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-[#156159] text-white rounded-full">
                  Gender Equality Collective
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance mb-6 text-[#156159]">
                  Amplifying gender equality solutions that work
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  Usawa Collective supports the design of gender transformative solutions and amplifies what already works 
                  in dismantling systemic barriers to equality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#156159] text-white hover:bg-[#156159]/90 font-medium" asChild>
                    <Link href="/podcast">
                      <Headphones className="mr-2 h-5 w-5" />
                      Listen to Podcast
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10" asChild>
                    <Link href="/about">
                      Learn About Us
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right content - Podcast cover */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/equal-footing-cover.jpg"
                      alt="Equal Footing Podcast"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Subtle decorative element */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FECE00] rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Pillars Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">What We Do</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                Our Three Pillars
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-[#FECE00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Thought Leadership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Amplifying solutions that work by showcasing gender-transformative initiatives through podcasts, 
                    articles, and strategic convenings.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-[#FFC48E]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Venture Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Helping ventures become gender-transformative and supporting women founders to scale 
                    solutions through mentorship, training, and funding readiness.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-[#C0CDED]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-[#156159]" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-[#156159]">Community Building</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creating spaces for women to connect, share knowledge, and collaborate while partnering 
                    with stakeholders to drive collective action.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="py-16 md:py-24 bg-[#FFF8E7]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div>
                <Badge className="mb-4 bg-[#156159] text-white">Featured Podcast</Badge>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
                  Equal Footing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Equal Footing is a podcast by Usawa Collective spotlighting African voices reimagining 
                  gender equity — through bold stories, real solutions, and feminist systems change. 
                  We speak to changemakers, innovators, and thought leaders working in this space.
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
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">Our Vision</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
                A future where proven solutions drive lasting transformation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our vision is a present and future where proven gender equality solutions are amplified, 
                scaled, and embedded into systems to drive lasting transformation.
              </p>
              <Button variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10" asChild>
                <Link href="/about">
                  Learn More About Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Teaser Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
              <div>
                <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">From the Blog</Badge>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                  Ideas & Stories
                </h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  Thoughtful analysis and perspectives on gender equality, feminist systems change, and creating lasting impact.
                </p>
              </div>
              <Button variant="ghost" className="mt-4 md:mt-0 text-[#156159] hover:text-[#156159]/80 hover:bg-[#156159]/10" asChild>
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[#FECE00]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-[#156159]" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Our blog will feature articles on gender-transformative solutions, spotlight stories 
                from changemakers, and insights on feminist systems change.
              </p>
              <Button className="bg-[#156159] hover:bg-[#156159]/90" asChild>
                <Link href="/blog">
                  Explore the Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-[#156159] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
                Stay Connected
              </h2>
              <p className="text-white/80 mb-8">
                Subscribe for updates, new episodes, and articles on gender equality and feminist systems change.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FECE00]"
                  required
                />
                <Button type="submit" className="bg-[#FECE00] text-black hover:bg-[#FECE00]/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-white/60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
