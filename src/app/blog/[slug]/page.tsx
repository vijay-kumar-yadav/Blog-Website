import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import TitleBar from "@/components/title-bar/Title";
import prisma from "@/lib/db";
import { formattedDate } from "@/utils";
import { unstable_cache as cache } from "next/cache";
import React from "react";

type IndividualBlogPageType = {
  params: {
    slug: string;
  };
};

const getCachedBlog = cache((slug) => {
  return prisma.blog.findUnique({
    where: {
      slug,
    },
  });
})

async function IndividualBlogPage({ params }: IndividualBlogPageType) {
  const blogContent = await getCachedBlog(params.slug);

  return (
    <PageWrapper>
      <TitleBar />
      <div className="flex flex-col pt-4">
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-gray-900 dark:text-gray-100">
          {blogContent?.title.toLocaleUpperCase()}
        </h2>
        <h3 className="text-sm text-gray-600 dark:text-gray-400">
          {formattedDate(blogContent?.createdAt as Date)}
        </h3>
      </div>

      <div className="pt-3">
        <MarkdownRenderer>{JSON.parse(blogContent?.content ?? '')}</MarkdownRenderer>
      </div>
    </PageWrapper>
  );
}

export default IndividualBlogPage;
