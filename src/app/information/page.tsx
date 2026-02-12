"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import dynamic from "next/dynamic"

interface RegistrationStats {
    total: number
    fromKIET: number
    fromOthers: number
}

const AnimatedBackground = dynamic(() => import("@/components/animted-bg"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black bg-gradient-to-br from-black to-purple-950" />,
})

const About: React.FC = () => {

    const [stats, setStats] = useState<RegistrationStats>({
        total: 0,
        fromKIET: 0,
        fromOthers: 0,
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const getRegistrations = async () => {
        try {
            setError(null)
            const response = await axios.get<RegistrationStats>("/api/register")
            setStats(response.data)
        } catch (err: any) {
            console.error("Error fetching registration data:", err)
            setError("Failed to fetch registration data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            if (isMounted) {
                await getRegistrations()
            }
        }

        fetchData()

        const interval = setInterval(fetchData, 600000) // 10 minutes

        return () => {
            isMounted = false
            clearInterval(interval)
        }
    }, [])

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#050906] to-[#0e2b1d] text-white flex items-center justify-center overflow-hidden">

            <AnimatedBackground />

            <div className="relative z-10 max-w-4xl w-full px-6 py-20">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#218c63] to-[#82a18a] bg-clip-text text-transparent">
                        The MythX CTF Registration Stats
                    </h1>
                    <p className="text-[#82a18a] mt-4">
                        Live battlefield analytics
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-[#82a18a]">
                        Loading stats...
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400">
                        {error}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-[#0e2b1d] border border-[#20553c] rounded-xl p-8 text-center shadow-lg shadow-[#218c63]/10 hover:shadow-[#218c63]/30 transition-all duration-300">
                            <h2 className="text-[#82a18a] text-sm uppercase tracking-wider mb-3">
                                Total Registered
                            </h2>
                            <p className="text-5xl font-bold text-[#218c63]">
                                {stats.total}
                            </p>
                        </div>

                        <div className="bg-[#0e2b1d] border border-[#20553c] rounded-xl p-8 text-center shadow-lg shadow-[#218c63]/10 hover:shadow-[#218c63]/30 transition-all duration-300">
                            <h2 className="text-[#82a18a] text-sm uppercase tracking-wider mb-3">
                                From KIET
                            </h2>
                            <p className="text-5xl font-bold text-[#218c63]">
                                {stats.fromKIET}
                            </p>
                        </div>

                        <div className="bg-[#0e2b1d] border border-[#20553c] rounded-xl p-8 text-center shadow-lg shadow-[#218c63]/10 hover:shadow-[#218c63]/30 transition-all duration-300">
                            <h2 className="text-[#82a18a] text-sm uppercase tracking-wider mb-3">
                                From Other Colleges
                            </h2>
                            <p className="text-5xl font-bold text-[#218c63]">
                                {stats.fromOthers}
                            </p>
                        </div>

                    </div>
                )}

                <div className="text-center mt-12 text-[#82a18a] text-sm">
                    Auto-refreshes every 10 minutes
                </div>

            </div>
        </main>
    )
}

export default About
