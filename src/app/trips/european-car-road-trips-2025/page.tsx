import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "8th May 2025",
    endDate: "15th May 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/european-car-road-trips-2025/trip1",
  },
  {
    id: "2",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "16th June 2025",
    endDate: "23rd June 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/european-car-road-trips-2025/trip2",
  },
  {
    id: "3",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "2nd August 2025",
    endDate: "8th August 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/european-car-road-trips-2025/trip3",
  },
];

const Page = () => {
  return (
    <div className="py-12 md:px-6 px-4 bg-gray-50 min-h-screen">
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
