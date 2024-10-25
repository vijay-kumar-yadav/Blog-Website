import { BlogsPageCount } from '@/utils/constants';

import HomeCards from '@/components/cards/HomeCards';
import PageWrapper from '@/components/page-wrapper/PageWrapper'
import Pagination from '@/components/pagination/Pagination';
import TitleBar from '@/components/title-bar/Title'
import prisma from '@/lib/db';

async function BlogPage({
    searchParams,
  }: {
    searchParams?: {
      page?: string;
    };
  }) {
    const blogsCount = await prisma.blog.count(); 
    const currentPage = Number(searchParams?.page) || 1;

    const blogs = await prisma.blog.findMany({
        take:  BlogsPageCount,
        skip: (currentPage - 1) * BlogsPageCount,
    });

  return (
    <PageWrapper>
        <TitleBar />
        <div className="flex flex-col gap-5 xl:py-6 sm:py-4 py-3">
          <h2 className="xl:text-xl sm:text-sm text-xs font-semibold">
            All Blogs ({blogsCount})
          </h2>
        </div>
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
          <Pagination
            currentPage={currentPage}
            previousPageActive={currentPage > 1}
            nextPageActive={currentPage < Math.ceil(blogsCount / BlogsPageCount)}
            pageCount={Math.ceil(blogsCount / BlogsPageCount)}
          />
    </PageWrapper>
  )
}

export default BlogPage