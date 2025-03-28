import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'

export const metadata = {
  title: "Qlip: AI Pembuat Video Pendek Otomatis | Jasa Edit Video Viral",
  description:
    'Qlip membantu content creator & bisnis mengubah konten panjang menjadi video pendek viral dengan AI. Jasa edit video TikTok, YouTube Shorts, Instagram Reels.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Buat Video Pendek, Tanpa Ribet!
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Qlip menghemat waktu Anda dengan mengubah konten panjang menjadi video pendek berkualitas tinggi untuk TikTok, YouTube Shorts, dan Instagram Reels.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://wa.me/6281393612896?text=Halo%20Qlip,%20saya%20tertarik%20dengan%20jasa%20video%20pendek%20Anda.">
              Konsultasi Gratis via WhatsApp!
            </Button>
            <Button variant="secondary" href="/portfolio">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Layanan Qlip: Solusi Video Pendek Lengkap
        </Heading>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Ubah konten panjang menjadi video pendek viral dengan teknologi AI kami yang canggih
        </p>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/qlip-result.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
          alt="Qlip AI video editing dashboard"
        />
      </Container>
    </div>
  )
}

function AboutUsSection() {
  return (
    <Container className="py-24">
      <Subheading>Tentang Kami</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Qlip: AI-Powered Video Editing untuk Kesuksesan Kontenmu
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg text-gray-700">
            Qlip didirikan oleh Qisthi Ramadhani, seorang tech enthusiast dan optimizer
            berpengalaman dalam dunia konten digital. Misi kami adalah membantu content creator
            dan bisnis Indonesia menghasilkan konten berkualitas tinggi secara efisien dengan
            bantuan teknologi AI.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Dengan teknologi AI terkini dan tim editor profesional, Qlip menyediakan solusi
            video pendek lengkap untuk TikTok, YouTube Shorts, dan Instagram Reels yang membantu
            Anda mencapai tujuan pemasaran digital.
          </p>
          <Button href="https://wa.me/6281393612896?text=Halo%20Qlip,%20saya%20tertarik%20dengan%20jasa%20video%20pendek%20Anda." className="mt-6">
            Hubungi Kami Sekarang
          </Button>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img
            src="https://log.qisthi.dev/avatar.jpeg"
            alt="Qisthi Ramadhani - Founder Qlip"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <ServicesSection />
        </div>
        <AboutUsSection />
      </main>
    </div>
  )
}
