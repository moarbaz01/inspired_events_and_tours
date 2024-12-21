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

const Page = () => {
  return (
    <div >
      <h1 className="text-3xl font-semibold text-center text-primary mb-4">
        SPAIN Pyrenees Motorcycle Trip
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        <strong>Date:</strong> 21ST jULY 2025 - 29th July 2025
      </p>

      {/* Road Trip Content */}
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 mt-2">
            This epic trip will start on the 20th July when we meet at around
            2pm at Plymouth. Our crossing with Brittany Ferries departs at
            16.45. Once on board we will check into our own cabins and get ready
            to settle in for the crossing that ends with us arriving at
            Santander at approximately 14.00 on the 21st. We will regroup and
            disembarked and take a gentle ride too our fist nights stop near
            Pamplona @ Hotel Albert
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 3 23/07/2025</h2>
          <p className="text-gray-700 mt-2">02 Pamplona-France-Pamplona</p>
          <p className="text-gray-700 mt-2">Start/finish Pamplona</p>
          <p className="text-gray-700 mt-2">Distance 195 miles</p>
          <p className="text-gray-700 mt-2">Riding time 6 hours</p>
          <p className="text-gray-700 mt-2">
            This is where our road trip starts riding route 02. From Pamplona
            into the Pyrenees, across the epic Col de la Pierre St Martin,
            riding along the quiet, twisty French side of the mountains to
            St-Jean- Pied-de-Port, then back on the even twistier Col de Garzéla
            eventually returning back to Pamplona. We will all reconvene later
            at the same hotel as the previous night at Hotel Albert for a
            relaxing evening together as a group.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 4 24/07/2025</h2>
          <p className="text-gray-700 font-bold mt-2">01 BASQUE PYRENEES</p>
          <p className="text-gray-700 mt-2">Start/finish Pamplona</p>
          <p className="text-gray-700 mt-2">Distance 175 miles</p>
          <p className="text-gray-700 mt-2">Riding time 5.5 hours</p>
          <p className="text-gray-700 mt-2">
            Never mind France or Spain, this route’s Basque all the way…
            regardless of the national flags. It’s a full day of glorious gorges
            and passes, mostly on the Spanish side of the mountains , with a
            short detour to the French side – but ask the locals and it’s all
            one country. On completion of this stunning loop it&apos;s time for
            a quick 180km ride over to Ainsa to our nights accommodation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 5 25/07/2025</h2>
          <p className="text-gray-700 mt-2">Start/finish Ainsa</p>
          <p className="text-gray-700 mt-2">Distance 235 miles</p>
          <p className="text-gray-700 mt-2">Riding time 6 hours</p>
          <p className="text-gray-700 mt-2">
            A longer day in the saddle, sweeping through the foothills of the
            Pyrenees before climbing into the peaks with mile after mile of
            amazing riding.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 6 26/07/2025</h2>
          <p className="text-gray-700 font-bold mt-2">AINSA-GIRONA</p>
          <p className="text-gray-700 mt-2">
            Start/finish Ainsa/Girona Distance 260 miles
          </p>
          <p className="text-gray-700 mt-2">Riding time 5 hours</p>
          <p className="text-gray-700 mt-2">
            We will depart Ainsa taking on some of the epic pass before heading
            towards Rippol with mile after mile of rolling roads and mountain
            roads before arriving at our evenings accommodation in Girona
            stopping at Hotel Costabella
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 7 27/07/2025</h2>
          <p className="text-gray-700 font-bold mt-2">GIRONA-GIRONA</p>
          <p className="text-gray-700 mt-2">
            Short blast from Girona to get us back on track for Today&apos;s
            ride over route 06 on our map.
          </p>
          <p className="text-gray-700 mt-2">Start/Finish Girona-Girona</p>
          <p className="text-gray-700 mt-2">Distance 200 miles</p>
          <p className="text-gray-700 mt-2">Riding time 6 hours</p>
          <p className="text-gray-700 mt-2">
            Some of the twistiest roads you’ll ever ride – wide, well surfaced
            and guaranteed to put a smile on your face. Spectacular views are
            just a part of today&apos;s package. We will at the end of this epic
            day return to stay at Hotel Costabella.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 8 28/07/2025</h2>
          <p className="text-gray-700 font-bold mt-2">
            Start Girona -Finish Zaragoza{" "}
          </p>
          <p className="text-gray-700 mt-2">Distance 240 Miles</p>
          <p className="text-gray-700 mt-2">Start/Finish Girona-Girona</p>
          <p className="text-gray-700 mt-2">Riding Time 5 hrs</p>
          <p className="text-gray-700 mt-2">
            We will now start to clock up some miles as we start to wind our way
            back into Northern Spain stopping at the city of Zaragoza
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-primary">Day 9 29/07/2025</h2>
          <p className="text-gray-700 font-bold mt-2">Zaragoza - Santander</p>
          <p className="text-gray-700 mt-2">Distance 260 Miles</p>

          <p className="text-gray-700 mt-2">
            Today we will leave our hotel in Zaragoza and hit the road to get
            back towards Santander to get ready to board Board our crossing to
            Plymouth. Once we arrive in Santander there well be some free time
            to grab some refreshments before boarding our 5pm ferry to which
            will arrive 29th 2pm
          </p>
        </section>

        <section>
          <p className="text-gray-700 mt-2">
            This amazing road trip is priced at £1979 per bike and rider, If you
            are traveling with a pillion there is an additional charge of £469.
            The trip includes your crossing both ways with Brittany Ferries.
            With your own cabin to allow you to get some sleep in privacy. 7
            nights accommodation at the hotels stated above. Breakfast is
            included. But any other meals and drinks are at your own expense The
            trip is limited to 20 bikes and is classed as a self guided
            tour,with riders traveling routes and between A-B without a guide.
            The support vehicle can transport all your luggage from Portsmouth
            and back meaning you are able to ride your bike without luggage etc
            strapped to it. This has really worked well on our other tours.
          </p>
        </section>

        {/* Highlights 

          {/* Pricing Section */}
        <section>
          <p className="text-gray-700 mt-2 font-semibold">
            If you are interested in joining us and wish to reserve you place
            please use the link below to pay the £389 deposit t o secure your
            place. The balance will be due 8 weeks before departure.
          </p>
          <a
            href="https://buy.stripe.com/3cs9ARahocD2aE829m"
            className="mt-8 block w-fit px-3 py-3 text-center bg-primary text-white rounded-lg"
          >
            Reserve Your Place Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default Page;
