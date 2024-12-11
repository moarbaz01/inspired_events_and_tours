import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "Morocco Land Rover Overland Road Trip",
    startDate: "11th October 2025",
    endDate: "29th October 2025",
    location: "Morocco",
    description:
      "Rooted in historical tradition, but now strongly drawn to the modern world, Morocco is a country of stark contradictions and dazzling divers...",
    link: "/trips/land-rover-trips-2025/trip1",
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
