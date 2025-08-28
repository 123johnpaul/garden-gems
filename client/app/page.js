import Image from "next/image";
import Link from "next/link";

import QuotationMark from "@/_components/quotation";
import HandWipingSurface from "@/_components/handWipingSurface";
import BookingSection from "@/_components/bookingSection";
import CheckMark from "@/_components/checkMark";
import PlayCircle from "@/_components/playCircle";
import SpiralArrow from "@/_components/spiralArrow";
import StarFilled from "@/_components/starFilled";
import StarHalfFilled from "@/_components/starHalfFilled";
import LocationIcon from "@/_components/locationIcon";
import Dot from "@/_components/dot";
import OffersCard from "@/_components/offersCard";
import Arrow from "@/_components/arror";
import BlogPostCard from "@/_components/blogPostCard";
import BuildKiteLogo from "@/_components/buildKiteLogo";
import CorningLogo from "@/_components/corningLogo";
import DeliverooLogo from "@/_components/deliverooLogo";
import DocuSignLogo from "@/_components/docuSignLogo";
import VerilyLogo from "@/_components/verilyLogo";

import gardenCleaningImg from "@/public/assets/gardenCleaning.jpg";
import manSmiling from "@/public/assets/manSmiling.png";
import manTrimmingHedges from "@/public/assets/manTrimmingHedges.png";
import royalPerkResidence from "@/public/assets/royalPerkResidence.jpg";
import edenGardenResort from "@/public/assets/edenGardenResort.jpg";
import coxdaLandscapeProject from "@/public/assets/coxdaLandscapeProject.jpg";
import inaugurationProject from "@/public/assets/inaugurationProject.jpg";
import residentialGarden from "@/public/assets/residentialGarden.jpg";
import gardenConstruction from "@/public/assets/gardenConstruction.jpg";
import landscapeDesign from "@/public/assets/landscapeDesign.jpg";
import commercialServices from "@/public/assets/commercialServices.jpg";
import manHoldingBlower from "@/public/assets/manHoldingBlower.png";
import lawnMower from "@/public/assets/lawnMower.jpg";
import gardenBefore from "@/public/assets/gardenBefore.jpg";
import gardenAfter from "@/public/assets/gardenAfter.jpg";
import backyardBefore from "@/public/assets/backyardBefore.jpg";
import backyardAfter from "@/public/assets/backyardAfter.jpg";
import manHoldingPlant from "@/public/assets/manHoldingPlant.jpg";
import garden from "@/public/assets/garden.jpg";
import greenLawnMower from "@/public/assets/greenLawnMower.jpg";
import wheelbarrow from "@/public/assets/wheelbarrow.jpg";
import manMowingLawn from "@/public/assets/manMowingLawn.jpg";
import manWateringGarden from "@/public/assets/manWateringGarden.jpg";
import womanInGarden from "@/public/assets/womanInGarden.jpg";
import plants from "@/public/assets/plants.jpg";
import peopleInGarden from "@/public/assets/peopleInGarden.jpg";
import ContactUsForm from "@/_components/contact/contactUsForm";

