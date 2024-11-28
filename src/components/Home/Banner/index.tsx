export default function Banner() {
  return (
    <div className="relative h-[50vh] overflow-hidden py-12">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      ></div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="md:text-4xl  font-extrabold text-3xl">
          Welcome to <span className="text-white">Inspired Events & Tours</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover the best events and tours in the world
        </p>
        <button className="mt-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-80 transition duration-300">
          Explore Trips
        </button>
      </div>
    </div>
  );
}
