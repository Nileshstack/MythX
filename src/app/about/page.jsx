"use client";
import React from 'react';
import dynamic from "next/dynamic" 
import { Calendar, Trophy, Users, MapPin, Clock, MessageCircle } from 'lucide-react';

const AnimatedBackground = dynamic(() => import("@/components/animted-bg"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black bg-gradient-to-br from-black to-purple-950" />,
})

const AboutSection = () => {
  return (

    <section className="py-16 px-4 bg-gradient-to-b from-[#050906] to-[#0e2b1d] text-white">
        <div className="absolute inset-0 z-0">
    <AnimatedBackground />
  </div>
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
            About The MythX
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <span className="text-[#218c63] font-semibold">The MythX: An Endgame Protocol</span> is a high-intensity, 
            national-level cybersecurity Capture The Flag (CTF) competition designed to test real-world technical 
            skills in offensive and defensive security.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Participants will tackle challenging, practical cybersecurity problems that simulate real cyber incidents, 
            adversary techniques, and modern attack-defense scenarios. The event emphasizes hands-on learning, strategic 
            thinking, teamwork, and innovation in ethical hacking.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is a two-round Jeopardy-style CTF, progressing from an online qualifier to an immersive onsite grand 
            finale at KIET Ghaziabad — culminating in an expert speaker session and prize distribution ceremony.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0e2b1d]/50 backdrop-blur-sm border border-[#218c63]/30 rounded-lg p-6 text-center hover:border-[#218c63] transition-colors">
              <Users className="w-8 h-8 text-[#218c63] mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-1">Team Size</h3>
              <p className="text-gray-400">1 - 4 Members</p>
            </div>
            <div className="bg-[#0e2b1d]/50 backdrop-blur-sm border border-[#218c63]/30 rounded-lg p-6 text-center hover:border-[#218c63] transition-colors">
              <MapPin className="w-8 h-8 text-[#218c63] mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-1">Venue</h3>
              <p className="text-gray-400">KIET, Ghaziabad</p>
            </div>
            <div className="bg-[#0e2b1d]/50 backdrop-blur-sm border border-[#218c63]/30 rounded-lg p-6 text-center hover:border-[#218c63] transition-colors">
              <Trophy className="w-8 h-8 text-[#218c63] mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-1">Prize Pool</h3>
              <p className="text-gray-400">₹30,000 + Goodies</p>
            </div>
          </div>
        </div>


        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Event Timeline</h3>
          <div className="relative">

            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#218c63] via-[#20553c] to-[#82a18a]"></div>


            <div className="space-y-12">

              <div className="relative flex items-start md:justify-end md:w-1/2 md:pr-12 ml-16 md:ml-0">
                <div className="absolute left-[-32px] md:left-auto md:right-[-20px] w-10 h-10 bg-[#218c63] rounded-full flex items-center justify-center border-4 border-[#050906]">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0e2b1d]/70 backdrop-blur-sm border border-[#218c63]/30 rounded-lg p-6 w-full hover:border-[#218c63] transition-colors">
                  <h4 className="text-xl font-bold text-[#218c63] mb-2">Registration Deadline</h4>
                  <p className="text-gray-300 mb-1">17 February 2026, 5:00 PM IST</p>
                  <p className="text-sm text-gray-400">Last chance to register your team</p>
                </div>
              </div>


              <div className="relative flex items-start md:justify-start md:w-1/2 md:pl-12 md:ml-auto ml-16">
                <div className="absolute left-[-32px] md:left-[-20px] w-10 h-10 bg-[#20553c] rounded-full flex items-center justify-center border-4 border-[#050906]">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0e2b1d]/70 backdrop-blur-sm border border-[#20553c]/30 rounded-lg p-6 w-full hover:border-[#20553c] transition-colors">
                  <h4 className="text-xl font-bold text-[#82a18a] mb-2">Round 1 — Online Qualifier</h4>
                  <p className="text-gray-300 mb-1">17 February 2026</p>
                  <p className="text-gray-300 mb-1">6:00 PM – 12:00 AM (6 hours)</p>
                  <p className="text-sm text-gray-400">Jeopardy-style CTF • Top 30 teams advance</p>
                </div>
              </div>

              <div className="relative flex items-start md:justify-end md:w-1/2 md:pr-12 ml-16 md:ml-0">
                <div className="absolute left-[-32px] md:left-auto md:right-[-20px] w-10 h-10 bg-[#218c63] rounded-full flex items-center justify-center border-4 border-[#050906]">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0e2b1d]/70 backdrop-blur-sm border border-[#218c63]/30 rounded-lg p-6 w-full hover:border-[#218c63] transition-colors">
                  <h4 className="text-xl font-bold text-[#218c63] mb-2">Round 2 — Onsite Grand Finale</h4>
                  <p className="text-gray-300 mb-1">23-24 February 2026</p>
                  <p className="text-gray-300 mb-1">8:00 PM (23rd) – 12:00 PM (24th) • 16 hours</p>
                  <p className="text-sm text-gray-400">CRPC Hall, KIET Ghaziabad • Overnight CTF Battle</p>
                </div>
              </div>

              <div className="relative flex items-start md:justify-start md:w-1/2 md:pl-12 md:ml-auto ml-16">
                <div className="absolute left-[-32px] md:left-[-20px] w-10 h-10 bg-[#82a18a] rounded-full flex items-center justify-center border-4 border-[#050906]">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#0e2b1d]/70 backdrop-blur-sm border border-[#82a18a]/30 rounded-lg p-6 w-full hover:border-[#82a18a] transition-colors">
                  <h4 className="text-xl font-bold text-[#82a18a] mb-2">Speaker Session & Prize Ceremony</h4>
                  <p className="text-gray-300 mb-1">24 February 2026</p>
                  <p className="text-gray-300 mb-1">1:30 PM – 4:00 PM</p>
                  <p className="text-sm text-gray-400">Expert insights & Winner recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">Prize Pool</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            <div className="relative bg-gradient-to-br from-[#218c63]/20 to-[#20553c]/10 border-2 border-[#218c63] rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#218c63] text-white font-bold px-6 py-2 rounded-full text-lg shadow-lg">
                🥇 1st Place
              </div>
              <div className="mt-6">
                <p className="text-4xl font-bold text-[#218c63] mb-4">₹15,000</p>
                <ul className="text-gray-300 space-y-2">
                  <li>+ Exclusive Goodies</li>
                  <li>+ Vouchers</li>
                  <li>+ Certificate</li>
                </ul>
              </div>
            </div>

 
            <div className="relative bg-gradient-to-br from-[#20553c]/20 to-[#0e2b1d]/10 border-2 border-[#20553c] rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#20553c] text-white font-bold px-6 py-2 rounded-full text-lg shadow-lg">
                🥈 2nd Place
              </div>
              <div className="mt-6">
                <p className="text-4xl font-bold text-[#82a18a] mb-4">₹10,000</p>
                <ul className="text-gray-300 space-y-2">
                  <li>+ Goodies</li>
                  <li>+ Vouchers</li>
                  <li>+ Certificate</li>
                </ul>
              </div>
            </div>


            <div className="relative bg-gradient-to-br from-[#82a18a]/20 to-[#20553c]/10 border-2 border-[#82a18a] rounded-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#82a18a] text-[#050906] font-bold px-6 py-2 rounded-full text-lg shadow-lg">
                🥉 3rd Place
              </div>
              <div className="mt-6">
                <p className="text-4xl font-bold text-[#82a18a] mb-4">₹5,000</p>
                <ul className="text-gray-300 space-y-2">
                  <li>+ Goodies</li>
                  <li>+ Vouchers</li>
                  <li>+ Certificate</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mt-8 text-center">
            <p className="text-gray-400">
              E-certificates for all participants • Special certificates for winners and finalists
            </p>
          </div>
        </div>


        <div className="bg-gradient-to-r from-[#0e2b1d] to-[#20553c] border-2 border-[#218c63] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="text-gray-300 mb-6">
            Stay updated with announcements, connect with fellow participants, and get real-time support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a
              href="#"
              className="group relative inline-flex items-center gap-3 bg-[#218c63] hover:bg-[#20553c] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-[#218c63]/50 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Join Discord</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Live
              </span>
            </a>


            <a
              href="#"
              className="group relative inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ea952] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Join WhatsApp</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Live
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;