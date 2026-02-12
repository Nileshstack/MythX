import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter } from "lucide-react"

import design1 from "@/images/Group 4609.png" 
import design2 from "@/images/Group 4610.png"; 

const HomeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

export default function Footer() {

  const gradientColor = "rgba(33, 140, 99"; 
  const gradientOpacity = 0.4; 

  return (
  
    <footer className="relative w-full bg-[#050906] text-white overflow-hidden">

      {/* GREEN RADIAL GLOW */}
      <div
        className="absolute top-0 left-0 w-[250px] h-[250px] hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 70%)`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-[250px] h-[250px] hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 100% 0%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[250px] h-[250px] hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 0% 100%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 100% 100%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 70%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 opacity-10 mix-blend-screen hidden md:block">
        <Image src={design1} alt="" width={200} height={200} className="rotate-180" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 mix-blend-screen hidden md:block">
        <Image src={design2} alt="" width={200} height={200} className="rotate-180" />
      </div>

      <div className="relative z-20">

        {/* COMMUNITY BOX */}
        <div className="max-w-7xl mx-auto p-6 my-4">
          <div className="border border-[#20553c] bg-[#0e2b1d] rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <div className="flex gap-4 items-center mb-4 md:mb-0">
              <div className="w-10 h-10 border border-[#20553c] rounded-md flex items-center justify-center text-[#218c63]">
                <HomeIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Join our awesome community
                </h3>
                <p className="text-[#82a18a] text-sm mt-1">
                  Share work, seek support, vote on components, stay updated and network with other geeks.
                </p>
              </div>
            </div>

            <Link
              href="https://www.technocrats.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#218c63] text-white hover:bg-[#20553c] rounded-md px-4 py-2 font-medium transition-all duration-200"
            >
              Join our community
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BRAND */}
            <div className="space-y-6">
              <div className="flex items-center">
                <Link href="https://www.technocrats.tech/" target="_blank" rel="noopener noreferrer">
                  <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
                    Technocrats
                  </h2>
                </Link>
              </div>

              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/technocrats.kiet/" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/technocrats_?lang=en" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/technocrats-kiet/posts/?feedView=all" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="text-sm font-semibold text-[#82a18a] uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <nav className="grid grid-cols-1 gap-4">
                <Link href="/" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Home</Link>
                <Link href="/register" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Register</Link>
                <Link href="/about" className="text-[#82a18a] hover:text-[#218c63] transition-colors">About</Link>
                <Link href="/#agenda" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Agenda</Link>
              </nav>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-sm font-semibold text-[#82a18a] uppercase tracking-wider mb-4">
                Connect
              </h4>
              <nav className="grid grid-cols-1 gap-4">
                <Link href="https://www.technocrats.tech/" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Official Site</Link>
                <Link href="https://x.com/technocrats_?lang=en" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Twitter</Link>
                <Link href="https://www.instagram.com/technocrats.kiet/" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">Instagram</Link>
                <Link href="https://www.linkedin.com/company/technocrats-kiet/posts/?feedView=all" target="_blank" className="text-[#82a18a] hover:text-[#218c63] transition-colors">LinkedIn</Link>
              </nav>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#20553c] flex justify-between items-center">
            <p className="text-[#82a18a] text-sm">
              © 2026 Technocrats Inc. All rights reserved.
            </p>
          </div>
        </div>

      </div> 
    </footer>
  )
}
