// components/TransformationDisplay.jsx

import Image from "next/image";
import  SpiralArrow  from "./spiralArrow"; // Assuming SpiralArrow is in a separate file
import gardenBefore from "@/public/assets/gardenBefore.jpg";
import gardenAfter from "@/public/assets/gardenAfter.jpg";
import backyardBefore from "@/public/assets/backyardBefore.jpg";
import backyardAfter from "@/public/assets/backyardAfter.jpg";

const TransformationCard = ({ beforeSrc, afterSrc, beforeAlt, afterAlt }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
      {/* Before Image */}
      <div className="flex-1 text-center">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          className="w-full h-auto rounded-lg"
          width={400} // Add appropriate base widths/heights for optimization
          height={300}
        />
        <p className="font-semibold mt-2">Before</p>
      </div>

      {/* Responsive Arrow */}
      <div className="flex-shrink-0">
        <SpiralArrow className="w-24 h-24 text-gray-700 rotate-90 md:rotate-0" />
      </div>

      {/* After Image */}
      <div className="flex-1 text-center">
        <Image
          src={afterSrc}
          alt={afterAlt}
          className="w-full h-auto rounded-lg"
          width={400}
          height={300}
        />
        <p className="font-semibold mt-2">After</p>
      </div>
    </div>
  );
};

export const Transformations = () => {
  // Dummy image sources - replace with your actual imports
//   const gardenBefore = "/@/public/assets/gardenBefore.jpg";
//   const gardenAfter = "/../public/assets/gardenAfter.jpg";
//   const backyardBefore = "/../public/assets/backyardBefore.jpg";
//   const backyardAfter = "/../public/assets/backyardAfter.jpg";

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TransformationCard
          beforeSrc={gardenBefore}
          afterSrc={gardenAfter}
          beforeAlt="A Garden Before Landscape Design Transformation"
          afterAlt="A Garden After Landscape Design Transformation"
        />
        <TransformationCard
          beforeSrc={backyardBefore}
          afterSrc={backyardAfter}
          beforeAlt="A Backyard Before Landscape Design Transformation"
          afterAlt="A Backyard After Landscape Design Transformation"
        />
      </div>
    </div>
  );
};