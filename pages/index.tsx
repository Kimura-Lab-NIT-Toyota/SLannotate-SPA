import Link from 'next/link'
import RoutingButton from '@/components/RoutingButton'

export default function Home() {
  return (
      <main>
        <RoutingButton at="/upload"/>
        <RoutingButton at="/list"/>
      </main>
  )
}
