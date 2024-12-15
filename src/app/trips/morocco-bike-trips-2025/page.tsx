import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "Morocco Overland Motorcycle Trip",
    startDate: "13th November 2025",
    endDate: "26th November 2025",
    location: "Morocco",
    description:
      "Our road trip of a lifetime starts with us meeting at 8pm on Thursday 11th October at the port of Portsmouth to board...",
    link: "/trips/morocco-bike-trips-2025/trip1",
  },
];

const Page = () => {
  return (
    <div className="py-12 px-4 md:px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        2025 Trips
      </h1>
      <div className="max-w-7xl mx-auto space-y-8">
        {trips.map((trip) => (
           <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default Page;
