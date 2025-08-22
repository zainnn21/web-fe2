import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string; // Prop opsional untuk kustomisasi style dari luar
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  // Jangan render komponen jika hanya ada 1 halaman atau kurang
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex justify-end gap-1.5 mt-4 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-[#F4F5FA] border border-[#3A35411F] rounded-sm disabled:opacity-50 w-10 h-10 cursor-pointer"
        aria-label="Go to previous page"
      >
        &lt;
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`p-2  rounded-sm font-semibold w-10 h-10 cursor-pointer ${
            currentPage === number
              ? "bg-[#FFBD3A] text-white border-[#FFBD3A]"
              : ""
          }`}
          aria-current={currentPage === number ? "page" : undefined}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-[#F4F5FA] border border-[#3A35411F] rounded-sm disabled:opacity-50 w-10 h-10 cursor-pointer"
        aria-label="Go to next page"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
