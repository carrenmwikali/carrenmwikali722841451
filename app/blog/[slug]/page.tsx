import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

const blogPosts: Record<string, any> = {
  "season1-reflection": {
    title: "We Went In Blind. Here's What We Found.",
    subtitle: "A season of reflections on five conversations, one ambitious production learning curve, and why we're coming back.",
    authors: "Carren Mwanzia & Madhuri Mukherjee",
    date: "January 2025",
    category: "Reflection",
    readTime: "8 min read",
    tags: ["Equal Footing", "Season 1", "Gender Equality", "Global South", "Women's Leadership", "Podcast"],
    content: `
<p>We want to be honest with you about how this started. Equal Footing wasn't born out of a fully formed content strategy or a carefully scoped production plan. It was born out of a feeling — that too many important conversations about what's actually working for gender equality were happening in rooms that most people couldn't enter. We wanted to open a door. So we did. And then we figured out the rest as we went.</p>

<p>Six episodes. Five guests who gave us their time, their stories, and their honesty. And this — the sixth — is ours. No guest. Just us, looking back at what the season was, what it cost, and what it gave us. Consider this the written version of that conversation.</p>

<p>Somewhere in between the recording sessions and the edit reviews and the scramble to coordinate calendars across time zones, something unexpected happened: we learned more than we anticipated. About the work. About ourselves. About what it actually takes to build something from nothing.</p>

<h2>The conversations themselves</h2>

<p>We were deliberate about who we wanted to speak with, even when we weren't deliberate about much else. We wanted voices from practitioners — people who had put their hands in the work, not just theorised about it. People who could speak to what was actually shifting, and what wasn't.</p>

<h3>Episode 1 — Women's Economic Empowerment</h3>
<p>Tolu opened the season by grounding us in something we sometimes forget to say plainly: women's economic empowerment is not charity. It is a business case, a policy case, a human case. Her grandmother — who left an abusive marriage in the 1950s, started a cocoa business, and drove a pickup truck between warehouses — stayed with us long after we stopped recording. That's the image of African women we want the world to carry.</p>

<blockquote>
<p>"Women are not a monolith. African women are not a monolith. We have different categories of women based on their experiences, based on the opportunities that have been available to them." — Tolu, Episode 1</p>
</blockquote>

<h3>Episodes 2 & 3 — Sexual & Reproductive Health</h3>
<p>Two episodes, two different entry points into the same truth: that bodily autonomy is not a Western concept or a contested political position. It is a basic right that plays out very differently depending on whether you are a young woman in Nairobi, a refugee in Kakuma, or a girl with an intellectual disability whose consent is treated as an afterthought. Dorcas and Lillian came to this work from very different journeys, but both landed in the same place — the need to listen before prescribing, and to meet people in the specific reality they are living.</p>

<h3>Episode 4 — Social Norms and Women as Gatekeepers</h3>
<p>Terry's episode was the one that generated the most conversation between us after recording. The idea that women can be both the ones most harmed by a norm and the ones who enforce it — not out of cruelty, but out of survival, socialisation, and the complicated dynamics of power within patriarchal systems — is something we don't talk about enough in this space. The Komatanga story alone could anchor an entire series. We hope we do it justice.</p>

<h3>Episode 5 — Women in Sports Leadership</h3>
<p>Sandra's journey — from earning 6,000 shillings a month representing Kenya in rugby, to co-founding a sports enterprise that led Kenya's first win in the Basketball Africa League — is exactly the kind of story Equal Footing exists to tell. Not because it is exceptional, but because it is a story of someone who asked the right questions ("what should the business side of sport look like?") and then did the patient, calculated work of building answers. And her point about access — that we don't need grand stadiums, we need a basketball court in every neighbourhood — stays with us.</p>

<blockquote>
<p>"The time you spend doubting yourself, you could spend improving yourself. There'll never be a perfect time. Just start." — Sandra, Episode 5</p>
</blockquote>

<h2>What the production taught us</h2>

<p>We want to talk about this part because we think it matters — not just for us, but for anyone considering doing something similar. Equal Footing looked, from the outside, like a podcast. From the inside, it looked like several part-time jobs we had not fully budgeted for.</p>

<div class="bg-[#FECE00]/20 border-l-4 border-[#FECE00] p-6 my-8">
<h4 className="font-serif text-lg mb-3">On scripting</h4>
<p>We underestimated how long it takes to write a good script. Not because writing is hard — we are writers — but because writing intentionally for audio is a different discipline entirely. You are not writing to be read. You are writing to be heard, to be interrupted, to breathe. Every episode required more preparation time than we initially planned, and the episodes where we invested that time were the ones where the conversations went somewhere unexpected and real.</p>
</div>

<div class="bg-[#FECE00]/20 border-l-4 border-[#FECE00] p-6 my-8">
<h4 className="font-serif text-lg mb-3">On scheduling</h4>
<p>Finding a time that works for two busy hosts and one busy guest, across different countries and time zones, while accounting for the kind of uninterrupted hour that a real conversation requires — this is genuinely logistical work. We got better at it. But we also learned to build more buffer, to confirm twice, and to accept that the perfect slot sometimes doesn't exist and you book the possible one instead.</p>
</div>

<div class="bg-[#FECE00]/20 border-l-4 border-[#FECE00] p-6 my-8">
<h4 className="font-serif text-lg mb-3">On post-production</h4>
<p>This is the part that nobody warns you about with enough specificity. Editing audio takes time. Cleaning audio takes time. Getting the mix right, the levels consistent, the transcript accurate enough to be useful — all of it takes time. We are grateful for everyone who helped us, and we are going into Season 2 with a much more realistic picture of what the back end of a podcast actually looks like.</p>
</div>

<div class="bg-[#FECE00]/20 border-l-4 border-[#FECE00] p-6 my-8">
<h4 className="font-serif text-lg mb-3">On marketing</h4>
<p>Making something is one thing. Letting people know it exists is another. We are still learning this part. What we know is that the episodes that got shared were the ones that made someone feel something — seen, challenged, surprised, hopeful. That is what we are aiming for.</p>
</div>

<p>None of this is a complaint. It is an honest account. We did not take this lightly when we began, but we underestimated the weight of it — in the best possible way. The work asked more of us, and we gave it more, and the result was something we are genuinely proud of.</p>

<h2>We're coming back</h2>

<p>Season 2 is coming soon. We have themes we care about, guests we are excited to spend time with, and — crucially — a better production setup than we had when we started.</p>

<p>But more than any of that, we still believe the same thing that started this: the solutions to gender inequality exist. They are out there, working, in communities and organisations and in the lives of people like the ones who sat across from us this season. They are just not visible enough. And visibility — storytelling, amplification, the act of saying look, this is what working looks like — is not a nice-to-have. It is part of the work.</p>

<p>We hope you'll join us for what comes next.</p>

<p>We hope you'll share what moved you from this season.</p>

<p>And if something in these conversations sparked a question, or a memory, or an argument you want to have with us — we want to hear it.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: "Blog Post Not Found" }
  
  return {
    title: `${post.title} | Usawa Collective`,
    description: post.subtitle,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Blog Header */}
        <section className="py-12 md:py-16 bg-[#f8f6f3]">
          <div className="container mx-auto px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-[#156159] text-white">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-border">
                <div>
                  <p className="font-medium text-foreground">{post.authors}</p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                {/* Render content as HTML */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} className="space-y-6">
                </div>
              </div>
            </article>

            {/* Tags */}
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
              <div className="bg-[#FFF8E7] rounded-lg p-8">
                <h3 className="font-serif text-xl mb-2">About the Authors</h3>
                <p className="text-muted-foreground mb-4">
                  {post.authors} are the co-founders of Usawa Collective. They work to illuminate, support, and scale gender equality solutions through Equal Footing and thought-provoking articles.
                </p>
                <Button asChild variant="outline" className="border-[#156159] text-[#156159] hover:bg-[#156159]/10">
                  <Link href="/about">Learn More About Our Team</Link>
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto mt-16">
              <div className="bg-[#156159] text-white rounded-lg p-8 md:p-12">
                <h3 className="font-serif text-2xl mb-4">Join the Conversation</h3>
                <p className="mb-6">
                  Have thoughts on this article or want to share your own story? We'd love to hear from you.
                </p>
                <Button className="bg-[#FECE00] text-black hover:bg-[#FECE00]/90" asChild>
                  <Link href="mailto:usawacollective@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
