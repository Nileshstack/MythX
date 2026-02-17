"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import AnimatedText from "@/components/animated-text"
import design1 from "@/images/Group 4609.png"
import design2 from "@/images/Group 4610.png";
import Footer from "@/components/Footer"
import logo from "@/images/Group 4620.png"
import speaker1 from "@/images/Group 4611.png"
import speaker2 from "@/images/spekaer2.png"
import speaker3 from "@/images/speaker3.png"
import Head from "next/head"
import { useEffect } from "react"
import { GoogleAnalytics } from "./lib/gtag"


const AnimatedBackground = dynamic(() => import("@/components/animted-bg"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black bg-gradient-to-br from-black to-purple-950" />,
})

const CountdownTimer = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
  loading: () => (
    <div className="h-[72px] flex justify-center items-center text-center text-lg text-blue-400">
      Loading countdown...
    </div>
  ),
})



export default function Home() {
   const gradientColor = "rgba(33, 140, 99";
  const gradientOpacity = 0.4;
useEffect(() => {
    console.log("%c What are you doing here ?! you sneaky developer ", "color:#05fff2");
    console.log("Check out my github: https://github.com/Nileshstack")
  }, []);
   

  return (
       <main className="poppins relative min-h-screen text-white bg-gradient-to-b from-[#050906] to-[#0e2b1d] overflow-hidden">

      <Head>
        <meta name="twitter:creator" content="@technocrats" />
        <meta name="next-size-adjust" content="null" />
        <meta name="theme-color" content="#000000" />
        <meta name="article:author" content="Technocrats" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="referrer" content="no-referrer" />
        <meta name="application-name" content="Technoverse" />
        <meta name="robots" content="index, follow" />
        <meta name="color-scheme" content="light dark" />
        <meta name="article:published_time" content="2024-02-12" />
        <meta name="article:modified_time" content="2024-02-12" />
        <meta property="og:updated_time" content="2024-02-12" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Technocrats",
              alternateName: "Technoverse",
              url: "https://www.technocrats.tech",
              logo: "https://www.technocrats.tech/static/media/clubIcon.683076c50bbf75358f08.png",
              sameAs: [
                "https://www.instagram.com/technocrats.kiet?igsh=MWQ3cXhjN3FtcWpzbg==",
                "https://www.linkedin.com/company/technocrats-kiet/",
                "https://x.com/Technocrats_?t=xjeJQWOG-ilQYrZGK8IKrA&s=09"
              ],
              hasPart: [
                {
                  "@type": "WebSite",
                  url: "https://technoversse.vercel.app",
                  name: "Technoverse"
                }
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "technocrats@kiet.edu",
                url: "https://www.technocrats.tech"
              }
            })
          }}
        />
      </Head>

      <GoogleAnalytics />
      <div className="fixed inset-0 z-10">
        <AnimatedBackground />
      </div>


      <div
        className="absolute inset-x-0 top-0 h-[40vh] // Reduced height, adjust as needed
                   z-5 pointer-events-none"
        style={{

          background: `radial-gradient(ellipse at 50% 0%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 50%)`,
        }}
        aria-hidden="true"
      />


      <div
        className="absolute top-0 left-0 w-[450px] h-[450px] // Size slightly larger than image?
                   z-5 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 60%)`,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 right-0 w-[450px] h-[450px]
                   z-5 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 100% 0%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 60%)`,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px]
                   z-5 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 0% 100%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 60%)`,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px]
                   z-5 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(ellipse at 100% 100%, ${gradientColor}, ${gradientOpacity}) 0%, ${gradientColor}, 0) 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 z-10 opacity-20 mix-blend-screen pointer-events-none hidden md:block">
        <Image src={design2} alt="" width={400} height={400} priority style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="absolute top-0 right-0 z-10 opacity-20 mix-blend-screen pointer-events-none hidden md:block">
        <Image src={design1} alt="" width={400} height={400} priority style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="absolute bottom-0 left-0 z-10 opacity-20 mix-blend-screen pointer-events-none hidden md:block">
        <Image src={design1} alt="" width={400} height={400} loading="lazy" style={{ width: 'auto', height: 'auto' }} className="rotate-180" />
      </div>
      <div className="absolute bottom-0 right-0 z-10 opacity-20 mix-blend-screen pointer-events-none hidden md:block">
        <Image src={design2} alt="" width={400} height={400} loading="lazy" style={{ width: 'auto', height: 'auto' }} className="rotate-180" />
      </div>
          

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8 relative z-20 mt-0">
        <div className="flex align-middle place-content-center ">

        <FadeIn direction="down" duration={0.7}>
         <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent"> The MYTHX CFT</h1>
        </FadeIn>
      </div>

        <div className="text-center py-10 space-y-4">

          <FadeIn direction="up" delay={0.4} duration={0.7}>
            <p className="text-xl md:text-2xl text-[#82a18a]">
              Enter the Arena. Break the Code. Capture the Flag.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={0.7}>
            <p className="text-sm uppercase tracking-wider pt-6 text-[#82a18a]">
              Organized by
            </p>
            <p className="text-lg md:text-xl font-semibold text-white">
              TECHNOCRATS | KIET Deemed to be University
            </p>
          </FadeIn>
        </div>

         <FadeIn direction="up" delay={0.8} duration={0.7}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-8">
            <Link
              href="/register"
              className="border-2 border-[#218c63] hover:bg-[#218c63] text-[#218c63] hover:text-white font-bold py-3 px-8 rounded-md text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(33,140,99,0.6)] w-full sm:w-auto"
            >
              JOIN THE BATTLE
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#20553c] hover:bg-[#20553c] text-[#82a18a] hover:text-white font-bold py-3 px-8 rounded-md text-center transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              ABOUT US
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={1} duration={0.7}>
          <div className="py-10 text-center">
            <p className="text-lg md:text-xl mb-4 uppercase tracking-wider text-[#82a18a]">
              Mission Begins In
            </p>
            <CountdownTimer targetDate="2026-02-24T12:00:00" />
          </div>
        </FadeIn>

         <div id="about" className="py-16 mb-3 border-t border-[#20553c]/40">
          <FadeIn>
            <h2 className="text-4xl mb-10 font-extrabold text-center mt-10 bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
              About The MythX CTF
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">

              <FadeIn direction="left" delay={0.1}>
                <p className="text-lg text-[#82a18a] leading-relaxed">
                  The MythX CTF – The Endgame Protocol is an immersive Capture The Flag (CTF) cybersecurity bootcamp designed to test your technical skills and logical thinking.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <p className="text-lg text-[#82a18a] leading-relaxed">
                  Participants will face real-world challenges in web exploitation, cryptography, reverse engineering, digital forensics, and network security.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <p className="text-lg text-[#82a18a] leading-relaxed">
                  Whether you're a beginner or an experienced hacker, this arena is built to push your limits and sharpen your cybersecurity instincts.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <p className="text-lg text-[#218c63] font-semibold">
                  Decode vulnerabilities. Exploit weaknesses. Capture the Flag.
                </p>
              </FadeIn>
            </div>

           { /*<FadeIn direction="right" delay={0.3}>
              <div className="relative ">
                <div className="flex flex-row h-full gap-4">

                  <div className="flex flex-col w-1/2 h-96 place-content-center">
                    <div className="relative h-2/5 lg:h-3/5 w-full lg:w-4/5 overflow-hidden rounded-lg shadow-xl shadow-[#218c63]/30">
                      <Image src={speaker1} alt="Challenge Highlight" fill loading="lazy" />
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2 h-96 place-content-center gap-4">
                    <div className="h-2/5 lg:h-3/5 w-full lg:w-4/5 relative rounded-lg shadow-xl shadow-[#218c63]/30">
                      <Image src={speaker2} alt="Challenge Highlight" fill loading="lazy" />
                    </div>

                    <div className="relative h-2/5 lg:h-3/5 w-full lg:w-4/5 overflow-hidden rounded-lg shadow-xl shadow-[#218c63]/30">
                      <Image src={speaker3} alt="Challenge Highlight" fill loading="lazy" />
                    </div>
                  </div>
                </div> */}
                {/*<div className="flex justify-center w-full absolute bottom-0 left-0 top-90">
                  <h2 className="text-2xl font-extrabold text-center bg-gradient-to-r from-[#eef1f0] to-[#0a0a0a] bg-clip-text text-transparent">
                    Previous Cyber Battles | Highlights
                  </h2>
                </div>
              </div>
            </FadeIn>*/}

          </div>
        </div>

         <div id="register-section" className="py-16 border-t border-[#20553c]/40 text-center scroll-mt-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#218c63] uppercase tracking-wider">
              The Clock Is Ticking.
            </h2>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl mb-5 font-extrabold text-center mt-10 bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
                Limited Slots. High Stakes.
              </h2>
              <p className="text-lg mt-3 text-[#82a18a] leading-relaxed">
                The MythX CTF is not just a competition — it's a cybersecurity battleground where the sharpest minds rise to the top.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-2xl mb-5 font-extrabold text-center mt-10 bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
                Prove Your Skills
              </h2>
              <p className="text-lg mt-3 text-[#82a18a] leading-relaxed">
                If you think you have what it takes to crack the code and dominate the leaderboard, this is your moment.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="pt-6">
                <Link
                  href="/register"
                  className="border-2 border-[#218c63] bg-[#218c63] hover:bg-[#20553c] text-white font-bold py-3 px-12 rounded-md inline-block transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(33,140,99,0.6)]"
                >
                  JOIN THE BATTLE
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  )
}