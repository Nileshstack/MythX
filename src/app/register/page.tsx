"use client"
import { useState, useEffect, FormEvent } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/fade-in"
import Footer from "@/components/Footer"
import design1 from "@/images/Group 4609.png"
import design2 from "@/images/Group 4610.png";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Head from "next/head"

const AnimatedBackground = dynamic(() => import("@/components/animted-bg"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black bg-gradient-to-br from-black to-purple-950" />,
})

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  college: "KIET Group of Institutions",
  branch: "",
  rollno: "",
  othercollege: "",
};

export default function Register() {

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [collegeOption, setCollegeOption] = useState<"kiet" | "other">("kiet");
  const [whatsappChecked, setWhatsappChecked] = useState(false);
  const [discordChecked, setDiscordChecked] = useState(false);

  const router = useRouter();

  

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\d{10}$/.test(phone);

  const validateNameLength = (name: string) =>
    name.trim().length >= 2;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    let errors: string[] = [];

    if (!validateNameLength(formData.name))
      errors.push("Name must be at least 2 characters");

    if (!validateEmail(formData.email))
      errors.push("Invalid email");

    if (!validatePhone(formData.phone))
      errors.push("Phone must be 10 digits");

    if (!formData.college)
      errors.push("Please select college");

    if (collegeOption === "kiet") {
      if (!formData.branch)
        errors.push("Branch is required");
      if (!formData.rollno)
        errors.push("Roll number is required");
    }

    if (!whatsappChecked)
      errors.push("Please confirm WhatsApp group joining");

    if (!discordChecked)
      errors.push("Please confirm Discord group joining");

    if (errors.length > 0) {
      const errorMsg = errors.join(", ");
      toast.error(errorMsg);
      setStatusMessage({ type: "error", message: errorMsg });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/register", formData);

      toast.success("Registration successful! You are in 🚀");
      setStatusMessage({ type: "success", message: response.data.message });

      setFormData(initialFormData);
      setWhatsappChecked(false);
      setDiscordChecked(false);

      setTimeout(() => {
        router.push("/");
      }, 3000);

    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Something went wrong";

      toast.error(message);
      setStatusMessage({ type: "error", message });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="poppins relative min-h-screen text-white bg-gradient-to-b from-[#050906] to-[#0e2b1d] overflow-hidden">

      <Head>
        <title>Register | The MythX CTF</title>
      </Head>

      <ToastContainer 
        position="top-right"
        theme="dark"
        toastStyle={{
          background: '#0e2b1d',
          border: '1px solid #218c63',
          color: '#fff'
        }}
      />

      <div className="fixed inset-0 z-10">
        <AnimatedBackground />
      </div>

      <div className="fixed top-20 left-10 w-72 h-72 bg-[#218c63]/10 rounded-full blur-3xl z-10"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#20553c]/10 rounded-full blur-3xl z-10"></div>

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 relative z-20">

        <FadeIn>
       
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#218c63] via-[#82a18a] to-[#218c63] animate-gradient tracking-wider">
                REGISTER FOR
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#218c63] to-[#20553c] opacity-30 blur-xl"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-widest">
              THE MYTH<span className="text-[#218c63]">X</span>
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#218c63] to-transparent mb-6"></div>
            <p className="text-lg text-[#82a18a] font-light tracking-wide">
              🎯 Enter the arena • 🔓 Break the code • 🚩 Capture the flag
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          
          <div className="relative group">
           
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#218c63] via-[#20553c] to-[#218c63] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300"></div>
   
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-[#0e2b1d]/90 via-[#050906]/90 to-[#0e2b1d]/90 backdrop-blur-xl border-2 border-[#20553c]/50 rounded-2xl shadow-2xl shadow-[#218c63]/20 p-8 md:p-12 space-y-8"
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#218c63] rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#218c63] rounded-br-2xl"></div>

              <div className="relative group/input">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    disabled={isLoading}
                    className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative group/input">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative group/input">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => {
                      if (/^\d{0,10}$/.test(e.target.value)) {
                        setFormData(prev => ({ ...prev, phone: e.target.value }));
                      }
                    }}
                    required
                    disabled={isLoading}
                    className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>

            
              <div className="relative">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  College / Institution
                </label>
              
                <div className="flex gap-6 mb-4">
                  <label className="relative flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      checked={collegeOption === "kiet"}
                      onChange={() => {
                        setCollegeOption("kiet");
                        setFormData(prev => ({
                          ...prev,
                          college: "KIET Group of Institutions"
                        }));
                      }}
                      className="appearance-none w-5 h-5 border-2 border-[#20553c] rounded-full checked:border-[#218c63] checked:border-4 transition-all duration-200 cursor-pointer"
                    />
                    <span className="text-white font-medium group-hover:text-[#218c63] transition-colors">
                      KIET
                    </span>
                  </label>

                  <label className="relative flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      checked={collegeOption === "other"}
                      onChange={() => {
                        setCollegeOption("other");
                        setFormData(prev => ({ ...prev, college: "", branch: "" }));
                      }}
                      className="appearance-none w-5 h-5 border-2 border-[#20553c] rounded-full checked:border-[#218c63] checked:border-4 transition-all duration-200 cursor-pointer"
                    />
                    <span className="text-white font-medium group-hover:text-[#218c63] transition-colors">
                      Other
                    </span>
                  </label>
                </div>

                {collegeOption === "other" && (
                  <div className="relative">
                    <input
                      type="text"
                      name="college"
                      placeholder="Enter your Organization name"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

          
              

              {/* Roll Number Field - Only for KIET students */}
              {collegeOption === "kiet" && (
                <div className="relative group/input">
                  <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                    Roll Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="rollno"
                      placeholder="Enter your roll number"
                      value={formData.rollno}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <div className="relative group/input">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  Branch / Department
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="branch"
                    placeholder={collegeOption === "other" ? "Not required for other colleges" : "e.g., Computer Science, IT, ECE"}
                    value={formData.branch}
                    onChange={handleInputChange}
                    required={collegeOption === "kiet"}
                    disabled={isLoading || collegeOption === "other"}
                    className="bg-[#050906]/80 border-2 border-[#20553c]/50 focus:border-[#218c63] text-white rounded-xl block w-full p-4 pl-12 transition-all duration-300 placeholder:text-gray-600 focus:ring-2 focus:ring-[#218c63]/30 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#218c63]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* WhatsApp and Discord Group Checkboxes */}
              <div className="relative space-y-4 pt-4">
                <label className="block mb-3 text-sm font-semibold text-[#82a18a] tracking-wider uppercase">
                  Join Community Groups
                </label>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group p-4 rounded-xl border-2 border-[#20553c]/50 hover:border-[#218c63]/50 transition-all duration-300 bg-[#050906]/40">
                    <input
                      type="checkbox"
                      checked={whatsappChecked}
                      onChange={(e) => setWhatsappChecked(e.target.checked)}
                      className="mt-1 appearance-none w-5 h-5 border-2 border-[#20553c] rounded checked:bg-[#218c63] checked:border-[#218c63] transition-all duration-200 cursor-pointer"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium group-hover:text-[#218c63] transition-colors block">
                        Join WhatsApp Group (Mandatory)
                      </span>
                      <a 
                        href="https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#82a18a] hover:text-[#218c63] underline transition-colors mt-1 inline-block"
                      >
                        Click here to join WhatsApp group →
                      </a>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group p-4 rounded-xl border-2 border-[#20553c]/50 hover:border-[#218c63]/50 transition-all duration-300 bg-[#050906]/40">
                    <input
                      type="checkbox"
                      checked={discordChecked}
                      onChange={(e) => setDiscordChecked(e.target.checked)}
                      className="mt-1 appearance-none w-5 h-5 border-2 border-[#20553c] rounded checked:bg-[#218c63] checked:border-[#218c63] transition-all duration-200 cursor-pointer"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium group-hover:text-[#218c63] transition-colors block">
                        Join Discord Server (Mandatory)
                      </span>
                      <a 
                        href="https://discord.gg/EXq267jVA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#82a18a] hover:text-[#218c63] underline transition-colors mt-1 inline-block"
                      >
                        Click here to join Discord server →
                      </a>
                    </div>
                  </label>
                </div>

                {(!whatsappChecked || !discordChecked) && (
                  <p className="text-sm text-amber-400/80 mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    You must join both groups to complete registration
                  </p>
                )}
              </div>

            
              {statusMessage && (
                <div className={`p-5 rounded-xl text-center font-medium border-2 ${
                  statusMessage.type === "success"
                    ? "bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-300 border-green-500/50"
                    : "bg-gradient-to-r from-red-900/50 to-rose-900/50 text-red-300 border-red-500/50"
                } backdrop-blur-sm animate-fadeIn`}>
                  {statusMessage.message}
                </div>
              )}

           
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isLoading || !whatsappChecked || !discordChecked}
                  className={`relative group/button w-full md:w-auto border-2 border-[#218c63] text-white font-black text-lg py-4 px-16 rounded-xl transition-all duration-300 tracking-widest overflow-hidden
                  ${isLoading || !whatsappChecked || !discordChecked
                      ? 'bg-[#20553c] cursor-not-allowed opacity-70'
                      : 'bg-gradient-to-r from-[#218c63] to-[#20553c] hover:from-[#20553c] hover:to-[#218c63] hover:scale-105 hover:shadow-2xl hover:shadow-[#218c63]/50'
                    }`}
                >
                  
                  {!isLoading && whatsappChecked && discordChecked && (
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/button:translate-x-[200%] transition-transform duration-700"></div>
                  )}
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        🚀 JOIN THE BATTLE
                      </>
                    )}
                  </span>
                </button>
              </div>

              
              <p className="text-center text-sm text-gray-500 mt-6">
                By registering, you agree to participate in The MythX CTF Challenge
              </p>

            </form>
          </div>
        </FadeIn>

       
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#82a18a] hover:text-[#218c63] transition-colors font-medium group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

      </div>

      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        input[type="checkbox"]:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
        }
      `}</style>
    </main>
  );
}