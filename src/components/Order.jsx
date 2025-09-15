import { FaInstagram } from "react-icons/fa";

export default function Order() {
  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Get 10% Off on Your First Order
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Plus exclusive access to product drops, style tips, and insider deals.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <input
          type="email"
          aria-label="Enter your email"
          placeholder="ENTER YOUR EMAIL *"
          className="w-2/3 px-4 py-2 border border-gray-300 md:w-1/3 rounded-l-md focus:outline-none"
        />
        <button
          aria-label="Subscribe"
          className="px-6 py-2 text-white bg-red-500 rounded-r-md hover:bg-red-600"
        >
          SUBSCRIBE
        </button>
      </div>
      <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        <img
          src="/card/card.png"
          alt="fashion1"
          className="object-cover w-full h-auto rounded-md"
        />
        <img
          src="/card/Order2.png"
          alt="fashion2"
          className="object-cover w-full h-auto rounded-md"
        />
        <img
          src="/card/Order3.png"
          alt="fashion3"
          className="object-cover w-full h-auto rounded-md"
        />
        <img
          src="/card/Order4.png"
          alt="fashion4"
          className="object-cover w-full h-auto rounded-md"
        />
      </div>
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-pink-600">
          <FaInstagram size={20} />
          <a href="" className="font-semibold">
            @morgan
          </a>
        </div>
        <p className="mt-2 text-gray-700">Follow us on Instagram</p>
      </div>
    </div>
  );
}