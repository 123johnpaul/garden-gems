"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

// Import project images
import royalPerkResidence from "@/public/assets/royalPerkResidence.jpg";
import edenGardenResort from "@/public/assets/edenGardenResort.jpg";
import coxdaLandscapeProject from "@/public/assets/coxdaLandscapeProject.jpg";
import inaugurationProject from "@/public/assets/inaugurationProject.jpg";
import residentialGarden from "@/public/assets/residentialGarden.jpg";
import gardenConstruction from "@/public/assets/gardenConstruction.jpg";
import landscapeDesign from "@/public/assets/landscapeDesign.jpg";
import commercialServices from "@/public/assets/commercialServices.jpg";
import gardenCleaning from "@/public/assets/gardenCleaning.jpeg";
import manWateringGarden from "@/public/assets/manWateringGarden.jpg";
import peopleInGarden from "@/public/assets/peopleInGarden.jpg";
import gardenAfter from "@/public/assets/gardenAfter.jpg";
import backyardAfter from "@/public/assets/backyardAfter.jpg";
import manHoldingPlant from "@/public/assets/manHoldingPlant.jpg";
import Link from "next/link";

// Project data
const projects = [
  {
    id: 1,
    title: "The Royal Perk Residence",
    category: "Hotel",
    image: royalPerkResidence,
    description: "Luxury hotel landscaping with pristine gardens and elegant outdoor spaces that create an unforgettable guest experience.",
    size: "large",
    tags: ["Luxury", "Hotel", "Premium"],
  },
  {
    id: 2,
    title: "Eden Garden Resort",
    category: "Water & Pools",
    image: edenGardenResort,
    description: "Resort-style water features and pool landscaping design with tropical aesthetics.",
    size: "medium",
    tags: ["Resort", "Water Features", "Tropical"],
  },
  {
    id: 3,
    title: "Coxda Landscape Project",
    category: "Residential",
    image: coxdaLandscapeProject,
    description: "Modern residential landscape transformation with contemporary design elements and sustainable practices.",
    size: "medium",
    tags: ["Modern", "Sustainable", "Contemporary"],
  },
  {
    id: 4,
    title: "Inauguration Project",
    category: "Outdoor Lighting",
    image: inaugurationProject,
    description: "Spectacular outdoor lighting installation for special events and ceremonies with dramatic visual impact.",
    size: "large",
    tags: ["Events", "Lighting", "Dramatic"],
  },
  {
    id: 5,
    title: "Residential Garden Oasis",
    category: "Residential",
    image: residentialGarden,
    description: "Beautiful residential garden with lush plantings and natural pathways creating a private sanctuary.",
    size: "small",
    tags: ["Natural", "Private", "Lush"],
  },
  {
    id: 6,
    title: "Garden Construction Excellence",
    category: "Construction",
    image: gardenConstruction,
    description: "Professional garden construction and hardscaping services with attention to detail and quality.",
    size: "small",
    tags: ["Professional", "Quality", "Hardscape"],
  },
  {
    id: 7,
    title: "Landscape Design Mastery",
    category: "Design",
    image: landscapeDesign,
    description: "Award-winning landscape design showcasing creative outdoor solutions and innovative concepts.",
    size: "medium",
    tags: ["Award-winning", "Creative", "Innovation"],
  },
  {
    id: 8,
    title: "Commercial Landscape Services",
    category: "Commercial",
    image: commercialServices,
    description: "Professional commercial landscaping for business properties enhancing corporate environments.",
    size: "small",
    tags: ["Corporate", "Professional", "Business"],
  },
  {
    id: 9,
    title: "Garden Maintenance & Care",
    category: "Maintenance",
    image: gardenCleaning,
    description: "Comprehensive garden cleaning and maintenance services ensuring year-round beauty.",
    size: "small",
    tags: ["Maintenance", "Year-round", "Care"],
  },
  {
    id: 10,
    title: "Irrigation & Water Management",
    category: "Water Systems",
    image: manWateringGarden,
    description: "Advanced irrigation systems and water management solutions for optimal plant health.",
    size: "medium",
    tags: ["Technology", "Irrigation", "Efficiency"],
  },
  {
    id: 11,
    title: "Community Garden Project",
    category: "Community",
    image: peopleInGarden,
    description: "Community-focused garden projects bringing people together through nature and shared spaces.",
    size: "large",
    tags: ["Community", "Social", "Shared"],
  },
  {
    id: 12,
    title: "Garden Transformation",
    category: "Renovation",
    image: gardenAfter,
    description: "Complete garden transformation showcasing our renovation expertise and creative vision.",
    size: "small",
    tags: ["Transformation", "Renovation", "Vision"],
  },
  {
    id: 13,
    title: "Natural Garden Care",
    category: "Maintenance",
    image: manHoldingPlant,
    description: "Expert plant care and nurturing services ensuring healthy, thriving garden ecosystems.",
    size: "small",
    tags: ["Expert Care", "Natural", "Ecosystem"],
  },
  {
    id: 14,
    title: "Backyard Paradise",
    category: "Residential",
    image: backyardAfter,
    description: "Stunning backyard transformation creating a personal paradise for family enjoyment.",
    size: "medium",
    tags: ["Family", "Paradise", "Transformation"],
  },
  
];

