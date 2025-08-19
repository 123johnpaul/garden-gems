import Image from "next/image";
import gardenCleaningImg from "@/public/assets/gardenCleaning.jpg";
import manSmiling from "@/public/assets/manSmiling.jpg";
import manTrimmingHedges from "@/public/assets/manTrimmingHedges.jpg";
import QuotationMark from "@/_components/quotation";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex gap-8 h-[600px] w-full bg-[#0C7769] justify-center items-center text-white p-10">
        <div className="flex justify-center items-center gap-8 max-w-6xl w-full">
          <div className="flex flex-col gap-7 gap-y-4">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-6xl font-bold leading-16">
                Award-Winning
                <br /> Landscaping
                <br /> Services
              </h1>
              <p className="font-normal text-md opacity-70">
                We provide top-notch services to clients who seek
                <br /> nothing less than perfection. Let&apos;s discuss your
                <br /> ideas.
              </p>
            </div>
            <button className="flex h-14 w-72 items-center justify-center rounded-lg bg-white text-center text-lg font-bold leading-9 tracking-[-0.01em] text-[#0C7769]">
              Schedule a Consultation
            </button>
          </div>
          <Image
            alt="Man trims lawn with trimmer"
            className="h-[40rem] w-[28rem] mt-32"
            src={gardenCleaningImg}
          />
        </div>
      </div>

      <div className="w-full flex justify-center py-28">
        <div className="flex items-center gap-14 max-w-6xl w-1/2">
          <Image
            alt="Young Man Smiling"
            src={manSmiling}
            height={200}
            width={300}
          />
          <div className="flex flex-col items-start gap-5 w-1/2">
            <div className="flex items-start">
              <QuotationMark width={20} height={35} />
              <QuotationMark width={20} height={35} />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold leading-6 w-full text-wrap text-justify text-lg">
                &quot;l have been a customer of Tom Bom for the last 5+ years and my
                lawn has looked great. The last few years Nate R has been
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
      <div className="w-full flex justify-center">
        <div className="flex max-w-6xl w-[69%] gap-14 border-b-[#1414142E] py-7 border-b">
          <div className="w-1/2">
          <div className="w-3/4 py-10">
            <h2 className="text-4xl font-bold leading-13">Premier & Award-Winning Landscape Company in the USA</h2>
            <p className="text-sm opacity-60 mb-4 leading-6">
              Welcome to our premier and award-winning Landscape Company in the
              USA! With a track record of excellence and recognition for our
              exceptional work, we take immense pride in transforming outdoor
              spaces into breathtaking, picturesque havens.
            </p>
            </div>
            <button className="flex h-14 w-54 items-center justify-center rounded-lg bg-[#0C7769] text-center text-lg font-bold leading-9 tracking-[-0.01em] text-white">
              More About Us
            </button>
          </div>
          <Image
            alt="Man trimming hedges"
            height={400}
            className="w-1/2"
            src={manTrimmingHedges}
          />
        </div>
      </div>
      {/* <Seperator /> */}
      {/* Add max-w-6xl to other sections too */}
      <div className="w-full flex flex-col justify-center">
        <div className="max-w-6xl">ABOUT US</div>
        <div>PROJECTS</div>
        <div>SERVICES</div>
        <div>BOOK A CALL</div>
        <div>
          FATHER DIV: SCHEDULE CONSULTATION
          <div>TESTIMONIAL VIDEO</div>
          <div>BEFORE/AFTER</div>
        </div>
        <div>TESTIMONIAL 2: GUY WITH PLANT</div>
        <div>SPECIAL OFFERS</div>
        <div>INDUSTRY NEWS</div>
        <div>HAPPY CLIENTS</div>
        <div>CONTACT US</div>
      </div>
      {/* Continue pattern for other sections... */}
    </main>
  );
}
