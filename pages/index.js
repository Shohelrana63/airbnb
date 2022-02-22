import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData}) {
  return (
    <div className="icon">
      <Head>
        <title>Baig Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        
        {/* Pull some data from a sever - API endpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4">
          {
            exploreData?.map((item) => (
              <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}/>
            ))
          }
        </div>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps (){
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );
  return{
    props:{
      exploreData,
    }
  }
}