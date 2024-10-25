import { BlogsPageCount } from "@/utils/constants";
import { deleteBlog } from "@/actions/action";

import Link from "next/link";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Pagination from "@/components/pagination/Pagination";
import prisma from "@/lib/db";
import TitleBar from "@/components/title-bar/Title";

type AdminBlogPageType = {
  searchParams?: {
    page?: string;
  };
};

async function AdminBlogPage({ searchParams }: AdminBlogPageType) {
  const blogsCount = await prisma.blog.count();
  const currentPage = Number(searchParams?.page) || 1;

  const blogs = await prisma.blog.findMany({
    take: BlogsPageCount,
    skip: (currentPage - 1) * BlogsPageCount,
  });

  return (
    <PageWrapper>
      <TitleBar className="mb-10" />
      <div className="flex flex-col gap-5 xl:py-6 sm:py-4 py-3">
        <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold">
            All Blogs ({blogsCount})
            </h1>
            <Link href={`/admin/create`} className="border p-1 rounded-md text-blue-500 border-blue-500">
                Create Blog {">>"}
            </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-3">
        {blogs.map(({ id, title, slug }) => (
          <div key={`blogs-${id}`} className="flex flex-row justify-between border p-1 rounded-md">
            <div className="justify-center font-bold flex flex-col select-none uppercase">{title}</div>
            <div className="flex flex-row p-1 justify-between gap-2">
                <Link href={`/admin/update/${slug}`} className="border p-1 rounded-md">
                    ✎ Update Blog
                </Link>
                <form action={deleteBlog}>
                    <button value={id} name="id" type="submit"  className="border-red-500 text-red-500 border p-1 rounded-md">
                        Delete Blog
                    </button>
                </form>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        previousPageActive={currentPage > 1}
        nextPageActive={currentPage < Math.ceil(blogsCount / BlogsPageCount)}
        pageCount={Math.ceil(blogsCount / BlogsPageCount)}
      />
    </PageWrapper>
  );
}

export default AdminBlogPage;
