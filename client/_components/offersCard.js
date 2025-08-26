import Image from "next/image";


export default function OffersCard({name, message, img, imgAltText}){
    return(
        <div className="max-w-6xl overflow-hidden shadow-lg bg-[#f9f6f1]">
      <div className="relative">
        <Image
          className="w-full h-full"
          src={img}
          alt={imgAltText}
        />
        <div className="absolute top-5 left-5 bg-[#FFC703] text-black text-sm font-medium px-4 py-2">
          {name}
        </div>
      </div>
      <div className="p-5 bg-[#006a62] h-full">
        <h2 className="text-white md:text-2xl font-semibold leading-tight">
          {message}
        </h2>
      </div>
    </div>
    )
}