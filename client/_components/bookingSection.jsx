"use client";

import Image from "next/image";
import manHoldingShovel from "@/public/assets/manHoldingShovel.jpg";
import Phone from "./phone";
import Handshake from "./handshake";
import ConstructionWorker from "./constructionWorker";
import Confetti from "./confetti";

const handleScroll = () => {
  window.scrollTo({
    top: document.getElementById(targetId).offsetTop,
    behavior: "smooth",
  });
};

export default function BookingSection() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full max-h-[1024px] flex gap-0">
        <div className="w-1/2">
          <Image
            src={manHoldingShovel}
            alt="A man pressing a shovel to the ground with his feet"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 bg-[#0C7769] text-white">
          <div className="flex flex-col items-start h-full lg:p-20">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13">
              Book in 3 Easy Steps
            </h2>
            <div className="h-full flex gap-6 mt-10">
              {/* <!-- Scroll Indicator Container --> */}
              <div className="h-full">
                {/* <!-- Main vertical line --> */}
                <div className="relative w-0.5 h-full bg-[#FAF7F2]">
                  {/* <!-- Active indicator line --> */}
                  <div
                    id="active-line"
                    className="absolute top-0 w-full h-1/4 bg-white transition-transform duration-300 ease-in-out"
                  ></div>
                </div>
              </div>
              <div className="w-full items-start flex flex-col">
                <section
                  id="section-1"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                >
                  <p className="text-sm opacity-60">01</p>
                  <div className="flex flex-col items-s lg:gap-0tart gap-5 justify-center h-full">
                    <Phone height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Make Call</p>
                      <p className="text-[16px] opacity-60">
                        Schedule a design meeting!
                      </p>
                    </div>
                  </div>
                </section>
                <section
                  id="section-2"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                >
                  <p className="text-sm opacity-60">02</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <Handshake height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Collaborate</p>
                      <p className="text-[16px] opacity-60">
                        Create your perfect plan!
                      </p>
                    </div>
                  </div>
                </section>
                <section
                  id="section-3"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                >
                  <p className="text-sm opacity-60">03</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <ConstructionWorker height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Construction</p>
                      <p className="text-[16px] opacity-60">
                        With approved design, construction starts!
                      </p>
                    </div>
                  </div>
                </section>
                <section
                  id="section-4"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                >
                  <p className="text-sm opacity-60">04</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <Confetti height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Celebrate</p>
                      <p className="text-[16px] opacity-60">
                        Raise a toast in the backyard of your dreamsl
                      </p>
                    </div>
                  </div>
                </section>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
