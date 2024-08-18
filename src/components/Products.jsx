import React, { useState } from 'react';
import data from './data';
import User from './User';

function Products() {
    const [searchProduct, setSearchProduct] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleSearchChange = (e) => {
        setSearchProduct(e.target.value);
        setCurrentPage(1); // Reset to first page when search changes
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className="sticky top-0 z-10 bg-white">
                <User />
                <div className='flex justify-center py-4'>
                    <input
                        type="text"
                        placeholder="Search Products Here..."
                        value={searchProduct}
                        onChange={handleSearchChange}
                        className="w-6/12 mb-5 p-2 border rounded"
                    />
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap content-center">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-contain object-center w-full h-full block bg-grey-400 rounded-[20px] border-4" src={product.thumbnail} />
                                    <span className="absolute bottom-5 right-5 bg-red-500 text-white text-xs font-bold px-3 py-2 transform rotate-[320deg] cursor-pointer">$ {product.price}</span>
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg text-center font-medium">{product.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 px-4 py-3 sm:px-6">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</span> of <span className="font-medium">{filteredProducts.length}</span> results
                    </div>
                    <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Products;
