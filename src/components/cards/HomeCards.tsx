import { formattedDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type HomeCardsType = {
  slug: string;
  img: string;
  title: string;
  description: string;
  createdAt: Date;
};

function HomeCards({ slug, img, title, description, createdAt }: HomeCardsType) {

  const createdAtDate = useMemo(() => formattedDate(createdAt), [createdAt]);

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col sm:flex-row gap-5 p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 w-full border-gray-200 dark:border-gray-700"
    >
      <div className="flex-shrink-0 w-full sm:w-1/3">
        <Image
          width={400}
          height={200}
          src={img}
          alt={slug}
          className="rounded w-full h-auto"
        />
      </div>
      <div className="flex-grow text-wrap">
        <h4 className="text-lg font-semibold capitalize text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="text-gray-500 text-xs dark:text-gray-400">
          {createdAtDate}
        </p>
        <p className="text-gray-600 text-sm capitalize line-clamp-3 mt-2 dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default HomeCards;
