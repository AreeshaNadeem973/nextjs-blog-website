import Image from "next/image";
import Hero from "./Hero";

export default function ToursSection() {
  return (
    <div>
      {/* Adding Hero component above the ToursSection */}
      <Hero />
      {/* Reduce space between Hero and Our Mission */}
      <div className="bg-gray-100 py-4 flex items-center justify-center">
        {" "}
        {/* Reduced padding here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-20">
                Our Mission
              </h2>
              {/* Pink underline under "Explore" */}
              <div className="h-1 w-20 bg-pink-500 mt-2 mb-6"></div>

              {/* Wrapping paragraphs in a div to control width */}
              <div className="max-w-prose text-gray-600 mb-6">
                <p className="mb-6 ">
                  Outdoor adventure is an exciting and thrilling activity that
                  connects people with nature. Its goal is to challenge personal
                  limits through physical fitness, mental well-being, and
                  exploration. Our mission is to provide people with safe and
                  enjoyable outdoor experiences, allowing them to explore their
                  adventurous spirit.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-start">
              <div className="overflow-hidden rounded-lg w-full transition-transform transform hover:scale-105 hover:translate-x-4 hover:translate-y-4 duration-300 ease-in-out">
                <Image
                  src="/image/outdoor-image-02.jpg"
                  alt="Skiing"
                  width={700} // Increase width
                  height={400} // Increase height
                  className="object-cover w-full h-full mt-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Adjusting space between the two sections */}
      <div className="bg-gray-100 py-8">
        {" "}
        {/* Increased padding here for bottom space */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-20">
              Extraordinary Experiences
            </h2>
            <div className="border-b-4 border-pink-500 w-12 mb-4"></div>
            <p className="text-gray-600 mb-4">
              Offering thrilling outdoor adventures that connect you with nature
              and challenge your limits.
            </p>
            <p className="text-gray-600">
              Expertly guided trips in unique locations, ensuring unforgettable
              and sustainable experiences.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-20">
              Our Core Values
            </h2>
            <div className="border-b-4 border-pink-500 w-12 mb-4"></div>
            <p className="text-gray-600 mb-4">
              We embrace exploration, respect for nature, and challenges that
              push us to grow, while fostering a supportive community. Our
              values prioritize safety, sustainability, and finding joy in every
              moment of the adventure.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">-</span> 
                Embrace adventure and discover new horizons.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">-</span>
                Honor nature and fellow adventurers.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 font-bold mr-2">-</span>
                Prioritize preparation and well-being.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Adding more bottom space */}
      <div className="py-8"></div>{" "}
      {/* This div adds some padding at the bottom */}
    </div>
  );
}
