import Link from "next/link";

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
          <div
            key={trip.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* Left side: Gradient Background with Title */}
            <div className="flex-shrink-0 md:w-1/3 bg-primary flex items-center justify-center flex-col p-6">
              <p className="text-lg md:text-xl font-bold text-white text-center">
                {trip.title}
              </p>
              <p className="text-lg md:text-2xl font-bold text-white text-center">
                {trip?.status === "Booked"
                  ? "FULLY BOOKED"
                  : trip.startDate + " - " + trip.endDate}
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
