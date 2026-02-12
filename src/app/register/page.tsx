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
  transactionid: "",
  othercollege: "",
};

export default function Register() {

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [collegeOption, setCollegeOption] = useState<"kiet" | "other">("kiet");

  const router = useRouter();

  useEffect(() => {
    console.log("%c What are you doing here ?! you sneaky developer ", "color:#05fff2");
  }, []);

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

    if (!formData.branch)
      errors.push("Branch is required");

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
        <title>Register | TechnoHacks</title>
      </Head>

      <ToastContainer />

      <div className="fixed inset-0 z-10">
        <AnimatedBackground />
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-12 relative z-20">

        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#218c63]  tracking-wider">
            <span className="text- uppercase">Register for</span> <br /> The MythX CTF
          </h1>
          <p className="text-lg text-center text-[#82a18a] mb-12">
            Enter the arena. Break the code. Capture the flag.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-[#0e2b1d]/70 backdrop-blur-sm border border-[#20553c] rounded-lg shadow-xl shadow-[#218c63]/10 p-8 md:p-10 space-y-6"
          >

            <div>
              <label className="block mb-2 text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                disabled={isLoading}
                className="bg-[#050906] border border-[#20553c] text-white rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-[#050906] border border-[#20553c] text-white rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Phone</label>
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
                className="bg-[#050906] border border-[#20553c] text-white rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">College</label>
              <div className="flex gap-4 mb-3">
                <label>
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
                  /> KIET
                </label>

                <label>
                  <input
                    type="radio"
                    placeholder="Your college name"
                    checked={collegeOption === "other"}
                    onChange={() => {
                      setCollegeOption("other");
                      setFormData(prev => ({ ...prev, college: "" }));
                    }}
                  /> Other
                </label>
              </div>

              {collegeOption === "other" && (
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="bg-[#050906] border border-[#20553c] text-white rounded-lg block w-full p-2.5"
                />
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                className="bg-[#050906] border border-[#20553c] text-white rounded-lg block w-full p-2.5"
              />
            </div>
            {statusMessage && (
              <div className={`p-3 rounded-md text-center text-sm ${
                statusMessage.type === "success"
                  ? "bg-green-900/50 text-green-300"
                  : "bg-red-900/50 text-red-300"
              }`}>
                {statusMessage.message}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`border-2 border-[#218c63] text-white font-bold py-3 px-12 rounded-md transition-all duration-300
                ${isLoading
                    ? 'bg-[#20553c] cursor-not-allowed opacity-70'
                    : 'bg-[#218c63] hover:bg-[#20553c] hover:scale-105'
                  }`}
              >
                {isLoading ? "Submitting..." : "JOIN THE BATTLE"}
              </button>
            </div>

          </form>
        </FadeIn>

        <div className="text-center mt-10">
          <Link href="/" className="text-sm text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
