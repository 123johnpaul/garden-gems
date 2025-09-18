import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({
  imageUrl,
  width,
  height,
  category,
  date,
  title,
  className,
  pageUrl,
}) {
  return (
    <div className="p-4">
      {/* Image container with blue border */}
      <Link href={pageUrl}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={500}
          className={`object-cover h-3/4 ${className}`}
        />
      <div className="pt-6 h-1/4">
        {/* Meta information: Category and Date */}
        <p className="text-[#141414] opacity-75 text-sm mb-2">
          {category} / {date}
        </p>
        {/* Card Title */}
        <h2 className="text-black text-2xl font-semibold leading-tighter tracking-tighter">
          {title}
        </h2>
      </div>
      </Link>
    </div>
  );
}
