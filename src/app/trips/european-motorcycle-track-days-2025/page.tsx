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
    link: "/trips/european-track-days-2025/trip1",
  },

  {
    id: "2",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "13th August 2025",
    endDate: "15th August 2025",
    location: "Folembray, France",
    description:
      "We all meet at Folkestone at 11.30 am on August 13th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais...",
    link: "/trips/european-track-days-2025/trip2",
  },

  {
    id: "3",
    title: "Folembray France Motorcycle Road Trip & Track Day",
    startDate: "17th September 2025",
    endDate: "19th September 2025",
    location: "Folembray, France",
    description:
      "We all meet at Folkestone at 11.30 am on September 17th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais...",
    link: "/trips/european-track-days-2025/trip3",
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
