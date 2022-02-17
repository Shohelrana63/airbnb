import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="icon">
      <Head>
        <title>Baig Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
    </div>
  )
}
