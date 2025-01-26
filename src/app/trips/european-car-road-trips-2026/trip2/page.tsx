import React from "react";
import { trips } from "../data";

export async function generateMetadata() {
  const trip = trips.find((t) => t.id === "2");

  if (!trip) {
    return {
      title: "Trip Not Found | Inspired Events and Tours",
      description: "The trip you are looking for does not exist.",
    };
  }

  return {
    title: `${trip.title} | Inspired Events and Tours`,
    description: `${trip.description}`,
    keywords: `${trip.title}, ${trip.location}, travel, tours, bike trips`,
  };
}

const TripDetails = () => {
  return (
    <div>
      {/* Trip Details Content */}
      <h1 className="text-3xl font-semibold text-center text-primary mb-4">
        France Austria & Switzerland CAR Road Trip
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        <strong>Date:</strong> 07TH SEPTEMBER 2026 - 14th September 2026
      </p>

      {/* Daily Itinerary */}
      <div className="space-y-8">
        {/* Day 1 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 1. Calais(France)-Luxembourg. Approximately 250 Miles.{" "}
          </h2>
          <p className="text-gray-700 mt-2">
            Our tours start with us meeting in Folkestone at around 8am. The
            meeting point is the Premier Inn to catch the 09.20 Eurotunnel to
            Calais. From experience gained from previous trips lots of people
            have stopped here the night before their trip. Once in France we
            will regroup in the first petrol station which is just after we
            disembark the train. When everyone is there we will have a day’s
            cross country driving through picturesque northern France via
            Dunkirk Belgium and Luxembourg before reaching our first night&#39;s
            stop just a few miles over the Luxemburg border back into France
            stopping @ B&amp;B Hotel Longwy Porte Du Luxembourg.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 2. Luxembourg-Baden Baden(Germany), Approximately 220 Miles{" "}
          </h2>
          <p className="text-gray-700 mt-2">
            We then continue our drive into eastern France before crossing the
            border into Germany via the beautiful Vosges mountains. The
            afternoon’s ride brings us into the Black Forest region and to our
            second night’s stop near Baden Baden @ Hotel Rebstock , we rest up
            and get ready for the first famous part of the road trip in the
            shape of the B500, this stretch of tarmac has long been coveted by
            car drivers looking for long sweeping roads that run from bend to
            bend. Sure not to disappoint, it will have you wanting to ride it
            over and over again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 3 Baden Baden(Germany)-Zell Am See(Austria) Approximately 300
            Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Today sees us join the B500 at Baden Baden and wind our way along
            this epic piece of road that sees us leave Germany and head into
            Austria through the foothills of the beautiful mountains of Tyrol to
            our base for 2 nights in the historic town of Zell am See. We will
            be stopping @ Hotel Glaserhaus, nestled in the idyllic town of Zell
            Am See giving you a real feel of Austria.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 4 Rest Day(Zell Am See)
          </h2>
          <p className="text-gray-700 mt-2">
            Here we take a well-deserved rest day, Giving you time for some
            R&amp;R spending day relaxing in Zell Am See or taking part in some
            traditional tourist activities. Which could include a drive out to
            the famous Grossglockner high alpine road, the highest surfaced
            mountain pass in Austria or a trip to the Eagle’s nest- Hitler’s
            summer retreat in Berchtesgaden. Or you could spend some time in
            historic Salzburg, a beautiful city and birthplace of Beethoven. On
            previous trips we have known people visit all three in the same day.
            Before returning to the hotel for our second night @ Hotel
            Glaserhaus.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 5. Zell Am See(Switzerland)-Davos(Switzerland) Approximately 200
            Miles
          </h2>
          <p className="text-gray-700 mt-2">
            We then leave Zell am See continuing west to the awe-inspiring Swiss
            Alps. The Swiss Alps are one of the world’s most famous car drivers
            haven and it&#39;s not difficult to see why with endless hairpins
            and breathtaking beauty they bring drivers back here year on year
            and on this tour we can ride five of the greatest mountain passes in
            Switzerland. Before spending our 5th night of our epic trip @
            B&amp;B Hotel St Gallen Switzerland.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 6 St Gallen (Switzerland) – Furka (Switzerland) Approximately
            200 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            From here we head for the Alpe Di Sorecia to take on the world
            famous Gotthard pass with its famous cobbled hairpins, get in touch
            with your inner 007 on the nearby Furka pass immortalized by the car
            chase in Goldfinger then drive the giddy heights of the Grimsel pass
            at an elevation of 7,100 feet and the Nufenen at 8,130 feet. Then
            after taking on these amazing passes, we wind our way towards our
            evening stay @ Hotel Alpenblick Fieschertal. The unique location of
            our accommodations allows you to take on the collection of epic
            passes on its door step.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 7 Furka (Switzerland) – Nancy (France) Approximately 200 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            As we start heading back up through Switzerland towards France the
            traditional small French villages are a real feature of the back
            roads along our route that takes you through stunning medieval towns
            that are really great places for a food stop and refreshment before
            heading to our evening stop in Nancy. A vibrant French town in the
            heart of France and one that you will enjoy your evening in with a
            real cosmopolitan feel. With a vast selection of bars and
            restaurants with something on offer for everyone&#39;s pallet.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 8 Nancy (France)- Calais(France) Approximately 300 Miles.
          </h2>
          <p className="text-gray-700 mt-2">
            Our last adventure on this tour comes with a visit to the GP track
            Reims-Gueux, the disused track was the second location of the Grand
            Prix, several Formula one races and the MotoGP. Our route takes us
            on the old track riding past the old pits and grandstand. Giving us
            a unique photograph opportunity, we will then head back towards
            Calais to catch our return Eurotunnel crossing to the UK.
          </p>
        </section>
      </div>

      {/* Pricing Section */}
      <section className="mt-12">
        <p className="text-gray-700 mt-2">
          This is not a guided tour as that really doesn&apos;t work with a
          group of this size. As lots of people often wish to spend more or less
          time at certain places, or have other places and places of interest
          they wish to visit. We are on hand everyday to give guidance and
          advice. But each day you will travel between hotels at a pace and
          route that suits you and we will regroup at the evenings hotel and
          share stories of the day&apos;s journey. Please be aware that the
          daily approximate mileage is based on riding the most direct route.
        </p>
        <p className="text-gray-700 mt-2">
          And will change depending on the route you ride between A to B. The
          price per car which includes one passenger is <b>£1589</b> with your
          crossing both ways by Eurotunnel and the 7 nights hotel accommodation.
          Your accommodation will be double room to yourself unless traveling
          with a passenger, and includes breakfast but evening food is not
          included but is available at the hotels or nearby restaurants.. A
          deposit of <b>£489</b> is required to book your place with the balance
          due 8 weeks prior to the trip.
        </p>

        <p className="text-md font-bold">
          Places can be reserved with a £489 deposit. Simply click on the link
          to reserve your place
        </p>
        <p className="mt-6 ">
          <a
            href="https://buy.stripe.com/9AQeVb3T05aA9A4aGe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-3 py-3 rounded-lg hover:opacity-80 transition duration-300"
          >
            Book Your Place
          </a>
        </p>
      </section>
    </div>
  );
};

export default TripDetails;
