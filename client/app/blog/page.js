import BlogPostCard from "@/_components/blogPostCard";

// Example static data for latest industry news
const blogPosts = [
	{
		imageUrl: "/assets/commercialServices.jpg",
		width: 600,
		height: 400,
		category: "Industry News",
		date: "September 2025",
		title: "Sustainable Landscaping Trends for 2025",
	},
	{
		imageUrl: "/assets/gardenCleaning.jpg",
		width: 600,
		height: 400,
		category: "Industry News",
		date: "August 2025",
		title: "How Smart Tech is Transforming Gardens",
	},
	{
		imageUrl: "/assets/landscapeDesign.jpg",
		width: 600,
		height: 400,
		category: "Industry News",
		date: "July 2025",
		title: "Top 5 Garden Design Innovations",
	},
];

export default function BlogPage() {
	return (
		<section className="bg-white py-16 px-6 md:px-16 min-h-screen">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Latest News from the Industry
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Stay updated with the latest trends, innovations, and insights in gardening and landscaping.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map((post, idx) => (
						<BlogPostCard key={idx} {...post} />
					))}
				</div>
			</div>
		</section>
	);
}
