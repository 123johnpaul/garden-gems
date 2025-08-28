import Image from "next/image";

export default function BlogPostCard({
  imageUrl,
  width,
  height,
  category,
  date,
  title,
  className,
}) {
  return (
    <div className="max-w-md p-4 bg-[#f9f6f1]">
      {/* Image container with blue border */}
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={height}
          className={`w-full object-cover ${className}`}
        />
      <div className="pt-6">
        {/* Meta information: Category and Date */}
        <p className="text-[#141414] opacity-75 text-sm mb-2">
          {category} / {date}
        </p>
        {/* Card Title */}
        <h2 className="text-black text-2xl font-semibold leading-tighter tracking-tighter">
          {title}
        </h2>
      </div>
    </div>
  );
}
