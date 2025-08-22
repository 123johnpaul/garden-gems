import Image from "next/image";

export default function Header() {
  return (
    <div className="min-h-screen bg-[#0C7769] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Garden Gems" width={58} height={58} />
          <span className="text-xl font-bold">Garden Gems</span>
        </div>
        <div className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <div className="relative group">
            <button className="hover:underline">Services ▾</button>
            <div className="absolute left-0 hidden w-40 mt-2 bg-white text-black shadow-md rounded group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Lawn Care</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Landscaping</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Garden Design</a>
            </div>
          </div>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Plants List</a>
        </div>
        <div className="flex items-center space-x-4">
          <span>(000) 000 - 0000</span>
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-[#107361]">
            Schedule a Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-20">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Award-Winning Landscaping Services
          </h1>
          <p className="text-lg max-w-lg">
            We provide top-notch services to clients who seek nothing less than perfection. Let’s discuss your ideas.
          </p>
          <button className="bg-white text-[#107361] font-semibold px-6 py-3 rounded hover:bg-gray-200 w-fit">
            Schedule a Consultation
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/landscaper.png"
            alt="Landscaper working"
            width={570}
            height={793}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
