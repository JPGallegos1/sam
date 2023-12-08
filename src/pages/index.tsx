import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/features/landing/header'
import FAQ from '@/features/landing/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <FAQ />
    </>
  )
}
