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
          <strong>Date:</strong> May 8th - May 15th, 2025
        </p>

        {/* Itinerary Section */}
        <div className="space-y-8">
          {/* Day 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 1: Calais (France) to Luxembourg (Approx. 250 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Our tour starts with us meeting in Folkestone at around 8:00 am on
              the first day of your chosen trip. The meeting point is the
              Premier Inn to catch the 09:20 EuroTunnel to Calais. From
              experience, many people have stayed here the night before their
              trip. Once in France, we will regroup at the first petrol station
              just after we depart the train.
            </p>
            <p className="text-gray-700 mt-2">
              Once everyone is there, we will have a day&apos;s cross-country driving
              through picturesque northern France via Dunkirk, Belgium, and
              Luxembourg before reaching our first night&apos;s stop in Luxembourg
              City.
            </p>
          </section>

          {/* Day 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 2: Luxembourg to Baden Baden, Germany (Approx. 220 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              We continue our journey into eastern France before crossing into
              Germany through the Vosges mountains. In the afternoon, we&apos;ll
              drive through the Black Forest region, making our way to Baden
              Baden for our second night. Here, we&apos;ll rest up for the famous
              B500 stretch—a car driver&apos;s dream road known for its sweeping
              bends and stunning views.
            </p>
          </section>

          {/* Day 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 3: Baden Baden to Zell am See, Austria (Approx. 300 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              After a scenic start along the B500, we cross into Austria,
              winding through the Tyrol mountains before arriving near Zell am
              See for a two-night stay. We&apos;ll check in at the Gasthof Geronimo
              Hotel, nestled in the foothills, offering stunning views and a
              true feel of Austrian charm.
            </p>
          </section>

          {/* Day 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 4: Rest Day in Zell am See
            </h2>
            <p className="text-gray-700 mt-2">
              This day is for leisure, giving you the chance to explore or
              relax. Suggested activities include driving the Grossglockner High
              Alpine Road, visiting Hitler&apos;s Eagle&apos;s Nest in Berchtesgaden, or
              exploring Salzburg, Beethoven&apos;s birthplace. You could even do all
              three! We&apos;ll return to the Gasthof Geronimo Hotel for our second
              night.
            </p>
          </section>

          {/* Day 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 5: Zell am See to Davos, Switzerland (Approx. 200 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Today, we head west into Switzerland, where we&apos;ll tackle five of
              the most iconic Swiss mountain passes. Prepare for breathtaking
              hairpins and stunning alpine views before reaching Davos for our
              fifth night at a comfortable local hotel.
            </p>
          </section>

          {/* Day 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 6: Davos to Belfort, France (Approx. 200 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              We begin the day with a thrilling drive across the Gotthard Pass
              and the famous Furka Pass (featured in the Bond film
              *Goldfinger*). We&apos;ll also tackle the Grimsel and Nufenen passes
              before heading to Belfort for our overnight stay in France.
            </p>
          </section>

          {/* Day 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 7: Belfort to Reims, France (Approx. 250 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Our route today takes us through charming French villages, with
              stops in towns like Chaumont and Troyes—perfect for a food stop.
              In Reims, the heart of the Champagne region, you&apos;ll enjoy a
              cosmopolitan evening with excellent restaurants and bars.
            </p>
          </section>

          {/* Day 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              DAY 8: Reims to Calais, France (Approx. 190 Miles)
            </h2>
            <p className="text-gray-700 mt-2">
              Our final adventure includes a visit to the historic Reims-Gueux
              GP track. We&apos;ll take in the old pits and grandstand, capturing
              unique photographs. Then, we head back to Calais for the return
              EuroTunnel crossing to the UK.
            </p>
          </section>
        </div>

        {/* Pricing Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            EPIC EUROPEAN ROAD TRIP - MAY 2025
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
          <p className="mt-6 text-center">
            <a
              href="https://buy.stripe.com/eVafZf89gfPe5jO5lz"
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

export default RoadTripDetails;
