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
      {/* Top Image */}

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
            A full day on our ferry crossing to Santander, giving us a chance to
            get to know each other and discuss this amazing road trip that we
            are heading off on. We will get a good night&apos;s sleep in our
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
            regroup before making our way down the N-611 through Northern Spain
            passing through Reinosa and Salamanca. Making refreshment stops
            along the way. We will arrive by early evening at our overnight stop
            near Caceres stopping at Hotel AHC. Today is our furthest ride as we
            need to eat up the miles to head towards Africa.
          </p>
        </section>

        {/* Day 4 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 4: NOVEMBER 16TH 2025 - Mileage: 280
          </h2>
          <p className="text-gray-700 mt-2">
            A full day&apos;s riding today, traveling as a group will give us
            some great photo opportunities along today&apos;s route. We will
            depart Caceres at around 9am and continue our journey towards
            Gibraltar along the E-803 passing through some stunning Spanish
            towns and villages. Stopping for the evening at Hotel Mir Octavio
            Algeciras 15 miles from Gibraltar.
          </p>
        </section>

        {/* Day 5 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 5: NOVEMBER 17TH 2025 - Mileage: 185
          </h2>
          <p className="text-gray-700 mt-2">
            An early start around 8am sees us board our ferry over to Africa
            from Gibraltar over to the main port of Morocco @ Tangiers. Then our
            first day&apos;s riding in Africa traveling along the western
            Atlantic coast taking in its amazing views and scenery as we start
            to head towards the real Morocco and start to see the Mediterranean
            ambiance fade away behind us. Our evening will end with an overnight
            stop in Fez @ Hotel Volubilis. Fez is called Morocco&apos;s
            “spiritual heart.”
          </p>
        </section>

        {/* Day 6 */}
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 6: NOVEMBER 18TH 2025 - Rest Day
          </h2>
          <p className="text-gray-700 mt-2">
            After some breakfast as a group the day is yours to do as you wish.
            There will be the option to join a local guide to show us round the
            Historic Medina which can be like walking round a labyrinth with its
            narrow streets, bustling souks (markets), and of course find a shop
            to buy your obligatory traditional hat of Morocco, the red fez
            (Tommy Cooper). You are welcome to do your own thing after the
            guided tour, or you are welcome to spend the whole day as you wish.
            Our hotel accommodation will be at the same hotel as our previous
            night.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 7. NOVEMBER 19TH 2025; Mileage 205
          </h2>
          <p className="text-gray-700 mt-2">
            After breakfast at the hotel we set of for a day of real adventure
            traveling south climbing towards the plateau of The Middle Atlas
            stopping for a drink break and a photo opportunity. Then pushing on
            south west cutting over The High Atlas themselves, before passing
            through the stunning Gorge de Ziz before finally arriving at our
            overnight stop @ Ighiz Inn Resort Errachidia.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 8. NOVEMBER 20TH 2025: Mileage 185
          </h2>
          <p className="text-gray-700 mt-2">
            Leaving Errachida we have an epic days riding ahead of us as our
            journey starts to head West to have some time one desert tracks at
            Jebel Sahro before setting off to the stunning Todra Gorges (the
            fault line between the High Atlas Mountains) with its winding
            mountain roads this is a real must for all ride. From here we shoot
            over to tackle the snaking passes of Valley Du Dades Later we will
            be heading to our overnight accommodation in Ouarzazate stopping @
            Kasbah Zitoune.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 9. NOVEMBER 21ST 2025: Mileage 195
          </h2>
          <p className="text-gray-700 mt-2">
            Leaving Ouarzazate we will head North to enjoy the breath taking
            mountain passes of Tiki-n-Tichna this high mountain pass with a
            maximium altitude of 2260 meters. It connects Ouarzazate to
            Marrakech. The route is known for its dramatic landscapes, and
            stunning views of rugged mountains, terraced fields. With miles and
            miles of winding roads, making it both a scenic and challenging
            ride. Then we will have a few hours ride to the City of Beni Mellal
            located at the foot of the Middle Atlas Mountains a city that
            combines natural beauty, history, and modern development. Our
            evenings rest will be @ the Hotel Golden Flora.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 10. NOVEMBER 22ND 2025: Mileage 185
          </h2>
          <p className="text-gray-700 mt-2">
            Having had an evenings rest we will depart Beni Mellal and take a
            quick blast over to the city we have to visit when in Morocco
            Casablanca. Famous to many from the film of the same name this city
            attracts visitors from all over the world. The city offers a unique
            blend of Moroccan and French culture. Making it a fascinating place
            to visit. We will check into our accommodation @ Hotel Relax the the
            rest of the day is yours to explore and enjoy as you wish. This is
            our last real chance to absorb the atmosphere of Morocco as we start
            our homebound journery the next day.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 11. NOVEMBER 23RD 2025: Mileage 200
          </h2>
          <p className="text-gray-700 mt-2">
            Once we have had breakfast we will travel north along the coastal
            road to catch our crossing at Tangiers. This days riding will allow
            us to see some more of Morocco including Rabat and Assilah. Before
            catching our ferry to Gibraltar.. After the short crossing we will
            regroup and travel onwards to our evenings accomodation in Seville @
            Hotel Las Casas
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 12. NOVEMBER 24th 2025: Mileage 270
          </h2>
          <p className="text-gray-700 mt-2">
            After breakfast we will depart Seville and wind our way heading
            North towards the beautiful and historic town of Salamanca traveling
            along Spanish rural roads and stopping along way for a rest and
            photo opportunity. Before arriving at our hotel @ Alameda Palace.
            The town is well worth a visit with its renowned cultural scene and
            various local bars and restaurants.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 13. NOVEMBER 25th 2025 Mileage 225
          </h2>
          <p className="text-gray-700 mt-2">
            An early start today will see us departing Salamanca at around 6am
            as we will need to be in Bilbao by around 11am to allow us to catch
            out 1pm boat to Portsmouth. We will have cabins to enable us to get
            some well earned rest after what will have been an epic adventure
            and made memories that will last a life time.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">
            DAY 14. NOVEMBER 26TH 2025
          </h2>
          <p className="text-gray-700 mt-2">
            Our final day together sees us onboard or Brittany Ferry crossing.
            Relaxing and sharing memories of the amazing road trip we have just
            completed. We are sure that just like other trips we have run in the
            past that many new friend ships will be formed. We will arrive back
            in Portsmouth at around 9pm.
          </p>
        </section>
      </div>

      {/* Pricing Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          MOTORCYCLE OVERLAND TRIP NOVEMBER 13/26TH 2025
        </h2>
        <p className="text-gray-700 mt-2">
          This once-in-a-lifetime trip is aimed at all levels of riding
          experience and is ideally aimed at adventure-style bikes, allowing you
          to get the most out of this trip. However, this trip can be completed
          on any motorcycle if you feel confident in your own abilities. There
          will be a support vehicle traveling with us at all times, with a box
          trailer to carry your luggage.
        </p>
        <p className="text-xl font-semibold text-gray-800 mt-4">
          Cost: £1889 per bike (without pillion)
        </p>
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
        <p className="text-md font-semibold text-gray-800 mt-4">
          To book your place we require a deposit of £389.00 payable by card
          using the secure link below . Places are limited to 20 and demand
          often out strips availability, so please act fast and secure your
          place on this once in a lifetime road trip.
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
  );
};

export default TripDetails;
