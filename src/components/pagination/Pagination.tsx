'use client';

import React, { useCallback } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationType = {
    currentPage: number;
    previousPageActive: boolean;
    nextPageActive: boolean;
    pageCount: number;
}
function Pagination({ currentPage, previousPageActive, nextPageActive, pageCount }: PaginationType) {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return (params.toString());
    },
    [searchParams]
  )

  if (pageCount === 1) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-5">
      <nav
        className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
        aria-label="Pagination"
      >
        <button
          className="flex cursor-pointer w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          title="Previous Page"
          onClick={() => {
            router.push(pathname + '?' + createQueryString('page', String(currentPage - 1)))
          }}
          disabled={!previousPageActive}
        >
          <span className="sr-only">Previous Page</span>
          <ArrowLeft />
        </button>
        <div
          className="hidden cursor-none md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          title={`Page ${currentPage}`}
        >
          {currentPage}
        </div>
        <button
          className="flex w-10 cursor-pointer h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300"
          title="Next Page"
          onClick={() => {
            router.push(pathname + '?' + createQueryString('page', String(currentPage + 1)))
          }}
          disabled={!nextPageActive}
        >
          <span className="sr-only">Next Page</span>
          <ArrowRight />
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
