import Link from "next/link";

const trips = [
  {
    id: "1",
    title: "NC500 Motorcycle Road Trip",
    startDate: "June 15th 2025",
    endDate: "June 20th 2025",
    location: "Start @ Inverness",
    description:
      " FULLY BOOKED SEE JULY 13TH TRIP FOR SPACES After the amazing success of these trips in 2022/2023 @ 2024 we are excited to e returning for 20...",
    link: "/trips/uk-bike-trips-2025/trip1",
    status: "Booked",
  },
  {
    id: "2",
    title: "NC500 Motorcycle Road Trip",
    startDate: "June 21st 2025",
    endDate: "June 26th 2025",
    location: "Start @ Inverness",
    description:
      " FULLY BOOKED SEE JUY 13TH TRIP FOR SPACES After the amazing success of these trips in 2022/2023 @ 2024 we are excited to be returning for 20...",
    link: "/trips/uk-bike-trips-2025/trip2",
    status: "Booked",
  },
  {
    id: "3",
    title: "NC500 Motorcycle Road Trip",
    startDate: "July 13th 2025",
    endDate: "July 18th 2025",
    location: "Start @ Inverness",
    description:
      "After the amazing success of these trips in 2022/2023 @ 2024 we are excited to be returning for 2025 and give you something positive to loo...",
    link: "/trips/uk-bike-trips-2025/trip3",
  },
  {
    id: "4",
    title: "NC500 Motorcycle Road Trip",
    startDate: "September 7th 2025",
    endDate: "September 18th 2025",
    location: "Start @ Inverness",
    description:
      " After the amazing success of these trips in 2022/2023 @ 2024 we are excited to be returning for 2025 and give you something positive to loo...",
    link: "/trips/uk-bike-trips-2025/trip4",
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
