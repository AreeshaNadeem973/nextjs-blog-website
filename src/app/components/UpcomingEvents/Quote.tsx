"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Import arrow icon
import Link from "next/link";

export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center bg-white relative py-12 mt-0">
      {/* Quote Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl text-center relative mb-8">
        <div className="flex justify-start ml-4">
          <Image
            src="/image/quote.png"
            alt="Quote Icon"
            width={50}
            height={50}
            className="opacity-20 filter invert"
          />
        </div>
        <p className="text-xl italic text-pink-500 ml-16">
          &quot;It had been lacking in heat, having those things watch the
          thunder, you placed them in a more liberated place.&quot;
        </p>
        <p className="text-pink-500 mt-2">- Adam Sendler</p>
      </div>

      {/* Upcoming Events Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4">
        {/* Event 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:duration-200">
          <Image
            src="/image/hiking.jpg"
            alt="Everest Camp"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Everest Camp Trek</h3>
            <p className="text-gray-500 mb-4">
              Embark on the adventure of a lifetime with the Everest Base Camp
              Trek, where you&apos;ll witness breathtaking views of the
              world&apos;s highest peak. Explore vibrant Sherpa villages,
              ancient monasteries, and the stunning beauty of the Himalayas on
              this unforgettable journey.
            </p>
            <div className="text-center mt-8">
              <Link href="/Everest">
                <button className="bg-pink-500 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-pink-600 transition-all duration-300">
                  <ArrowRightIcon className="h-5 w-5" /> {/* Arrow Icon */}
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:duration-200">
          <Image
            src="/image/walking.jpg"
            alt="Walking Holidays"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Walking Holidays</h3>
            <p className="text-gray-500 mb-4">
              Join us for a unique experience where you can explore scenic
              landscapes on foot. Whether through quiet villages or breathtaking
              natural beauty, each step is an adventure.
            </p>
            <Link href="/Walking">
              <button className="bg-pink-500 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-pink-600 transition-all duration-300">
                <ArrowRightIcon className="h-5 w-5" /> {/* Arrow Icon */}
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
