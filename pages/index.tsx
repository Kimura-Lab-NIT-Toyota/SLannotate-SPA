import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main>
        <h2>SLannotate App</h2>
      </main>
    </Layout>
  )
}
