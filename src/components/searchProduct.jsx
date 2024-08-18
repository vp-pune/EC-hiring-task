import React from 'react'
import data from './data';
function searchProduct() {
    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div>
            <div className="container px-5 py-24 mx-auto">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="mb-4 p-2 border rounded"
                />
            </div>
        </div>
    )
}

export default searchProduct