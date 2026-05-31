import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb, Users, TrendingUp, Bell, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Usawa Collective",
  description: "Thoughtful articles exploring gender equality, feminist systems change, and transformative solutions from Usawa Collective.",
}

const upcomingTopics = [
  {
    icon: Lightbulb,
    title: "Gender-Transformative Solutions",
    description: "Deep dives into approaches that are creating real, measurable change for gender equality.",
    color: "bg-[#FECE00]/20",
  },
  {
    icon: Users,
    title: "Changemaker Spotlights",
    description: "Stories from the women leaders, entrepreneurs, and advocates driving impact across Africa.",
    color: "bg-[#FFC48E]/30",
  },
  {
    icon: TrendingUp,
    title: "Systems Change Insights",
    description: "Analysis on embedding gender equality into policies, funding, and institutions.",
    color: "bg-[#C0CDED]/40",
  },
]

export default function BlogPage() {
  const articles = [
    {
      id: "season1-reflection",
      title: "We Went In Blind. Here's What We Found.",
      excerpt: "A season of reflections on five conversations, one ambitious production learning curve, and why we're coming back.",
      authors: "Carren Mwanzia & Madhuri Mukherjee",
      date: "January 2025",
      category: "Reflection",
      readTime: "8 min read",
      featured: true,
    },
  ]

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
              <Badge className="mb-4 bg-[#156159] text-white">Blog</Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
                Ideas & Stories
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Thoughtful analysis, changemaker stories, and perspectives on gender equality 
                and feminist systems change.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`} className="block group">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all overflow-hidden bg-white">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-[#156159] text-white">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-[#156159] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <p className="font-medium text-foreground">{article.authors}</p>
                          <p>{article.date}</p>
                        </div>
                        <Button variant="ghost" className="text-[#156159] hover:bg-[#156159]/10 gap-2">
                          Read Full Article
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[#156159] text-[#156159]">Coming Next</Badge>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                More Stories to Come
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingTopics.map((topic) => (
                <Card key={topic.title} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 ${topic.color} rounded-full flex items-center justify-center mb-6`}>
                      <topic.icon className="h-7 w-7 text-[#156159]" />
                    </div>
                    <h3 className="font-serif text-xl mb-3 text-[#156159]">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast CTA */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="border-0 shadow-lg bg-[#156159] text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-[#FECE00] text-black">While You Wait</Badge>
                    <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                      Listen to Equal Footing
                    </h2>
                    <p className="text-white/80 mb-6">
                      Our podcast launches June 15th, 2025. Subscribe now to hear bold stories, 
                      real solutions, and conversations on feminist systems change.
                    </p>
                    <Button className="bg-[#FECE00] text-black hover:bg-[#FECE00]/90" asChild>
                      <Link href="/podcast">
                        Explore the Podcast <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 bg-[#FECE00]/20 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#FECE00]/30 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#FECE00] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-20 bg-[#FECE00]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-4 text-black">
                Stay in the Loop
              </h2>
              <p className="text-black/70 mb-8">
                Subscribe to our newsletter for the latest articles, podcast episodes, 
                and updates from Usawa Collective.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md bg-white border-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#156159]"
                  required
                />
                <Button type="submit" className="bg-[#156159] hover:bg-[#156159]/90 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
