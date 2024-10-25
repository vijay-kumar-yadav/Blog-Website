import prisma from "@/lib/db";
import HomeCards from "@/components/cards/HomeCards";
import TitleBar from "@/components/title-bar/Title";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Link from "next/link";

export default async function Home() {
  const blogs = await prisma.blog.findMany({
    take: 4,
  });
  return (
    <PageWrapper>
      <TitleBar />
      <div className="flex flex-col gap-5 xl:py-6 sm:py-4 py-3">
        <h2 className="xl:text-xl sm:text-sm text-xs font-semibold">
          Recent blog posts
        </h2>
        <div className="flex flex-row justify-start gap-3 flex-wrap">
          {blogs.map(({ id, img, title, description, createdAt, slug }) => (
            <HomeCards
              slug={slug}
              key={`image-${id}`}
              img={img as string}
              title={title}
              description={description}
              createdAt={createdAt}
            />
          ))}
        </div>
        <Link
          className="text-gray-900 text-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          href="/blog"
        >
          Read more {'>'}
        </Link>
      </div>
    </PageWrapper>
  );
}
