"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "motion/react";

import manHoldingShovel from "@/public/assets/manHoldingShovel.jpg";
import Phone from "./phone";
import Handshake from "./handshake";
import ConstructionWorker from "./constructionWorker";
import Confetti from "./confetti";

export default function BookingSection() {
  const scrollBarRef = useRef(null);
  const isInView = useInView(scrollBarRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: scrollBarRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const yRange = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 250, 500, 580]
  );
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.25], [40, 0]);

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
        <div className="w-1/2 bg-[#0C7769] text-white px-2">
          <div className="flex flex-col items-start h-full lg:p-20">
            <h2 className="capitalize font-bold text-2xl lg:text-4xl leading-8 md:leading-13">
              Book in 3 Easy Steps
            </h2>
            <div className="h-full flex gap-6 mt-10" ref={scrollBarRef}>
              {/* <!-- Scroll Indicator Container --> */}
              {/* <!-- Main vertical line --> */}
              <motion.div className="relative w-1 h-full bg-green-200">
                {/* <!-- Active indicator line --> */}
                <motion.div
                  id="active-line"
                  className="absolute top-0 w-full h-1/4 bg-white"
                  style={{ y: yRange }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="w-full items-start flex flex-col"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.4 },
                  },
                }}
              >
                <motion.section
                  id="section-1"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-sm opacity-60">01</p>
                  <div className="flex flex-col items-s lg:gap-0tart gap-5 justify-center h-full">
                    <Phone height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Make Call</p>
                      <p className="text-sm md:text-2xl opacity-60">
                        Schedule a design meeting!
                      </p>
                    </div>
                  </div>
                </motion.section>
                <motion.section
                  id="section-2"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-sm opacity-60">02</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <Handshake height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Collaborate</p>
                      <p className="text-sm md:text-2xl opacity-60">
                        Create your perfect plan!
                      </p>
                    </div>
                  </div>
                </motion.section>
                <motion.section
                  id="section-3"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-sm opacity-60">03</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <ConstructionWorker height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Construction</p>
                      <p className="text-sm md:text-2xl opacity-60">
                        With approved design, construction starts!
                      </p>
                    </div>
                  </div>
                </motion.section>
                <motion.section
                  id="section-4"
                  className="h-1/4 flex items-center justify-center gap-2 lg:gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-sm opacity-60">04</p>
                  <div className="flex flex-col items-start gap-5 lg:gap-0 justify-center h-full">
                    <Confetti height={48} width={49} />
                    <div className="flex flex-col justify-center items-start h-1/2 w-full md:pb-7">
                      <p className="text-lg font-bold">Celebrate</p>
                      <p className="text-sm md:text-2xl opacity-60">
                        Raise a toast in the backyard of your dreamsl
                      </p>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
