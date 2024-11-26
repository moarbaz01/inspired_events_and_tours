import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="relative flex items-center justify-center h-[70vh]">
      <Image
        layout="fill"
        alt="Top Banner"
        objectFit="cover"
        src="/images/slider4.jpg"
      />
      <div className="absolute text-white text-center flex flex-col items-center justify-center gap-2 font-bold z-10 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">
          Welcome to Your Dream Vacation
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Explore the best destinations around the world
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
