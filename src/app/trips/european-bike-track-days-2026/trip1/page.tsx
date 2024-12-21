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
    <div>
      <h1 className="text-3xl font-semibold text-center text-primary mb-4">
        Folembray France Motorcycle Road Trip & Track Day
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        <strong>Date:</strong> May 27th 2026 - May 29th 2026
      </p>

      {/* Road Trip Content */}
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 mt-2">
            We all meet at Folkestone at 11.30 am on May 27th and sort out all
            the tickets and paperwork ready to board the 1.20 train to Calais.
            Once on the other side in France we will regroup and head to our
            overnight stay in Soissons. Which is about a 3hr ride depending on
            speeds. From experience most riders want to make their own way to
            Soissons rather than follow the support vehicle. Little boring at
            70mph on a motorway. There are route options to Soisson&apos;s and
            most choose the more exciting route. We give you printed out map
            instructions if you need them. Once checked in, the rest of the day
            is your own to spend as you wish, but most people seem to just want
            to relax and have something to eat and a couple of drinks before
            getting an early night ready for the track day. There are a
            selection of restaurant&apos;s within a 5-minute walk. And a great
            Chinese buffet next door to the hotel that offers great food and for
            £20 you get all you can eat and 3 beers. This one seems to be most
            people&apos;s choice.
          </p>
          <p className="text-gray-700 mt-2">
            Thursday morning there is a continental breakfast on offer at the
            hotel for an additional cost. We will depart at 8.30 am and travel
            about half an hour to the Circuit De Folembray. Where we will book
            in and cover over the health and safety and track rules etc. In the
            morning we will be going out in groups so that everyone can get a
            feel for the circuit and pace they are comfortable at. There are
            never more than 20 bikes on track at any one time. And being a
            fairly long track, it means you will not be bunched up or feel
            intimidated. And the best thing about the track day is its an open
            pit meaning you can go out as often as you like. Not like many track
            days.
          </p>
        </section>

        <section>
          <p className="text-gray-700 mt-2">
            There is a snack bar at the circuit with a selection of drinks and
            snacks on offer for you to purchase. The track day ends at 5pm and
            we then return to the hotel to freshen up, we try to all go into
            town as a group and have a few drinks and some food and talk about
            the day&apos;s high and lows. This will mean getting some taxis
            which are not included in the price. These can be great nights and a
            great way to make new friends. But people are free to enjoy their
            evening as they wish.
          </p>
        </section>
        <section>
          <p className="text-gray-700 mt-2">
            On Friday morning the support vehicle will depart by 9.30am for our
            return crossing from Calais at 15.20. Most people seem to make their
            own way back for the crossing in groups they came with or with new
            groups of friends they have made on the trip. Our tickets are open
            for a return crossing any time on the 24th, but if you return at a
            different time on the day there may be an admin charge payable to
            Eurotunnel so you are free to make your own way back if you wish or
            travel back as part your own group or follow the support vehicle.
          </p>
        </section>
        <section>
          <p className="text-gray-700 mt-2">
            Some of the things that this trip will have are a support vehicle
            with three spare seats and a trailer for three bikes. We carry a
            small selection of tools etc to try and assist where we can but
            would suggest European bike cover . A professional photographer will
            be at the track who will be taking pictures of everyone all day ,
            and upload them to a website a few days after the trip so you can
            download as many pictures as you wish. Full public liability
            insurance, circuit marshals and a medical team on standby at the
            circuit.
          </p>
          <p className="text-gray-700 mt-2">
            The full cost of the trip is just £449 per bike with the rider, and
            your accommodation is based on sharing a twin room. Single occupancy
            rooms available at additional cost of £80 or if traveling with a
            pillion the same additional cost applies. We hope you like the sound
            of this amazing trip and decide to join us. You can secure your
            place with a £149 deposit paid by debit or credit card.
          </p>
        </section>

        {/* Pricing Section */}
        <section>
          <p className="text-gray-700 mt-2 font-bold">
            To reserve you place with a £149 deposit Simply click this link.
          </p>
          <a
            href="https://buy.stripe.com/9AQfZf3T0dH6eUoeWn"
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
