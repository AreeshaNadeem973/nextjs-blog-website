import Image from "next/image";
import Hero from "./Hero"; // Import Hero component

export default function Adventures() {
  return (
    <div>
      {" "}
      {/* Wrap everything in a parent div */}
      <section className="py-0 bg-white">
        {/* Add the Hero component at the top */}
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 mt-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-20">
              It&apos;s Time to Start Your Adventures{" "}
              {/* Escape the apostrophe here */}
            </h2>
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-pink-500 mx-auto mb-4 sm:mb-5"></div>
            <p className="mt-4 text-gray-500">
              It&apos;s time to step out and embrace new experiences.
            </p>
            <p className="mt-4 text-gray-500">
              The world is full of opportunities waiting for you to explore!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="text-center animate-slideUp p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src="/image/outdoor-image-03.jpg"
                  alt="Backpacking Trips"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6">Backpacking Trips</h3>
              <p className="mt-2 text-gray-500">
                Embarking on backpacking trips provides the perfect blend of
                adventure and exploration, allowing you to connect with nature
                while discovering new places
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center animate-slideUp p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src="/image/services-2.jpg"
                  alt="Family Hiking Trips"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6">
                Family Hiking Trips
              </h3>
              <p className="mt-2 text-gray-500">
                Family hiking trips provide the perfect opportunity to create
                lasting memories, fostering strong bonds while exploring the
                beauty of nature together.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center animate-slideUp p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src="/image/services-3.jpg"
                  alt="Water Sports"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6">Water Sports</h3>
              <p className="mt-2 text-gray-500">
                Engaging in water sports provides an exciting way to stay active
                and enjoy the thrill of the water, whether youare surfing,
                kayaking, or diving into new adventures..
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center animate-slideUp p-4 border border-gray-200 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src="/image/outdoor-image-01.jpg"
                  alt="Winter Sports"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6">Winter Sports</h3>
              <p className="mt-2 text-gray-500">
                Winter sports offer an exhilarating way to embrace the cold,
                whether youare skiing, snowboarding, or ice skating in the
                winter wonderland.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Why Outdoor Adventure
              </h2>
              <p className="text-gray-600 mb-6">
                It offers the chance to disconnect from daily life, embrace
                nature, and push your limits while discovering new landscapes
                and experiences.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Experience:</strong> Adventure, Growth, Discovery
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Reputation:</strong> Trust, Excellence, Integrity
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Guide Experience:</strong> Knowledgeable,
                    Supportive, Professional mutastis
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">What You Get</h2>
              <p className="text-gray-600 mb-6">
                Unforgettable experiences, personal growth, and a strong
                community, all while exploring safely and sustainably.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Private Hike:</strong> Exclusive, Scenic,
                    Personalized
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Transportation:</strong> Comfortable, Convenient,
                    Reliable
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">—</span>
                  <p className="text-gray-700">
                    <strong>Great Facilities:</strong> Modern, Accessible,
                    Well-equipped
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
