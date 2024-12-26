import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[500px] sm:h-screen"
      style={{
        backgroundImage: "url('/image/mountain.PNG')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[500px] sm:h-full px-6 sm:px-8 md:px-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Explore the Colourful World
        </h2>
        <div className="h-1 w-12 sm:w-16 md:w-24 bg-pink-500 mb-4 sm:mb-5"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
          A Wonderful Gift
        </h1>
        <Link href="/Blog">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition duration-300">
          View Blog
        </button>
        </Link>
      </div>
    </section>
  );
}