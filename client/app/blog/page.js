import BlogPostCard from "@/_components/blog/BlogPostCard";

// Example static data for latest industry news
const blogPosts = [
	{
		imageUrl: "/assets/manMowingLawn.jpg",
		width: 600,
		height: 400,
		category: "Garden",
		date: "September 17, 2025",
		title: "Landscaping in A Post-Pandemic World",
		pageUrl: "/blog/landscaping-in-a-post-pandemic-world",
	},
	{
		imageUrl: "/assets/manWateringGarden.jpg",
		width: 600,
		height: 400,
		category: "Garden",
		date: "September 17, 2025",
		title: "Which one is best for your yard?",
		pageUrl: "/blog/which-one-is-best-for-your-yard",
	},
	{
		imageUrl: "/assets/womanInGarden.jpg",
		width: 600,
		height: 400,
		category: "Garden",
		date: "September 17, 2025",
		title: "5 Fall Yard Care & Maintenance Tips",
		pageUrl: "/blog/5-fall-yard-care-and-maintenance-tips",
	},
	{
		imageUrl: "/assets/plants.jpg",
		width: 600,
		height: 400,
		category: "Garden",
		date: "September 17, 2025",
		title: "5 Steps to Design The Yard of Your Dreams",
		pageUrl: "/blog/5-steps-to-design-the-yard-of-your-dreams",
	},
];

export default function BlogPage() {
	return (
		<section className="bg-[#FAF7F2] py-16 px-6 md:px-16 min-h-screen">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Latest News from the Industry
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Stay updated with the latest trends, innovations, and insights in gardening and landscaping.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-rows-2">
					{blogPosts.map((post, index) => (
						<BlogPostCard key={index} {...post} />
					))}
				</div>
				</div>
			</div>
		</section>
	);
}
