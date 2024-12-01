import Link from "next/link";

const trips = [
  {
    id: "1",
    title: "Morocco Overland Motorcycle Road Trip",
    startDate: "MARCH 12TH 2026",
    endDate: "MARCH 28TH 2026",
    location: "Starting @ Folkestone",
    description:
      "DAY 1: MARCH 12TH 2026 Our road trip of a lifetime starts with us meeting at 8pm on Thursday 11th October at the port of Portsmouth to board ...",
    link: "/trips/morocco-bike-trips-2026/trip1",
    status: "",
  },
  {
    id: "2",
    title: "Morocco OVERLAND Motorcycle Road Trip",
    startDate: "OCTOBER 1ST 2026",
    endDate: "OCTOBER 14TH 2026",
    location: "Start @ Inverness",
    description:
      "DAY 1. OCTOBER 1ST 2026 Our road trip of a lifetime starts with us meeting at 8pm on Thursday 11th October at the port of Portsmouth to board...",
    link: "/trips/morocco-bike-trips-2026/trip2",
    status: "",
  },

  {
    id: "3",
    title: "Morocco OVERLAND Motorcycle Road Trip",
    startDate: "NOVEMBER 12TH 2026",
    endDate: "NOVEMBER 25TH 2026",
    location: "Starts @Folkestone",
    description:
      "DAY 1. NOVEMBER 12TH 2026 Our road trip of a lifetime starts with us meeting at 8pm on Thursday 11th October at the port of Portsmouth to boa...",
    link: "/trips/morocco-bike-trips-2026/trip3",
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
