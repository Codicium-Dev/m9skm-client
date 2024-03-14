// components/Pagination.ts
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, currentPage, onPageChange }: any) => {
  const handleFirstPageClick = () => {
    onPageChange(0);
  };

  const handleLastPageClick = () => {
    onPageChange(pageCount - 1);
  };

  const handlePageItemClick = (page: any) => {
    onPageChange(page);
  };

  return (
    <div className="pagination flex gap-3 justify-center pb-20 select-none">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        onPageChange={({ selected }) => onPageChange(selected)}
        containerClassName={"pagination__list flex gap-3 items-center"}
        pageLinkClassName={"px-[9px] py-2 border border-black rounded-md"}
        activeLinkClassName={"bg-black text-white"}
        previousLinkClassName={
          "px-3 py-[6.5px] border border-black rounded-md text-white font-semibold text-lg"
        }
        nextLinkClassName={
          "px-3 py-[6.5px] border border-black rounded-md text-white font-semibold text-lg"
        }
        previousLabel="<"
        nextLabel=">"
        breakClassName="px-3 py-[5.5px] border border-black rounded-md"
        activeClassName={"active"}
      />
      {/* <div className="pagination__additional flex red">
        {Array.from(
          { length: Math.min(pageCount, 3) },
          (_, index) => index
        ).map((page) => (
          <button
            key={page}
            onClick={() => handlePageItemClick(page)}
            className=""
          >
            {page + 1}
          </button>
        ))}
        {pageCount > 3 && currentPage >= 2 && <span>...</span>}
        {Array.from(
          { length: Math.min(pageCount - Math.max(pageCount - 3, 0), 3) },
          (_, index) => pageCount - 3 + index
        ).map((page) => (
          <button
            key={page}
            onClick={() => handlePageItemClick(page)}
            className=""
          >
            {page + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Pagination;
