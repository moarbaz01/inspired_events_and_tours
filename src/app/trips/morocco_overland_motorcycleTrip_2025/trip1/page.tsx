import React from "react";

const TripDetails = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      {/* Top Image */}

      {/* Trip Details Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">
          Morocco Overland Motorcycle Trip
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          <strong>Date:</strong> 13th November 2025 - 26th November 2025
        </p>

        {/* Daily Itinerary */}
        <div className="space-y-8">
          {/* Day 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 1: NOVEMBER 13TH 2025
            </h2>
            <p className="text-gray-700 mt-2">
              Our road trip of a lifetime starts with us meeting at 8pm on
              Thursday 11th October at the port of Portsmouth to board our ferry
              to Santander (Spain) which sails at 21.50. This is a 35hr crossing
              and includes an internal cabin allowing for some quality rest.
            </p>
          </section>

          {/* Day 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 2: NOVEMBER 14TH 2025
            </h2>
            <p className="text-gray-700 mt-2">
              A full day on our ferry crossing to Santander, giving us a chance
              to get to know each other and discuss this amazing road trip that
              we are heading off on. We will get a good night&apos;s sleep in our
              cabins before docking in Santander in the morning of the 15th.
            </p>
          </section>

          {/* Day 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 3: NOVEMBER 15TH 2025 - Mileage: 350
            </h2>
            <p className="text-gray-700 mt-2">
              Arriving at Santander port at 8am, we disembark our ferry and
              regroup before making our way down the N-611 through Northern
              Spain passing through Reinosa and Salamanca. Making refreshment
              stops along the way. We will arrive by early evening at our
              overnight stop near Caceres stopping at Hotel AHC. Today is our
              furthest ride as we need to eat up the miles to head towards
              Africa.
            </p>
          </section>

          {/* Day 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 4: NOVEMBER 16TH 2025 - Mileage: 280
            </h2>
            <p className="text-gray-700 mt-2">
              A full day&apos;s riding today, traveling as a group will give us some
              great photo opportunities along today&apos;s route. We will depart
              Caceres at around 9am and continue our journey towards Gibraltar
              along the E-803 passing through some stunning Spanish towns and
              villages. Stopping for the evening at Hotel Mir Octavio Algeciras
              15 miles from Gibraltar.
            </p>
          </section>

          {/* Day 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 5: NOVEMBER 17TH 2025 - Mileage: 185
            </h2>
            <p className="text-gray-700 mt-2">
              An early start around 8am sees us board our ferry over to Africa
              from Gibraltar over to the main port of Morocco @ Tangiers. Then
              our first day&apos;s riding in Africa traveling along the western
              Atlantic coast taking in its amazing views and scenery as we start
              to head towards the real Morocco and start to see the
              Mediterranean ambiance fade away behind us. Our evening will end
              with an overnight stop in Fez @ Hotel Volubilis. Fez is called
              Morocco&apos;s “spiritual heart.”
            </p>
          </section>

          {/* Day 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 6: NOVEMBER 18TH 2025 - Rest Day
            </h2>
            <p className="text-gray-700 mt-2">
              After some breakfast as a group the day is yours to do as you
              wish. There will be the option to join a local guide to show us
              round the Historic Medina which can be like walking round a
              labyrinth with its narrow streets, bustling souks (markets), and
              of course find a shop to buy your obligatory traditional hat of
              Morocco, the red fez (Tommy Cooper). You are welcome to do your
              own thing after the guided tour, or you are welcome to spend the
              whole day as you wish. Our hotel accommodation will be at the same
              hotel as our previous night.
            </p>
          </section>

          {/* Continue this pattern for Days 7 to 14... */}
        </div>

        {/* Pricing Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            MOTORCYCLE OVERLAND TRIP NOVEMBER 13/26TH 2025
          </h2>
          <p className="text-gray-700 mt-2">
            This once-in-a-lifetime trip is aimed at all levels of riding
            experience and is ideally aimed at adventure-style bikes, allowing
            you to get the most out of this trip. However, this trip can be
            completed on any motorcycle if you feel confident in your own
            abilities. There will be a support vehicle traveling with us at all
            times, with a box trailer to carry your luggage.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Cost: £1889 per bike (without pillion)
          </h3>
          <p className="text-gray-700 mt-2">
            Price includes:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Crossings from Portsmouth to Spain with a cabin & return</li>
              <li>Crossing both ways Gibraltar to Tangier</li>
              <li>All hotels including breakfast</li>
              <li>City guides as mentioned on specific days</li>
              <li>Motorcycle guide on mentioned days</li>
              <li>Support vehicle transporting luggage every day</li>
            </ul>
          </p>
          <p className="text-gray-700 mt-2">
            What is not included:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Your fuel</li>
              <li>Any incurred toll costs</li>
              <li>Breakdown insurance covering repatriation back to the UK</li>
              <li>
                Motorcycle Insurance (you will need to purchase third-party
                insurance at the Moroccan border)
              </li>
              <li>Meals & Drinks other than those mentioned</li>
            </ul>
          </p>
          <p className="mt-6 text-center">
            <a
              href="https://buy.stripe.com/14kbIZ6187iIfYseWl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-80 transition duration-300"
            >
              Book Your Place
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TripDetails;
