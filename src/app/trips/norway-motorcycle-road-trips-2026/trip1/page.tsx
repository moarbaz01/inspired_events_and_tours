import React from "react";
import { trips } from "../data";

export async function generateMetadata() {
  const trip = trips.find((t) => t.id === "1");

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
        Norway Motorcycle Road Trip
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        <strong>Date:</strong> MAY 11TH - 23RD 2026
      </p>

      {/* Daily Itinerary */}
      <div className="space-y-8">
        {/* Day 1 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 1 11/05/2026 Calais-Antwerp
          </h2>
          <p className="text-gray-700 mt-2">
            our epic overlanding trip will start on the 21th May 2026 when we
            meet around 9am Folkestone in Kent. We will board the Eurotunnel @
            11.20 for our 35 minute crossing to Calais France. We will regroup
            in Calais before our road trip really starts, we will be are heading
            up past Dunkirk then north towards Bruges then skirt round Ghent
            before Stopping in Antwerp for the night @ Park Inn by Radisson. In
            the heart of Antwerp.
          </p>
        </section>

        {/* Day 2 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 2 12/05/2026 Antwerp-Tecklenberg 195 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            After breakfast at the hotel we will aim to depart by around 9am and
            start to continue to head north towards Germany following the A21
            for Essen then on to our next stop over destination of Tecklenburg
            where we will check into Hotel Bismarckhohe. Then settle in for the
            evening. And get the chance for a chat and a couple of beers or
            whatever is your choice, and the chance to get to know everyone.
          </p>
        </section>

        {/* Day 3 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 3 13/05/2026 Tecklenberg-Padborg 250 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Again after our breakfast we will start to wind the miles on as we
            head up into Denmark. Passing Brem and skirting the edge of Hamburg
            we then ride north to our accomodation situated in the Damish border
            town of Padborg. We will be stopping @ Hotel Bov Kro. The town also
            has a great selection of traditional restaurants.
          </p>
        </section>

        {/* Day 4 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 4 14/05/2026 Padborg-Kristiansand 250 Miles ~Inc Ferry
          </h2>
          <p className="text-gray-700 mt-2">
            After a good nights rest and our breakfast we will aim to depart by
            9am and head further North up through Denmark to catch our ferry
            crossing over to Kristiansand Norway. Once landing in Norway we head
            west to our over night stop @ Citybox Hotel Kristiansand
          </p>
        </section>

        {/* Day 5 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 5 15/05/2026 Kristiansand-Stavanger 150 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Having spent our first night in Norway we no start to ride the epic
            roads we all came to see and get emersed in the stunning scenery
            that Norway is famous for@ Radisson Blu Atlantic Hotel Stavanger.
            Nearby is the village of Gamle this beautiful and timeless
            neighborhood of Gamle alone makes Stavanger worth visiting! This
            beautiful old town consists of approximately 250 small white wooden
            houses built in the 18th and 19th centuries
          </p>
        </section>

        {/* Day 6 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 6 16/05/2026 Stavanger-Bergen 140 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Same format as previous day we will be looking to depart at around
            9am after having our breakfast. will be following the Western
            coastline working our way up through the breath taking Ryfykle
            region passing stunning Fjords. Before heading into the
            Hardangerfjorg district. Then we will be following the Europavel 19
            taking in the famous Atlantic road that takes you to the oceans
            edge, crossing small islands and inlets over 8 bridges eventually
            seeing us arrive at tonight’s accommodation @City Box Hotel Bergen.
            Whilst in Bergen the famous Viking village or visit Mount Ulriken by
            gondola.
          </p>
        </section>

        {/* Day 7 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 7 17/05/2026 Bergen-Tyinkryset 170 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Today we will as previous days enjoy a breakfast together before
            setting off at 9am.Departing Bergen and now head across country
            towards Norways Nærøyfjord World Heritage Park. Renowned for its
            natural beauty and water falls and Fjords. We will then continue to
            head east towards Tyinkkryset@ Filefjellstuene Hotell Tyinkryset.
          </p>
        </section>

        {/* Day 8 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 8 18/05/2026 Tyinkryset-Oslo 190 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            After breakfast we will head towards Norway’s Capital Oslo.
            Traveling via Valdresflye a great option for scenic mountain roads
            giving us a day of epic riding. Taking in breath taking views and
            miles and miles of open roads with sweeping bends smooth tarmac and
            not a speed camera in sight wink wink. We follow this famous road
            which will eventually bring us down to Oslo a vibrant and cultured
            city that you visit when in Norway.
          </p>
        </section>

        {/* Day 9 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 9 19/05/2026 Oslo Rest Day
          </h2>
          <p className="text-gray-700 mt-2">
            Today is a well deserved rest day. Oslo is a great place to spend a
            day. Oslo sits between the Oslofjord and forested hills, making it
            perfect for outdoor lovers. You can take a fjord cruise, hike in
            Nordmarka, or visit the islands of the Oslofjord. The city has a
            sleek, modern feel with stunning architecture like the Opera House,
            Barcode Project, and the new Munch Museum. The waterfront area, Aker
            Brygge, is great for dining and people-watching.
          </p>
        </section>

        {/* Day 10 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 10 20/05/2026 Oslo-Copenhagen Crossing By Ferry Overnight.
          </h2>
          <p className="text-gray-700 mt-2">
            We will have the chance today to spend part of today enjoying Oslo
            before we catch an overnight crossing to Copenhagen. The ferry gives
            us a chance to admire the Oslofjord at night and who know maybe even
            catch a glimpse of the famous Northern Lights as we sail away from
            the Norwegian capital and start our homeward journey. We all have a
            private cabin aboard our DFDS Seaways ship. We will arrive in
            Copenhagen by 10am on the 19th.
          </p>
        </section>

        {/* Day 11 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 11 21/05/2026 Copenhagen-Tourist Day
          </h2>
          <p className="text-gray-700 mt-2">
            Arriving in Copenhagen around 10am, disembark from our crossing and
            we then have the day to yourselves to visit many of the wonderful
            sites Copenhagen has to offer, Ang get the must have photo with the
            famous little mermaid. Copenhagen, Denmark’s capital, sits on the
            coastal islands of Zealand and Amager. It’s linked to Malmo in
            southern Sweden by the Öresund Bridge. Indre By, the city&apos;s historic
            center, contains Frederiksstaden, an 18th-century rococo district.
            Then after a full day of site seeing we will meet back up at our
            hotel for the evening stopping @ Hotel Tiffany Copenhagen.
            <br />
            <br />
            We are now in Denmark starting to head home and what a journey we
            have been on. Meeting new friends and maybe reuniting with some you
            have travelle d with before. As on so many of our trips the real
            spirit of motorcycling shines through. Motorcyclists always seem to
            embrace these adventures and makes our moto seem so relevant.
            <br />
            <br />
            <b>Making Memories One Trip At A Time</b>
            <br />
            <br />
            Now please read on as our trip comes to its end on the next page.
          </p>
        </section>

        {/* Day 12 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 12 22/05/2026 Copenhagen-Lubeck 180 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Departing Copenhagen by 9am after our breakfast we will head for
            Jutland driving south via Storebaelt bridge & Liittle Belt Bridge,
            then continue through Flensburg into Germany. Down to Neumunster
            then carrying on to Lubeck arriving at our evenings accommodation @
            Park Inn by Radisson Lübeck.
          </p>
        </section>

        {/* Day 13 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 13 23/05/2026 Lubeck-Dortmund 250 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            Depart Lubeck after breakfast we will make our way South heading
            towards Hamburg and then down to Hanover names the city of music. We
            often stop here foe some traditional German Sausage and sauerkraut
            which make a perfect lunch. Then back in the saddle riding on to
            Dortmund for our final evening together, after an amazing two weeks
            of traveling we make our hotel stop @ Moods Hotel Durtmond
          </p>
        </section>

        {/* Day 14 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            Day 14 24/05/2026 Dortmund-Calais 270 Miles
          </h2>
          <p className="text-gray-700 mt-2">
            You know the drill now, Breakfast then depart by 9am. Today sees us
            spending our last day together as we ride back to Calais. Traveling
            back through Dusseldorf a vibrant city on the banks of the Rhine,
            skirting past Antwerp down past Bruges. Along past the famous
            beeches of Dunkerque before rolling into Calais to board our return
            crossing at 15.20.
          </p>
          <p className="text-gray-700 mt-2">
            We will regroup in Folkestone for you to retrieve your luggage from
            the support vehicle, before we say our goodbyes and all go our
            separate ways. After what has been a truly epic road trip.
          </p>
        </section>

        {/* Day 15 */}
      </div>

      {/* Pricing Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          The End 24/05/2026 Folkestone England
        </h2>
        <p className="text-gray-700 mt-2 ">
          This epic 14 day trip of a lifetime is sure to be one to remember for
          many years to come. Priced at <b>£2989</b> per bike and rider,
          Pillions welcome at an additional cost of <b>£389</b>. The trip
          Includes all hotel accommodation with own room including breakfast (
          Room may be a single or a double bed) depending on availability.
          Eurotunnel crossing both ways and the ferry crossing to and from
          Norway with your own cabin. No meals or drinks are included in this
          price. The support vehicle can transport soft luggage from Folkestone
          all the way round the route and back yo Folkestone. Leaving you free
          to ride everyday without luggage strapped to your bike. We don’t carry
          hard luggage as it can get scratched whilst being transported in the
          trailer.
        </p>
        <p className="text-gray-700 mt-2 font-bold">
          Are you liking the sound of this epic road trip? Has it been on your
          bucket list or in your head for a while.
          <br />
          Then please let us know your thoughts and any question&apos;s you may have,
          as I am sure we can answer them for you and hope you decide to join
          us.
        </p>

        <p className="text-md font-bold mt-2">
          You can reserve your place with a £389 deposit payable by using this
          link,
        </p>
        <p className="mt-6 ">
          <a
            href="https://buy.stripe.com/fZe4gx89g1Yo5jO7u5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-80 transition duration-300"
          >
            Book Your Place
          </a>
        </p>
      </section>
    </div>
  );
};

export default TripDetails;
