import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Harga Jasa Video Pendek AI | Qlip - Video Viral dari Konten Panjang',
  description:
    'Ubah video panjang jadi video pendek viral dengan AI! Qlip bantu buat judul, deskripsi, & hashtag. Paket fleksibel, harga mulai Rp500rb!',
}

const tiers = [
  {
    name: 'Paket Hemat',
    slug: 'hemat',
    description: 'Cocok untuk test pasar',
    priceMonthly: 340000,
    href: 'https://wa.me/6281393612896?text=Halo%20Qlip,%20saya%20tertarik%20dengan%20Paket%20Hemat',
    highlights: [
      { description: '20 video pendek' },
      { description: 'Durasi maksimal 3 menit' },
      { description: 'Judul AI optimized' },
    ],
    features: [
      { section: 'Video', name: 'Jumlah video', value: '20' },
      { section: 'Video', name: 'Harga per video', value: '17.000' },
      { section: 'Video', name: 'Durasi maksimal', value: '3 menit' },
      { section: 'Konten', name: 'Judul AI', value: true },
      { section: 'Konten', name: 'Deskripsi AI', value: false },
      { section: 'Konten', name: 'Hashtag hasil riset', value: false },
    ],
  },
  {
    name: 'Paket Standar',
    slug: 'standar',
    description: 'Cocok untuk pengembangan channel',
    priceMonthly: 700000,
    href: 'https://wa.me/6281393612896?text=Halo%20Qlip,%20saya%20tertarik%20dengan%20Paket%20Standar',
    highlights: [
      { description: '50 video pendek' },
      { description: 'Durasi maksimal 3 menit' },
      { description: 'Judul & deskripsi AI optimized' },
    ],
    features: [
      { section: 'Video', name: 'Jumlah video', value: '50' },
      { section: 'Video', name: 'Harga per video', value: '14.000' },
      { section: 'Video', name: 'Durasi maksimal', value: '3 menit' },
      { section: 'Konten', name: 'Judul AI', value: true },
      { section: 'Konten', name: 'Deskripsi AI', value: true },
      { section: 'Konten', name: 'Hashtag hasil riset', value: false },
    ],
  },
  {
    name: 'Paket Premium',
    slug: 'premium',
    description: 'Cocok untuk konten kreator profesional',
    priceMonthly: 900000,
    href: 'https://wa.me/6281393612896?text=Halo%20Qlip,%20saya%20tertarik%20dengan%20Paket%20Premium',
    highlights: [
      { description: '90 video pendek' },
      { description: 'Durasi maksimal 3 menit' },
      { description: 'Judul, deskripsi, hashtag AI optimized' },
    ],
    features: [
      { section: 'Video', name: 'Jumlah video', value: '90' },
      { section: 'Video', name: 'Harga per video', value: '10.000' },
      { section: 'Video', name: 'Durasi maksimal', value: '3 menit' },
      { section: 'Konten', name: 'Judul AI', value: true },
      { section: 'Konten', name: 'Deskripsi AI', value: true },
      { section: 'Konten', name: 'Hashtag hasil riset', value: true },
    ],
  }
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Video Panjang? Jadi Video Pendek Viral! Qlip Solusinya!</Heading>
      <Lead className="mt-6 max-w-3xl">
        Kami ubah konten panjangmu jadi video pendek yang menarik perhatian, lengkap dengan judul,
        deskripsi, dan hashtag yang tepat!
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:mx-24">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(tier.priceMonthly)}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Yang Anda dapatkan:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Hubungi via WhatsApp
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Hubungi via WhatsApp</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Hubungi via WhatsApp
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Pertanyaan yang Sering Ditanyakan
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Masih ragu? Ini jawabannya.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Apa yang saya dapat di setiap video?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Anda akan mendapatkan video pendek siap upload, judul optimasi AI, deskripsi menarik, dan hashtag trending untuk meningkatkan jangkauan. Semua siap pakai untuk platform seperti TikTok, YouTube Shorts, dan Instagram Reels.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Berapa lama prosesnya?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Tergantung jumlah video, rata-rata 3-7 hari kerja untuk menyelesaikan pesanan Anda. Kami memprioritaskan kualitas dan efektivitas setiap video yang kami buat.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Bagaimana cara kerjanya?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Sangat mudah! Anda kirim video panjang ke kami, jelaskan sedikit tentang target audiens dan tujuan konten, dan kami akan mengerjakannya. Tim Qlip akan menganalisis konten, mengidentifikasi bagian menarik, dan mengubahnya menjadi video pendek yang memiliki potensi viral.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Bagaimana cara memulai?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan Anda dan klik tombol "Hubungi via WhatsApp". Tim kami akan menghubungi Anda untuk langkah selanjutnya. Serahkan semua pada kami! Anda tinggal terima beres video pendek siap upload.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Pricing({ searchParams }) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <FrequentlyAskedQuestions />
    </main>
  )
}
