import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/usawa-logo-white.png" 
                alt="Usawa Collective" 
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Illuminating, supporting, and scaling proven gender equality solutions for lasting transformation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Podcast */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Listen On</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://open.spotify.com/show/69cn2pk0GR8jiRnZkFHZ4Z?si=c54cad5173394895" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://podcasts.apple.com/ke/podcast/equal-footing/id1868161956" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@UsawaCollective" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/usawa_collective/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@usawacollective" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@UsawaCollective" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto:usawacollective@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Usawa Collective. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
