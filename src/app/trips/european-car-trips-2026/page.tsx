import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "France Austria & Switzerland CAR Road Trip",
    startDate: "June 15th 2026",
    endDate: "June 22nd 2026",
    location: "Starting @ Folkestone",
    description:
      "Day 1. Calais(France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/european-car-trips-2026/trip1",
    status: "",
  },
  {
    id: "2",
    title: "France Austria & Switzerland Car Road Trip",
    startDate: "07TH SEPTEMBER 2026",
    endDate: "14th September 2026",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais(France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/european-car-trips-2026/trip2",
    status: "",
  },
];

const Page = () => {
  return (
    <div className="py-12 px-4 md:px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        2026 Trips
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