export default function Home() {
  // For syncing backend and frontend
  // const [message, setMessage] = useState("")

  // useEffect(() => {
  //   fetch(`${API_BASE_URL}/`)
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message))
  //     .catch(err => console.error(err));
  // }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-8 md:grid-cols-4 gap-5 px-10 z-1 bg-[#0C7769] text-white">
        <div className="flex flex-col justify-center items-start h-full lg:col-start-2 lg:col-span-3 md:col-span-2 gap-11">
          <div className="flex flex-col gap-4.5">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-left">
              Award-Winning Landscaping Services
            </h1>
            <p className="text-lg max-w-lg w-3/4">
              We provide top-notch services to clients who seek nothing less
              than perfection. Let’s discuss your ideas.
            </p>
          </div>
          <div>
            <Link href="/schedule-consultation">
              <button className="bg-white text-[#0C7769] font-bold text-lg md:text-2xl px-15 py-2 md:py-6 rounded hover:bg-gray-200 w-fit">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:col-start-5 lg:col-span-4 md:col-span-2">
          <Image
            src={gardenCleaningImg}
            alt="Landscaper working"
            width={570}
            height={793}
            className="shadow-lg"
          />
        </div>
      </section>
      {/* Testimonial Section */}
      <div className="w-full flex flex-col justify-center items-center py-28 bg-[#FAF7F2]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-30 max-w-6xl w-3/4 lg:w-1/2">
          <Image
            alt="Young Man Smiling"
            src={manSmiling}
            height={200}
            width={300}
          />
          <div className="flex flex-col items-start gap-2 md:gap-5 w-3/4 lg:w-1/2">
            <div className="flex items-start">
              <QuotationMark width={20} height={35} />
              <QuotationMark width={20} height={35} />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold leading-6 w-full text-wrap text-justify text-lg">
                &quot;l have been a customer of Tom Bom for the last 5+ years
                and my lawn has looked great. The last few years Nate R has been
                treating my lawn and he takes the time to explain the process
                and does a fantastic job, he&apos;s great.&quot;
              </p>
              <p className="text-sm opacity-60 mb-4">
                &apos;Highest Rated Landscape Company in Central PA&apos;
              </p>
              <p className="text-sm font-semibold">Elazar H. \ Lancaster, PA</p>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="w-full flex flex-col justify-center items-center pb-28 bg-[#FAF7F2]" id="about">
        <div className="flex flex-col-reverse justify-center items-center md:flex-row max-w-6xl w-[80%] gap-14 border-b-[#1414142E] pb-4 mb-6 border-b">
          <div className="flex flex-col items-center md:items-start w-full lg:w-1/2">
            <div className="w-full lg:w-3/4 lg:py-10 flex flex-col gap-5">
              <h2 className="text-2xl lg:text-4xl font-bold leading-8 lg:leading-13">
                Premier & Award-Winning Landscape Company in the USA
              </h2>
              <p className="text-sm opacity-60 mb-4 leading-5 lg:leading-6">
                Welcome to our premier and award-winning Landscape Company in
                the USA! With a track record of excellence and recognition for
                our exceptional work, we take immense pride in transforming
                outdoor spaces into breathtaking, picturesque havens.
              </p>
            </div>
            <button className="flex h-14 w-54 items-center justify-center rounded-lg bg-[#0C7769] text-center font-bold leading-9 tracking-[-0.01em] text-white">
              More About Us
            </button>
          </div>
          <Image
            alt="Man trimming hedges"
            height={400}
            width={400}
            className="w-full md:w-1/2"
            src={manTrimmingHedges}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-16 w-9/10 md:w-7/10 px-8">
          <div className="flex gap-6">
            <HandWipingSurface width={84} height={84} />
            <div className="flex flex-col justify-around">
              <p className="font-semibold text-lg">Landscape Consultations</p>
              <p className="text-sm w-3/4 opacity-60">
                Plan with the island&apos;s top landscaping professionals
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <HandWipingSurface width={84} height={84} />
            <div className="flex flex-col justify-around">
              <p className="font-semibold text-lg">
                New Landscape Installations
              </p>
              <p className="text-sm w-3/4 opacity-60">
                Plan with the island&apos;s top landscaping professionals
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <HandWipingSurface width={84} height={84} />
            <div className="flex flex-col justify-around">
              <p className="font-semibold text-lg">Landscape Renovations</p>
              <p className="text-sm w-3/4 opacity-60">
                Plan with the island&apos;s top landscaping professionals
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <HandWipingSurface width={84} height={84} />
            <div className="flex flex-col justify-around">
              <p className="font-semibold text-lg">Custom Maintenance</p>
              <p className="text-sm w-3/4 opacity-60">
                Plan with the island&apos;s top landscaping professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-full flex flex-col items-center text-white bg-[#0C7769] pb-28" id="projects">
        <div className="max-w-6xl w-full">
          {/* Projects Grid */}
          <div className="flex flex-col gap-20 pt-14">
            <div className="flex items-center justify-center">
              <h2 className="capitalize font-bold text-2xl md:text-4xl leading-8 md:leading-13 text-center w-3/4">
                Showcasing Our Finest Projects and Outdoor Creations
              </h2>
            </div>
            <div className="flex flex-col gap-20">
              <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-7">
                {/* Project 1 */}
                <div className="flex flex-col col-span-2 px-4">
                  <Image
                    src={royalPerkResidence}
                    alt="The Royal Perk Residence"
                    className="object-cover h-full w-full aspect-square"
                    width="auto"
                    height="auto"
                  />
                  <div className="flex flex-col gap-2 w-3/4">
                    <p className="uppercase text-xs opacity-75 pt-3">• Hotel</p>
                    <h3 className="font-semibold text-lg">
                      The Royal Perk Residence
                    </h3>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col col-span-2 md:col-span-1 justify-center px-4">
                  <Image
                    src={edenGardenResort}
                    alt="Eden Garden Resort"
                    className="object-cover w-full h-1/2 aspect-square"
                    width="auto"
                    height="auto"
                  />
                  <div className="flex flex-col gap-2 w-3/4">
                    <p className="uppercase text-xs opacity-75 pt-3">
                      • Water & Pools
                    </p>
                    <h3 className="font-semibold text-lg">
                      Eden Garden Resort
                    </h3>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col col-span-2 md:col-span-1 justify-center px-4">
                  <Image
                    src={coxdaLandscapeProject}
                    alt="Coxda Landscape Project"
                    className="object-cover w-full h-1/2 aspect-square"
                    width="auto"
                    height="auto"
                  />
                  <div className="flex flex-col gap-2 w-3/4">
                    <p className="uppercase text-xs opacity-75 pt-3">
                      • Residential
                    </p>
                    <h3 className="font-semibold text-lg">
                      Coxda Landscape Project
                    </h3>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="flex flex-col col-span-2 px-4">
                  <Image
                    src={inaugurationProject}
                    alt="Inauguration Project"
                    className="object-cover h-full w-full aspect-square"
                    width="auto"
                    height="auto"
                  />
                  <div className="flex flex-col gap-2 w-3/4">
                    <p className="uppercase text-xs opacity-75 pt-3">
                      • Outdoor Lighting
                    </p>
                    <h3 className="font-semibold text-lg">
                      Inauguration Project
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="flex h-14 w-54 items-center justify-center rounded-lg text-[#0C7769] text-center font-bold leading-9 tracking-[-0.01em] bg-white">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="w-full flex flex-col justify-center items-center pb-28 bg-[#FAF7F2]">
        <div className="max-w-6xl flex flex-col w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13 text-center pt-10">
              Wide Range of Raleigh Landscaping Services
            </h2>
            <p className="w-full md:w-3/5 text-center text-sm opacity-60 mb-4">
              At the core of our purpose and dedication lies the mission to
              unlock your landscape&apos;s utmost potential, while
              simultaneously elevating your property value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pb-16 px-4">
            <div>
              <Image
                width="auto"
                height="auto"
                src={residentialGarden}
                alt="A Residential Garden"
                className="w-full"
              />
              <p className="font-semibold">Residential Gardens</p>
            </div>
            <div>
              <Image
                width="auto"
                height="auto"
                src={gardenConstruction}
                alt="A Residential Garden"
                className="w-full"
              />
              <p className="font-semibold">Garden Construction</p>
            </div>
            <div>
              <Image
                width="auto"
                height="auto"
                src={landscapeDesign}
                alt="A Residential Garden"
                className="w-full"
              />
              <p className="font-semibold">Landscape Design</p>
            </div>
            <div>
              <Image
                width="auto"
                height="auto"
                src={commercialServices}
                alt="A Residential Garden"
                className="w-full"
              />
              <p className="font-semibold">Commercial Services</p>
            </div>
          </div>
        </div>
        <Link href="/services">
          <button className="flex h-14 w-54 items-center justify-center rounded-lg text-white text-center font-bold leading-9 tracking-[-0.01em] bg-[#0C7769]">
            View All Services
          </button>
        </Link>
      </div>
      {/* Booking Steps Section */}
      <BookingSection />

      {/* Schedule Consultation Section */}
      <div className="w-full flex flex-col items-center justify-center text-[#141414] bg-[#FAF7F2] py-28">
        <div className="max-w-6xl w-[80%] flex flex-col-reverse md:flex-row items-center">
          <div className="w-1/2 flex justify-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-2xl lg:text-4xl w-full md:w-3/4">
                Why Our Landscape Services Stand Out
              </h2>
              <p className="opacity-70 text-shadow-amber-50 w-full md:w-3/4">
                At the heart of our values is prioritizing our clients. Your
                satisfaction is paramount, and our highly skilled team goes
                above and beyond to ensure every property receives exceptional
                care.
              </p>
              <ul className="flex flex-col items-start justify-center list-none text-sm gap-2">
                <li className="flex items-center gap-2">
                  <CheckMark />
                  Client satisfaction is priority #1
                </li>
                <li className="flex items-center gap-2">
                  <CheckMark />
                  Highly skilled team
                </li>
                <li className="flex items-center gap-2">
                  <CheckMark />
                  Your happy or we aren&apos;t done yet
                </li>
                <li className="flex items-center gap-2">
                  <CheckMark />
                  Massive work force = quick turn-around
                </li>
              </ul>
              <Link href="/schedule-consultation">
                <button className="flex h-14 w-60 items-center justify-center rounded-lg text-white text-center font-bold leading-9 tracking-[-0.01em] bg-[#0C7769]">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              className="rounded-full"
              alt="A man holding a blower"
              src={manHoldingBlower}
              height={500}
              width="auto"
            />
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="w-full flex flex-col items-center justify-center text-[#141414] bg-[#FAF7F2] pb-28">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between w-full gap-20 px-4">
          <p className="font-semibold text-lg">Countdowns</p>
          <div className="flex flex-col justify-evenly gap-3">
            <hr />
            <p className="font-semibold text-7xl">32+</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Years Experience</p>
              <p className="text-[#141414BF] opacity-75">
                Professional Landscaping
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-3">
            <hr />
            <p className="font-semibold text-7xl">100K</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Satisfied People</p>
              <p className="text-[#141414BF] opacity-75">Landscape Design</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-3">
            <hr />
            <p className="font-semibold text-7xl">60+</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Expert Members</p>
              <p className="text-[#141414BF] opacity-75">
                Professional Gardening
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial video */}
      <div className="w-full flex flex-col justify-center pb-28 object-cover relative bg-[#FAF7F2]">
        <Image
          alt="A lawn mower"
          width="auto"
          height="auto"
          className="w-full"
          src={lawnMower}
        />
        <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-[90%]" />
      </div>

      {/* Before/After Landscape Design Section */}
      <div className="w-full flex flex-col justify-center items-center pb-28 bg-[#FAF7F2]">
        <div className="max-w-6xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-10 gap-5">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13 text-center">
              Stunning Before and After Landscaping Design Transformations
            </h2>
            <Link href="/schedule-consultation">
              <button className="flex h-14 w-60 items-center justify-center rounded-lg text-white text-center font-bold leading-9 tracking-[-0.01em] bg-[#0C7769]">
                Schedule a Consultation
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-16 px-5 h-full w-full relative">
            <div className="flex flex-col gap-3">
              <Image
                src={gardenBefore}
                alt="A Garden Before Landscape Design Transformation"
                className="w-full h-3/4"
                width="auto"
                height="auto"
              />
              <p className="font-semibold">Before</p>
            </div>
            <div className="flex flex-col gap-3 justify-end">
              <Image
                src={gardenAfter}
                alt="A Garden After Landscape Design Transformation"
                className="w-full h-3/4"
                width="auto"
                height="auto"
              />
              <p className="font-semibold">After</p>
            </div>

            {/* Position SpiralArrow between first two columns */}
            <SpiralArrow className="absolute top-1/4 left-1/2 md:top-2/5 top md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 w-25" />

            <div className="flex flex-col gap-3">
              <Image
                src={backyardBefore}
                alt="A Backyard Before Landscape Design Transformation"
                className="w-full h-3/4"
                width="auto"
                height="auto"
              />
              <p className="font-semibold">Before</p>
            </div>
            <div className="flex flex-col gap-3 justify-end">
              <Image
                src={backyardAfter}
                alt="A Backyard After Landscape Design Transformation"
                className="w-full h-3/4"
                width="auto"
                height="auto"
              />
              <p className="font-semibold">After</p>
            </div>

            {/* Position second SpiralArrow between last two columns */}
            <SpiralArrow className="absolute top-3/4 left-1/2 md:top-2/5 md:left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-10 w-25" />
          </div>
        </div>
      </div>

      {/* Testimonial 2 Section: GUY WITH PLANT */}
      <div className="w-full flex flex-col text-white bg-[#FAF7F2]">
        <div className="w-full flex gap-0">
          <div className="w-1/2">
            <Image
              src={manHoldingPlant}
              alt="A man pressing a shovel to the ground with his feet"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 bg-[#0C7769] flex flex-col items-center justify-center h-auto p-16">
            <div className="flex flex-col items-center justify-center h-full w-[75%] gap-15">
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex">
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarHalfFilled />
                </div>
                <div className="flex flex-col items-center text-center text-lg md:text-2xl gap-10">
                  <p className="tracking-normal">
                    &quot;We love the landscaping project that Tom Bom designed
                    and installed. The design was perfect for our yard, and the
                    team that came to plant the trees and bushes did an amazing
                    job. We highly recommend Tomlinson Bomberger! &quot;
                  </p>
                  <div className="flex flex-col items-center gap-1.5">
                    <p className="text-[16px] font-semibold">– ROBERT SMITH</p>
                    <div className="flex items-center gap-2">
                      <LocationIcon />
                      <p className="opacity-75 text-sm"> New York</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Special Offers Section */}
      <div className="w-full flex flex-col justify-center items-center py-28 bg-[#FAF7F2]">
        <div className="max-w-6xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-10">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13 text-center">
              Current Special Offers
            </h2>
            <p className="w-full md:w-3/5 text-center opacity-60 mb-4">
              Click or tap a special to view details-
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-8">
            <OffersCard
              name="Garden Construction"
              message="30% Off When You Swap to Lawns and Palms"
              img={garden}
              imgAltText="A lush green lawn lined with palm trees under a clear blue sky"
            />
            <OffersCard
              name="Commercial Services"
              message="50% Off First Month of Lawn Care"
              img={greenLawnMower}
              imgAltText="A person mowing a lawn with a green lawn mower"
            />
            <OffersCard
              name="Landscape Design"
              message="Refer a Neighbor and Save 20% On Lawn Care"
              img={wheelbarrow}
              imgAltText="A person holding a green wheelbarrow"
            />
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="w-full flex flex-col justify-center items-center pb-28 px-4 bg-[#FAF7F2]" id="blog">
        <div className="max-w-6xl flex flex-col">
          <div className="flex items-center justify-between pb-10 gap-5">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13">
              Latest News From the Industry
            </h2>
            <div className="flex items-center justify-center gap-3 border-b-[1.5px] border-b-[#141414]/30 pb-1">
              <p className="bold text-lg">View all Blog</p>
              <Arrow />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <BlogPostCard
              imageUrl={manMowingLawn}
              category="Garden"
              date="Sep 26, 2022"
              title="Landscaping in A Post-Pandemic World"
              width={500}
              height={250}
              className="h-fit"
            />
            <BlogPostCard
              imageUrl={manWateringGarden}
              category="Garden"
              date="Sep 26, 2022"
              title="Which one is best for your yard?"
              width={100}
              height={490}
              className="h-fit md:h-1/2"
            />
            <BlogPostCard
              imageUrl={womanInGarden}
              category="Garden"
              date="Sep 26, 2022"
              title="5 Fall Yard Care & Maintenance Tips"
              width={100}
              height={490}
              className="h-fit"
            />
            <BlogPostCard
              imageUrl={plants}
              category="Garden"
              date="Sep 26, 2022"
              title="5 Steps to Design The Yard of Your Dreams"
              width={100}
              height={490}
              className="h-fit md:h-1/2"
            />
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="w-full flex flex-col items-center justify-center text-[#141414] bg-[#FAF7F2] gap-15 pb-28 px-2">
        <div className="flex flex-col items-center">
          <p className="text">A Right Media Mix Can Make The Difference</p>
          <h2 className="font-bold text-4xl">Our Happy Clients</h2>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-evenly gap-4 md:gap-0">
          <BuildKiteLogo />
          <CorningLogo />
          <DeliverooLogo />
          <DocuSignLogo />
          <VerilyLogo />
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="w-full flex flex-col items-center justify-center text-[#141414] bg-[#0C7769] py-28 px-4" id="contact">
        <div className="max-w-6xl w-full flex items-center justify-between gap-20">
          <div className="w-2/5 h-full hidden md:block">
            <Image
              alt="A man and a woman in the garden"
              src={peopleInGarden}
              width="auto"
              height="auto"
              className="h-full w-full"
            />
          </div>
          <div className="text-white w-full md:w-3/5 flex flex-col">
            <div className="flex flex-col gap-2">
              <p className="opacity-75 mb-2">Need Any Consultations</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Contact Us
              </h2>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
