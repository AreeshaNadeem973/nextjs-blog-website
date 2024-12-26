import Link from "next/link";

// components/ExploreWorld.js
const ExploreWorld = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/image/Capture.PNG')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 whitespace-nowrap">
          Explore The World
        </h1>

        {/* Pink underline under "Explore" */}
        <div className="h-1 w-20 bg-pink-500 mt-2 mb-6"></div>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-center max-w-md mb-6">
          The sea of the world now divides the waves, mixed with so much of
          itself. The cloud, with a harmonious wave. It bears these. The
          reckless minds retreat to a place of their own, dimmed by their own
          darkness, lacking.
        </p>

        {/* Button */}
        <Link href="/Services">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600">
            ➡ View Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreWorld;
