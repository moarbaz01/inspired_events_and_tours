import TripCard from "@/components/TripCard";

const trips = [
  {
    id: "1",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "21st May 2025",
    endDate: "23rd May 2025",
    location: "Folembray, France",
    description:
      "We all meet at Folkestone at 11.30 am on May 21st and sort out all the tickets and paperwork ready to board the 1.20 train to Calais...",
    link: "/trips/european-bike-trips-2025/trip1",
  },
  {
    id: "2",
    title: "Spain Pyrenees Motorcycle Road Trip",
    startDate: "21st July 2025",
    endDate: "29th July 2025",
    location: "Folkestone, Kent",
    description:
      "This epic trip will start on the 21st July when we meet at around 2pm at Plymouth. Our crossing with Brittany Ferries departs at 16.45...",
    link: "/trips/european-bike-trips-2025/trip2",
  },
  {
    id: "3",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "13th August 2025",
    endDate: "15th August 2025",
    location: "Folembray, France",
    description:
      "We all meet at Folkestone at 11.30 am on August 13th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais...",
    link: "/trips/european-bike-trips-2025/trip3",
  },
  {
    id: "4",
    title: "France, Austria & Switzerland Motorcycle Road Trip",
    startDate: "18th August 2025",
    endDate: "25th August 2025",
    location: "Folkestone, Kent",
    description:
      "Day 1. Calais (France) to Luxembourg. Approximately 250 miles. Our tour starts with us meeting in Folkestone at around 9am on the first day...",
    link: "/trips/european-bike-trips-2025/trip4",
  },
  {
    id: "5",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "17th September 2025",
    endDate: "19th September 2025",
    location: "Folembray, France",
    description:
      "We all meet at Folkestone at 11.30 am on September 17th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais...",
    link: "/trips/european-bike-trips-2025/trip5",
  },

  {
    id: "6",
    title: "France, Austria & Switzerland Motorcycle Road Trip",
    startDate: "22nd September 2025",
    endDate: "29th September 2025",
    location: "Folkestone, Kent",
    description:
      "Day 1. Calais (France) to Luxembourg. Approximately 250 miles. Our tour starts with us meeting in Folkestone at around 9am on the first day...",
    link: "/trips/european-bike-trips-2025/trip6",
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
