
'use client'; 

import { useState, useEffect } from 'react'; 

export default function PaginationControls({ totalItems, itemsPerPage, onPageChange, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage); 
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      onPageChange(nextPage); 
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      onPageChange(prevPage); 
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber); 
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm">
      <div className="text-gray-600 mb-4 sm:mb-0">
        Halaman <span className="font-semibold">{currentPage}</span> dari <span className="font-semibold">{totalPages}</span> halaman
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <div className="hidden sm:flex space-x-1"> 
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`px-3 py-1 rounded-md font-medium ${
                currentPage === number
                  ? 'bg-[var(--primary-teal)] text-[var(--text-white)]'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}