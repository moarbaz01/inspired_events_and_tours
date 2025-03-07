import Link from "next/link";

interface TripCardProps {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  link: string;
  status?: string;
}
const TripCard: React.FC<TripCardProps> = ({
  title,
  startDate,
  endDate,
  location,
  description,
  link,
  status,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Left side: Gradient Background with Title */}
      <div className="flex-shrink-0 md:w-1/3 bg-primary flex items-center justify-center flex-col p-6">
        <p className="text-lg md:text-xl font-bold text-white text-center">
          {title}
        </p>
        <p className="text-lg md:text-xl font-bold text-white text-center">
          ({startDate + " - " + endDate})
        </p>
        <p className="text-lg md:text-xl font-bold text-white text-center">
          {status}
        </p>
      </div>

      {/* Right side: Card Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <p className="text-gray-800 text-base font-medium mb-4 line-clamp-3">
            {description}
          </p>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-bold text-primary">Start Date:</span>{" "}
              {startDate}
            </p>
            <p>
              <span className="font-bold text-primary">End Date:</span>{" "}
              {endDate}
            </p>
            <p>
              <span className="font-bold text-primary">Location:</span>{" "}
              {location}
            </p>
            <p>
              <span className="font-bold text-primary">Status:</span> {status}
            </p>
          </div>
        </div>
        <Link
          href={link}
          aria-label={
            "View all details about " + title + " trip from " + startDate
          }
          className="mt-6 w-fit bg-primary hover:bg-primary-dark text-white font-bold text-sm py-3 px-6 rounded-lg transition"
        >
          All Details
        </Link>
      </div>
    </div>
  );
};

export default TripCard;
