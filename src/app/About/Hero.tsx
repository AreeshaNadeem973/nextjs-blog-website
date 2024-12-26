export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[500px] sm:min-h-screen"
      style={{
        backgroundImage: "url('/image/Greenry.PNG')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[500px] sm:min-h-screen px-6 sm:px-8 md:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
          Who We Are?
        </h1>
      </div>
    </section>
  );
}