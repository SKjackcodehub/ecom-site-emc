import React, { useState } from 'react';
import './index.css'

// Data for Products
const data = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
  },
  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
  },
  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
  },

  {
    id: 6,
    name: "IKALL N9",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
  },

  {
    id: 10,
    name: "ZEBRONICS AC32FHD",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
];

const Product = () => {
  const [products, setProducts] = useState(data);
  const [price, setPrice] = useState(Math.max(...data.map((p) => p.amt)));
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterCategory = (category) => {
    if (category === "All") {
      setProducts(data);
    } else {
      setProducts(data.filter((product) => product.catagory === category));
    }
  };

  const handlePriceFilter = (maxPrice) => {
    setPrice(maxPrice);
    setProducts(data.filter((product) => product.amt <= maxPrice));
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value) {
      setProducts(data.filter((product) => product.name.toLowerCase().includes(value)));
    } else {
      setProducts(data);
    }
  };

  const allCategories = ["All", ...new Set(data.map((product) => product.catagory))];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-500 text-white text-center p-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-2 text-lg">This site is for those who admire the innovation and precision of technology.</p>
      </header>

      {/* Main content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-1/4 p-5 bg-white shadow-lg">
          <input
            type="text"
            className="w-full mb-4 p-2 border"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          
          <h3 className="font-semibold mb-2">Category</h3>
          <ul className="mb-4">
            {allCategories.map((category, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-300"
                onClick={() => handleFilterCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="20000"
            value={price}
            className="w-full"
            onChange={(e) => handlePriceFilter(e.target.value)}
          />
          <div className="mt-2">Max Price: Rs. {price}</div>
        </div>

        {/* Product List */}
        <div className="w-3/4 p-5 flex flex-wrap gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="w-60 p-4 bg-white shadow-md rounded-md">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                <h4 className="text-lg font-bold text-red-600">{product.name}</h4>
                <p className="text-blue-600 font-semibold">Rs. {product.amt}</p>
                <p className="text-green-500 text-sm">{product.seller}</p>
              </div>
            ))
          ) : (
            <h3>No Products Available</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
