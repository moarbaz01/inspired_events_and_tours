import React from "react";

const RoadTripDetails = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      {/* Trip Banner Image (Optional) */}

      {/* Road Trip Details Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">
          France/Austria/Switzerland Car Road Trip
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          <strong>Date:</strong> June 16th, 2025 - June 23rd, 2025
        </p>

        {/* Itinerary Section */}
        <div className="space-y-8">
          {/* Day 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 1: Calais (France) - Luxembourg (Approx. 250 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Our tour starts with us meeting in Folkestone at around 8am on the
              first day of your chosen trip. The meeting point is the Premier
              Inn to catch the 09:20 EuroTunnel to Calais. From experience from
              previous trips, lots of people have stopped here the night before
              their trip. Once in France, we will regroup in the first petrol
              station just after we depart the train.
            </p>
            <p className="text-gray-700 mt-2">
              Once everyone is there, we will have a day&apos;s cross-country driving
              through picturesque northern France via Dunkirk, Belgium, and
              Luxembourg before reaching our first night&apos;s stop at the capital
              Luxembourg.
            </p>
          </section>

          {/* Day 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 2: Luxembourg - Baden Baden (Germany) (Approx. 220 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              We then continue our drive into eastern France before crossing the
              border into Germany via the beautiful Vosges mountains. The
              afternoon&apos;s drive brings us into the Black Forest region and to
              our second night&apos;s stop near Baden Baden at Badischer Hof Hotel.
              We rest up and get ready for the first famous part of the road
              trip in the shape of the B500. This stretch of tarmac has long
              been coveted by car drivers looking for long sweeping roads that
              run from bend to bend. Sure not to disappoint, it will have you
              wanting to drive it over and over again.
            </p>
          </section>

          {/* Day 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 3: Baden Baden (Germany) - Zell Am See (Austria) (Approx. 300
              Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Today sees us join the B500 at Baden Baden and wind our way along
              this epic piece of road that sees us leave Germany and head into
              Austria through the foothills of the beautiful mountains of Tyrol
              to our base for 2 nights near the historic town of Zell am See.
              Approximately 20 km away, we will be stopping at Gasthof Geronimo
              Hotel, nestled in the idyllic foothills, giving you a real feel of
              Austria.
            </p>
          </section>

          {/* Day 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 4: Rest Day (Zell Am See)
            </h2>
            <p className="text-gray-700 mt-2">
              Here we take a well-deserved rest day, giving you time for some
              leisure time or traditional tourist activities. Which could
              include a drive out to the famous Grossglockner High Alpine Road,
              the highest surfaced mountain pass in Austria, or a trip to the
              Eagle&apos;s Nest – Hitler&apos;s summer retreat in Berchtesgaden. Or you
              could spend some time in historic Salzburg, a beautiful city and
              birthplace of Beethoven. On previous trips, we have known people
              visit all three in the same day. Before returning to the hotel for
              our second night at the Gasthof Geronimo Hotel.
            </p>
          </section>

          {/* Day 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 5: Zell Am See (Austria) - Davos (Switzerland) (Approx. 200
              Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              We then leave Zell am See continuing west to the awe-inspiring
              Swiss Alps. The Swiss Alps are one of the world&apos;s most famous car
              drivers&apos; havens, and it&apos;s not difficult to see why. With endless
              hairpins and breathtaking beauty, they bring drivers back here
              year on year. On this tour, we drive five of the greatest mountain
              passes in Switzerland before spending our 5th night of our epic
              trip at the Bla Bla Hotel in Davos.
            </p>
          </section>

          {/* Day 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 6: Davos (Switzerland) - Belfort (France) (Approx. 200 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              From here we head for the Alpe Di Sorecia to take on the
              world-famous Gotthard Pass with its famous cobbled hairpins, get
              in touch with your inner 007 on the nearby Furka Pass immortalized
              by the car chase in *Goldfinger*, then drive the giddy heights of
              the Grimsel Pass at an elevation of 7,100 feet and the Nufenen at
              8,130 feet. Then after taking on these amazing passes, we wind our
              way towards Belfort for our evening stay.
            </p>
          </section>

          {/* Day 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 7: Belfort (France) - Reims (France) (Approx. 250 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              As we start heading back up through France, the traditional small
              French villages are a real feature of the back roads along our
              route that takes you through stunning towns like Chaumont and
              Troyes, a medieval town that is really a great place for a food
              stop and refreshment before heading to our evening stop in Reims.
              A town in the heart of the Champagne district and one that you
              will enjoy your evening in with a real cosmopolitan feel. With a
              vast selection of bars and restaurants with something on offer for
              everyone&apos;s palate.
            </p>
          </section>

          {/* Day 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 8: Reims (France) - Calais (France) (Approx. 190 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Our last adventure on this tour comes with a visit to the GP track
              Reims-Gueux, the disused track was the second location of the
              Grand Prix, several Formula One races, and the MotoGP. Our route
              takes us on the old track riding past the old pits and grandstand.
              Giving us a unique photograph opportunity, we will then head back
              towards Calais to catch our return EuroTunnel crossing to the UK.
              Please understand that this is a real driver&apos;s trip with some long
              days taking on challenging routes through stunning vistas and
              surroundings. But having completed this trip previously, it really
              is worth the journey. As Ralph Waldo Emerson, the American
              philosopher, said, “It&apos;s not the destination, it&apos;s the journey,”
              meaning enjoy the journey to get to the destination. With this
              amazing trip, the journeys are a massive part of the trip.
            </p>
          </section>
        </div>

        {/* Pricing Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            EPIC EUROPEAN ROAD TRIP - JUNE 2025
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Cost: £1589 per car (includes 1 passenger)
          </h3>
          <p className="text-gray-700 mt-2">
            Price includes:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Return EuroTunnel crossing from Folkestone to Calais</li>
              <li>7 nights hotel accommodation with breakfast</li>
              <li>Guided route suggestions and expert advice</li>
              <li>Beautiful scenic driving routes through Europe</li>
            </ul>
          </p>
          <p className="text-gray-700 mt-2">
            What is not included:
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                Evening meals (available at the hotels or nearby restaurants)
              </li>
              <li>
                Optional extra activities (such as visits to Grossglockner or
                Eagle&apos;s Nest)
              </li>
            </ul>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-4">
            Deposit: £489 (Balance due 8 weeks prior to departure)
          </p>

          <a
            href="https://buy.stripe.com/eVafZf89gfPe5jO5lz"
            className="mt-8 block w-full py-3 text-center bg-primary text-white rounded-lg"
          >
            Reserve Your Place Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default RoadTripDetails;
