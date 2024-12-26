import Image from "next/image";

// Assuming these images are placed in the 'public/images' folder
export default function ToursSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Tours & Destination
            </h2>
            {/* Pink underline under "Explore" */}
            <div className="h-1 w-20 bg-pink-500 mt-2 mb-6"></div>

            <p className="text-gray-600 mb-6 max-w-lg">
              Discover exciting new destinations and tours tailored to every
              adventure seeker. From breathtaking landscapes to cultural
              experiences, our upcoming tours offer unforgettable journeys for
              all types of travelers.
            </p>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2 hover:shadow-lg">
              <Image
                src="/image/ice1.jpg"
                alt="Skiing"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2 hover:shadow-lg">
              <Image
                src="/image/ice2.jpg"
                alt="Skiing 2"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2 hover:shadow-lg">
              <Image
                src="/image/ice3.jpg"
                alt="Biking"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2 hover:shadow-lg">
              <Image
                src="/image/ice4.jpg"
                alt="Hiking"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