// Project Card Component with Advanced Animations
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const getGridClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-1";
      case "small":
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 ${getGridClass(project.size)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="relative h-full w-full cursor-pointer overflow-hidden"
      >
        {/* Image with parallax effect */}
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={index < 4}
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.7 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4 md:p-6"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Badge */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-[#0C7769] text-white rounded-full uppercase tracking-wide w-fit"
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white leading-tight"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm text-white/90 leading-relaxed mb-3 line-clamp-3"
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Hover Effect Border */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-[#0C7769] rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ["All", "Residential", "Commercial", "Hotel", "Water & Pools", "Design", "Construction", "Maintenance"];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-white to-[#F5F1E8]">
      <section className="w-full bg-[#0C7769] text-white py-16 md:py-24 px-6 md:px-12">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
							Featured Projects
						</h1>
						<p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-8">
							Discover our portfolio of landscape transformations across hospitality, residential, 
							and commercial spaces. Each project represents our commitment to sustainable design 
							and exceptional craftsmanship.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link
								href="/schedule-consultation"
								className="inline-block px-8 py-3 bg-white text-[#0C7769] font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
							>
								Start Your Project
							</Link>
							<Link
								href="/services"
								className="inline-block px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-200"
							>
								View Services
							</Link>
						</div>
					</motion.div>
				</div>
			</section>


      {/* Filter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-12 md:py-16 px-4 bg-[#FAF7F2]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C7769] mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Filter projects by type to find inspiration for your specific needs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-[#0C7769] text-white shadow-md"
                    : "bg-transparent hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Project Count */}
          <motion.div
            key={filteredProjects.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <span className="text-gray-500 text-sm">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0C7769] text-white py-16 md:py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "150+", label: "Projects Completed", subtitle: "Successful Deliveries" },
              { number: "98%", label: "Client Satisfaction", subtitle: "Happy Customers" },
              { number: "25+", label: "Industry Awards", subtitle: "Recognition Earned" },
              { number: "15+", label: "Years Experience", subtitle: "Professional Expertise" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group p-6 md:p-8 text-center"
              >
                <div className="mb-4">
                  <div className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-white/90 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.subtitle}
                  </div>
                </div>
                <div className="w-12 h-0.5 bg-white/30 mx-auto group-hover:bg-white/60 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0C7769]">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your outdoor space with our expert landscaping services. 
            Contact us today for a consultation and let&apos;s bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule-consultation">
              <button className="px-8 py-3 bg-[#0C7769] text-white font-semibold rounded-lg hover:bg-[#0a6b5f] transition-colors duration-200">
                Schedule a Consultation
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-3 border-2 border-[#0C7769] text-[#0C7769] font-semibold rounded-lg hover:bg-[#0C7769] hover:text-white transition-all duration-200">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
