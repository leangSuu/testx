import React from "react";

export default function Bestseller() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[40px] font-bold">Bestsellers</h1>
        <p className="md:text-[20px] lg:text-[25px] w-[60%]  text-center flex">
          From cult-favorite jackets to must-have dresses – These are our
          customer faves.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-2 mt-10 md:grid-cols-3">
        <div className="my-3 ">
          <div>
            <img
              src="public/card/card5.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="pt-3 ">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="mt-2 text-gray-600">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="px-2 py-1 border-2 rounded-md">M</li>
            <li className="px-2 py-1 border-2 rounded-md">L</li>
            <li className="px-2 py-1 border-2 rounded-md">XL</li>
          </ul>
        </div>
        <div className="my-3 ">
          <div>
            <img
              src="public/card/card6.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="pt-3 ">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="mt-2 text-gray-600">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="px-2 py-1 border-2 rounded-md">M</li>
            <li className="px-2 py-1 border-2 rounded-md">L</li>
            <li className="px-2 py-1 border-2 rounded-md">XL</li>
          </ul>
        </div>
        <div className="my-3">
          <div>
            <img
              src="public/card/card7.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="pt-3 ">
            <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
            <p className="mt-2 text-gray-600">woman</p>
            <p className="text-sm font-bold text-green-600">
              $200.00 - $ 300.00
            </p>
          </div>
          <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
            <li className="px-2 py-1 border-2 rounded-md">M</li>
            <li className="px-2 py-1 border-2 rounded-md">L</li>
            <li className="px-2 py-1 border-2 rounded-md">XL</li>
          </ul>
        </div>
      </div>
    </>
  );
}