import React from "react";

const TripDetails = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">

      {/* Trip Details Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">
          Soissons Track Day Trip
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          <strong>Date:</strong> August 27th, 2024 - August 29th, 2024
        </p>

        {/* Itinerary Section */}
        <div className="space-y-8">
          {/* Day 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 1: AUGUST 27TH 2024
            </h2>
            <p className="text-gray-700 mt-2">
              We all meet at Folkestone at 11:30 am and sort out all the tickets
              and paperwork ready to board the 1:20 pm train to Calais. Once in
              France, we regroup and head to our overnight stay in Soissons,
              about a 3-hour drive. Most drivers prefer making their own way
              rather than following the support vehicle due to motorway speeds.
              Printed map instructions are provided if needed.
            </p>
            <p className="text-gray-700 mt-2">
              Upon checking in, enjoy the rest of the day to relax. There&apos;s a
              great Chinese buffet nearby, where for £20 you can eat as much as
              you want and get 3 beers – a popular choice!
            </p>
          </section>

          {/* Day 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 2: AUGUST 28TH 2024
            </h2>
            <p className="text-gray-700 mt-2">
              After a continental breakfast (additional cost), we will depart at
              8:30 am for the Circuit de Folembray. At the track, we’ll go over
              health and safety, track rules, and then get a feel for the
              circuit in small groups. The track is open-pit, so you can go out
              as many times as you like. There will be a professional
              photographer taking pictures throughout the day.
            </p>
            <p className="text-gray-700 mt-2">
              The track day ends at 5 pm. Afterward, we return to the hotel to
              freshen up and then head into town for some drinks and food (taxis
              not included). This is a great way to bond with new friends made
              along the way!
            </p>
          </section>

          {/* Day 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 3: AUGUST 29TH 2024
            </h2>
            <p className="text-gray-700 mt-2">
              On Friday morning, the support vehicle will depart at 9:30 am for
              the return journey. Most people make their own way back or travel
              in new groups. Return tickets are open for the 24th, but if you
              change the time, there may be an admin fee. You&apos;re free to travel
              back with your group or the support vehicle.
            </p>
            <p className="text-gray-700 mt-2">
              A professional photographer will upload all the event photos to a
              website, allowing you to download as many as you like. Full public
              liability insurance, circuit marshals, and medical staff will be
              available throughout the day.
            </p>
          </section>
        </div>

        {/* Pricing Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            SOISSONS TRACK DAY TRIP - AUGUST 27TH-29TH, 2024
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Cost: £579 per car and driver, £80 for each additional passenger
          </h3>
          <p className="text-gray-700 mt-2">
            Price includes:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Return train ticket from Folkestone to Calais</li>
              <li>Hotel stay with breakfast</li>
              <li>Track day entry at Circuit de Folembray</li>
              <li>Professional photography coverage</li>
              <li>Full public liability insurance</li>
              <li>Support vehicle during the trip</li>
            </ul>
          </p>
          <p className="text-gray-700 mt-2">
            What is not included:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Meals and drinks (other than those mentioned)</li>
              <li>Taxis to town (for evening social events)</li>
              <li>Admin charges for schedule changes on return crossing</li>
            </ul>
          </p>
          <p className="mt-6 text-center">
            <a
              href="https://buy.stripe.com/fZe9AR1KS5aAdQkaFt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-80 transition duration-300"
            >
              Reserve Your Place Now
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TripDetails;
