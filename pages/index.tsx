import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main>
        <h2>SLannotate App</h2>
        <Link href="/upload"><button>Upload</button></Link>
        <Link href="/list"><button>List</button></Link>
      </main>
  )
}
