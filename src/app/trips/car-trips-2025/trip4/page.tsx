import React from "react";

const RoadTripDetails = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8  min-h-screen">
      {/* Trip Banner Image (Optional) */}

      {/* Road Trip Details Content */}
      <div className=" p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">
          France/Austria/Switzerland Car Road Trip
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          <strong>Date:</strong> 27th August 2025 - 29th August 2025
        </p>

        {/* Itinerary Section */}
        <div className="space-y-8">
          {/* Day 1 */}
          <section>
            <p className="text-gray-700 mt-2">
              We all meet at Folkestone at 11.30 am on August 27th and sort out
              all the tickets and paperwork ready to board the 1.20 train to
              Calais. Once on the other side in France we will regroup and head
              to our overnight stay in Soissons. Which is about a 3hr drive
              depending on speeds. From experience most drivers want to make
              their own way to Soissons rather than follow the support vehicle.
              Little boring at 70mph on a motorway. There are route options to
              Soisson&apos;s and most choose the more exciting route. We give you
              printed out map instructions if you need them. Once checked in,
              the rest of the day is your own to spend as you wish, but most
              people seem to just want to relax and have something to eat and a
              couple of drinks before getting an early night ready for the track
              day. There are a selection of restaurant&apos;s within a 5-minute walk.
              And a great Chinese buffet next door to the hotel that offers
              great food and for £20 you get all you can eat and 3 beers. This
              one seems to be most people&apos;s choice..
            </p>
            <p className="text-gray-700 mt-2">
              Thursday morning there is a continental breakfast on offer at the
              hotel for an additional cost. We will depart at 8.30 am and travel
              about half an hour to the Circuit De Folembray. Where we will book
              in and cover over the health and safety and track rules etc. In
              the morning we will be going out in groups so that everyone can
              get a feel for the circuit and pace they are comfortable at. There
              are never more than 15 cars on track at any one time. And being a
              fairly long track, it means you will not be bunched up or feel
              intimidated. And the best thing about the track day is its an open
              pit meaning you can go out as often as you like. Not like many
              track days.
            </p>
          </section>

          {/* Day 2 */}
          <section>
            <p className="text-gray-700 mt-2">
              There is a snack bar at the circuit with a selection of drinks and
              snacks on offer for you to purchase. The track day ends at 5pm and
              we then return to the hotel to freshen up, we try to all go into
              town as a group and have a few drinks and some food and talk about
              the day&apos;s high and lows. This will mean getting some taxis which
              are not included in the price. These can be great nights and a
              great way to make new friends. But people are free to enjoy their
              evening as they wish.
            </p>
          </section>

          {/* Day 3 */}
          <section>
            <p className="text-gray-700 mt-2">
              On Friday morning the support vehicle will depart by 9.30am for
              our return crossing from Calais at 15.20. Most people seem to make
              their own way back for the crossing in groups they came with or
              with new groups of friends they have made on the trip. Our tickets
              are open for a return crossing any time on the 24th, but if you
              return at a different time on the day there may be an admin charge
              payable to Eurotunnel so you are free to make your own way back if
              you wish or travel back as part your own group or follow the
              support vehicle.
            </p>
          </section>

          {/* Day 4 */}
          <section>
            <p className="text-gray-700 mt-2">
              Some of the things that that this track day offers . A
              professional photographer will be at the track who will be taking
              pictures of everyone all day , and upload them to a website a few
              days after the trip so you can download as many pictures as you
              wish. Full public liability insurance, circuit marshals and a
              medical team on standby at the circuit.
            </p>
          </section>

          {/* Day 5 */}
        </div>

        {/* Pricing Section */}
        <section className="mt-12">
          <p className="text-lg  text-gray-800 mt-4">
            The full cost of the trip is just <b>£579</b> per car and driver a
            passenger can join at the additional cost of <b>£80</b> .We hope you
            like the sound of this amazing trip and decide to join us. You can
            secure your place with a <b>£149</b> deposit paid by debit or credit
            card.. Please let me know your thoughts Regards Adam
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-4">
            A £489 deposit is required to reserve your place. Balance due 8
            weeks prior to departure.
          </p>

          <a
            href="https://buy.stripe.com/fZe00hgFM46wbIcg0b"
            className="mt-8 block w-fit px-3 py-3  bg-primary text-white rounded-lg"
          >
            Reserve Your Place Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default RoadTripDetails;
