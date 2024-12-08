import Image from "next/image";
import Link from 'next/link';


function Hero() {
    return (

        <main className="min-h-screen bg-gradient-to-br from-[#f5f4ef] to-[#f0eee5] flex flex-col">
            {/* Navigation */}
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/logo_1.png"
                        alt="Claude Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">Claude Cancer AI</h1>
                </div>
                <div className="space-x-4">
                    {/*<Link
                        href="/chat"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Chat
                    </Link>
                    <Link
                        href="/about"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        About
                    </Link>*/}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
                <div className="text-center max-w-3xl">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
                        Your AI Assistant for Cancer Treatment
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        ClaudeAI provides personalized, empathetic support for <span className="font-bold text-yellow-700">cancer patients</span>, helping you navigate treatment challenges, ask questions, and find resources tailored to your journey.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">

                            <h3 className="text-xl font-semibold mb-2">Empathetic Conversations</h3>
                            <p className="text-gray-600">Chat with an AI designed to listen and provide thoughtful, personalized responses to your concerns.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">

                            <h3 className="text-xl font-semibold mb-2">Guidance and Resources</h3>
                            <p className="text-gray-600">Access helpful tips, educational materials, and tailored recommendations for your <span className="font-bold text-yellow-700">cancer</span> treatment journey.</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <Link
                            href="/chat"
                            className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                        >
                            Chat
                        </Link>
                        <Link
                            href="/about"
                            className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 py-6">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    © 2024 ClaudeAI. Empowering <span className="font-bold text-yellow-700">cancer care</span> through AI.
                </div>
            </footer>
        </main>
    )
}
export default function Main_app() {
    return (
        <>
            <Hero />
        </>
    )
}