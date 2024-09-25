import React, { useState } from 'react';
import './App.css'
import './index.css'
const Front = () => {
  const handleMenuToggle = () => {
    const sidenav = document.getElementById('sidenav');
    sidenav.classList.toggle('hidden');
    sidenav.classList.toggle('right-0');
};

  return (
   
    <section>
    <div>
      {/* Responsive Nav bar */}
      <nav className="bg-purple-400 p-3 flex items-center justify-between shadow-xl sticky top-0 z-10">
                <h1 className="text-2xl">VibeCart</h1>

                <svg onClick={handleMenuToggle} id="menuicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <ul className="flex gap-5 text-gray-600 hid md:flex">
                    <li><a className="hover:underline hover:text-black" href="#">Home</a></li>
                    <li><a className="hover:underline hover:text-black" href="product.html">Products</a></li>
                    <li><a className="hover:underline hover:text-black" href="contact.html">Payment</a></li>
                </ul>
            </nav>

            {/* Side navbar */}
            <section id="sidenav" className="bg-green-100 fixed z-20 top-0 transition-all duration-1000 w-1/2 h-screen hidden right-[-50%]">
                <div className="text-right p-5">
                    <p onClick={handleMenuToggle} id="closenav" className="inline cursor-pointer">X</p>
                </div>
                <ul className="flex flex-col gap-10 items-center text-gray-600">
                    <li><a className="hover:underline hover:text-black" href="#">Home</a></li>
                    <li><a className="hover:underline hover:text-black" href="product.html">Products</a></li>
                    <li><a className="hover:underline hover:text-black" href="contact.html">Contact</a></li>
                </ul>
            </section>
      

      {/* Header section */}
      <div className="bg-purple-200 p-4 flex justify-center md:p-10 text-2xl">
        <div>
          <p className="mb-4 text-center text-purple-500">We’re thrilled to have you here! At VibeCart, </p>
          <div className="text-center p-2  text-purple-500">
  <p>We believe that shopping for tech should be a delightful experience.</p>
 
</div>

            
          {/* <h2 className="font-bold text-3xl md:text-5xl mb-5">Plants for Your Interior</h2> */}
          <div>
            {/* <button className="bg-black rounded p-2 text-white">Shop Now</button> */}
          </div>
          {/* <p className="mt-5">160+ Plant Species | 100+ Clients</p> */}
        </div>
      </div>

      {/* About section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 text-purple-400">About Us</h1>
        <p>This site is for those who admire the innovation and precision of technology</p>
        <div className="md:flex">
          <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>

            <h2 className="text-xl font-medium">Larger Assortment</h2>
            <p>Discover a larger assortment of the latest tech products, carefully curated to meet all your needs. From gadgets to accessories, we offer a wide range to help you stay ahead in technology.</p>
          </div>
          <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 inline"
            >
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
              
            </svg>

            <h2 className="text-xl font-medium">Free and Fast Shipping</h2>
            <p>Enjoy free shipping on all orders, ensuring you get your tech essentials without added costs. Our fast shipping guarantees that your items arrive at your doorstep in no time!</p>
          </div>
         <div className="border border-black p-2 m-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>

            <h2 className="text-xl font-medium">24/7 Support</h2>
            <p>Our dedicated support team is available 24/7 to assist you with any inquiries or issues. Experience peace of mind knowing help is just a click away, any time of day.</p>
          </div>
        </div>
      </div>

      {/* Best Seller */}
      <div className="p-4 text-center">
        <h1 className="font-bold mt-5 text-3xl text-purple-400">Best Seller</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
          <div>
            <img src="https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg"  className="w-64 h-64 inline hover:shadow-xl transform hover:-translate-y-2" />
            <h1>Fire Boltt Ninja 2</h1>
       </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg"  className="w-64 h-64 inline hover:shadow-xl transform hover:-translate-y-2" />
            <h1>Lenovo Tab M8</h1>
           
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg" className=" w-64 h-64 inline hover:shadow-xl transform hover:-translate-y-2" />
            <h1>IKALL N9</h1>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg" className=" w-64 h-64 inline hover:shadow-xl transform hover:-translate-y-2" />
            <h1>ZEBRONICS AC32FHD</h1>
          </div>
          
        </div>
      </div>

      

      
      {/* Footer Session */}
      <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Products</h3>
            <ul>
              <li><a href="#" className="hover:underline">HeadSet</a></li>
              <li><a href="#" className="hover:underline">BuleTooth</a></li>
              <li><a href="#" className="hover:underline">Laptop</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Mobile Phones</a></li>


            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">VibeCart</h3>
            <ul>
              <li><a href="#" className="hover:underline">Who we are</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Warranty</a></li>
              <li><a href="#" className="hover:underline">Secure Payments</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Find a store</h3>
            <p className="mb-4">Sign up for our newsletter</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 rounded-l-md border border-gray-300"
                required
              />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-500">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 VibeCart, Inc. All rights reserved.
        </div>
      </div>
    </footer>
    
    </div>
    </section>
  );
};


export default Front;
