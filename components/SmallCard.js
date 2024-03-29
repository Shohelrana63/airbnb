import Image from 'next/image';

function SmallCard({img, distance, location}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105
    transitiom transform duration-200 ease-out">
        {/* left */}
        <div className="relative h-16 w-16">
            <Image src={img} layout="fill" className="rounded-lg" alt=""/>
        </div>
        {/* right */}
        <div>
            <h2 className="font-semibold">{location}</h2>
            <h2 className="text-gray-500">{distance}</h2>
        </div>
    </div>
  )
}

export default SmallCard;