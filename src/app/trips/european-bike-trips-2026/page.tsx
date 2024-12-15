import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "May 27th 2026",
    endDate: "May 29th 2026",
    location: "Starts @ Folkestone",
    description:
      "We all meet at Folkestone at 11.30 am on May 27th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais. Once o...",
    link: "/trips/european-bike-trips-2026/trip1",
    status: "",
  },
  {
    id: "2",
    title: "France Austria & Switzerland Bike Trip",
    startDate: "June 1st 2026",
    endDate: "June 8th 2026",
    location: "Starts @ Folkestone",
    description:
      "Day 1. Calais(France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 9am on the first day of y...",
    link: "/trips/european-bike-trips-2026/trip2",
    status: "",
  },
  {
    id: "3",
    title: "France Austria & Switzerland Bike Trip",
    startDate: "July 6th 2026",
    endDate: "July 13th 2026",
    location: "Starts @Folkestone",
    description:
      "Day 1. Calais(France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 9am on the first day of y...",
    link: "/trips/european-bike-trips-2026/trip3",
    status: "",
  },
  {
    id: "4",
    title: "SPAIN Pyrenees Motorcycle Trip",
    startDate: "July 20th 2026",
    endDate: "July 28th 2026",
    location: "Starts @Folkestone",
    description:
      " This epic trip will start on the 20th July when we meet at around 2pm at Plymouth. Our crossing with Brittany Ferries departs at 16.45. Once...",
    link: "/trips/european-bike-trips-2026/trip4",
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
