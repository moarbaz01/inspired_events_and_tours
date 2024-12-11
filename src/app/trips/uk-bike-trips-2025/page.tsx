import TripCard from "@/components/TripCard";

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
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default Page;
