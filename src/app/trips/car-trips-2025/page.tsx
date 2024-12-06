import Link from "next/link";

const trips = [
  {
    id: "1",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "8th May 2025",
    endDate: "15th May 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/car-trips-2025/trip1",
  },
  {
    id: "2",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "16th June 2025",
    endDate: "23rd June 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/car-trips-2025/trip2",
  },
  {
    id: "3",
    title: "France/Austria/Switzerland Car Road Trip",
    startDate: "2nd August 2025",
    endDate: "8th August 2025",
    location: "Start @ Folkestone",
    description:
      "Day 1. Calais (France)-Luxembourg. Approximately 250 Miles. Our tour starts with us meeting in Folkestone at around 8am on the first day of y...",
    link: "/trips/car-trips-2025/trip3",
  },
  {
    id: "4",
    title: "Folembray France 3 Day Car Road Trip & Track Day",
    startDate: "27th August 2025",
    endDate: "29th August 2025",
    location: "Start @ Folkestone",
    description:
      "We all meet at Folkestone at 11.30 am on August 27th and sort out all the tickets and paperwork ready to board the 1.20 train to Calais. On...",
    link: "/trips/car-trips-2025/trip4",
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
          <div
            key={trip.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* Left side: Gradient Background with Title */}
            <div className="flex-shrink-0 md:w-1/3 bg-primary flex items-center justify-center flex-col p-6">
              <p className="text-lg md:text-xl font-bold text-white text-center">
                {trip.title}
              </p>
              <p className="text-lg md:text-xl font-bold text-white text-center">
                {trip.startDate + " - " + trip.endDate}
              </p>
            </div>

            {/* Right side: Card Content */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <p className="text-gray-800 text-base font-medium mb-4 line-clamp-3">
                  {trip.description}
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <span className="font-bold text-primary">Start Date:</span>{" "}
                    {trip.startDate}
                  </p>
                  <p>
                    <span className="font-bold text-primary">End Date:</span>{" "}
                    {trip.endDate}
                  </p>
                  <p>
                    <span className="font-bold text-primary">Location:</span>{" "}
                    {trip.location}
                  </p>
                </div>
              </div>
              <Link
                href={trip.link}
                className="mt-6 w-fit bg-primary hover:bg-primary-dark text-white font-bold text-sm py-3 px-6 rounded-lg transition"
              >
                All Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
