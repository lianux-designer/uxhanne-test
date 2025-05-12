import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 rainbow-gradient"></div>
      <div className="relative z-10 text-center p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30">
        <h1 className={`${poppins.className} text-4xl md:text-6xl font-bold text-white mb-4`}>
          This is just a placeholder
        </h1>
        <p className={`${poppins.className} text-xl text-white/90`}>Your amazing content will be here soon</p>
      </div>
    </main>
  )
}
