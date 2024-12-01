import React from "react";

const Page = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8  min-h-screen">
      <div className=" p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">
          NC500 Motorcycle Road Trip
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          <strong>Date:</strong> June 15th 2025 - June 20th 2025
        </p>

        {/* Road Trip Content */}
        <div className="space-y-8">
          <section>
            <p className="text-gray-700 mt-2">
              FULLY BOOKED SEE JULY 13TH TRIP FOR SPACES After the amazing
              success of these trips in 2022/2023 @ 2024 we are excited to e
              returning for 2025 and give you something positive to look forward
              to.
            </p>
            <p className="text-gray-700 mt-2">
              Due to the nature of much of the roads along the NC500 we have
              limited this trip to 30 bikes to minimize congestion etc, and be
              respectful to the local residents and other road users. Each day
              we will not be traveling in large groups as this really doesn&apos;t
              work on some of the roads but people tend to do their own thing
              during the day and meet back up with everyone at the evening&apos;s
              campsite. At each campsite there will be a 3-man tent for you
              along with single camp beds with legs that get you off the floor..
              You will be expected to help with the putting up and taking down
              of your tent each day. This takes a couple of minutes as these are
              easy pop up style tents.You will need to bring your own bedding
              and pillows etc. But we do also have a postal option explained at
              the bottom of the email. Max number of people per tent is two but
              if you travel alone you will be in a tent on your own.
            </p>
          </section>

          <section>
            <p className="text-gray-700 mt-2">
              Below is the route for the trip, and the daily destinations and
              mileage. Obviously, this trip is about the experience of driving
              the NC500 and getting to see as many of the local sites and beauty
              spots. It is not about getting from start to finish as fast as we
              can. There will be the opportunity to make stops along the way
              each day to experience as much as you can of what this epic route
              and countryside has to offer. Below are the campsites we will be
              stopping at, all have showers and toilets, and hot food available
              at all but the inverness site, but there are shops and takeaways
              nearby
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 1: Inverness
            </h2>
            <p className="text-gray-700 mt-2">
              We will meet and camp at Inverness at 5pm on the Sunday evening at
              Brunchcrew camping site. This will give us a chance to meet
              everyone and have a chat and settle in for a night&apos;s rest before
              the road trip starts on Monday.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 2 Inverness to Gairlock - Distance 150 miles approximately.
            </h2>
            <p className="text-gray-700 mt-2">
              Depart Inverness early about 9am and start on the road towards our
              second nights camping at Gairlock. Stopping at Sands Caravan &
              Camping site.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 3 Gairlock to Durness - Distance 150 miles approximately.
            </h2>
            <p className="text-gray-700 mt-2">
              Depart to continue our trip along the NC500 to Durness stopping
              for the evening at Clatchtollbeach Campsite
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 4 Durness to Helmsdale. Distance 140 miles approximately
            </h2>
            <p className="text-gray-700 mt-2">
              Another day on the trip sees us heading to Thursobay caravan &
              camping site.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Day 5 Helmsdale to Inverness. Distance 120 miles approximately.
            </h2>
            <p className="text-gray-700 mt-2">
              This is our final day on the NC500 and we have a steady drive back
              to inverness where we stop for the last night and make our
              separate ways home on Friday If you would like to be part of this
              epic motorbike road trip the cost per bike including a pillion is
              just £349 this covers all your camping fees the tent hire and bed
              and chairs., if you have other people on their own bikes that wish
              to go with you please message me to discuss.. We also give you a
              printed information sheet for each day and your own NC500 Guide
              book.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-2">
              Please note that due to the large numbers of people attending we
              work very much as a team and will require your assistance in
              erecting and taking the pop-up tents down each day. We do not ask
              you to pack them away, just get them down and we do the rest. This
              takes a few minutes and is very simple. We are on hand to assist
              and show you how simple this process really is. If you have any
              questions please let me know.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-2">
              There has been a lot of interest in it as I think that everyone
              wants something to look forward to next year. Would you be
              traveling alone or with a pillion or in a group etc. I can work
              out a deal for you if you let me know.
            </p>
          </section>

          <section>
            <p className="text-gray-700 mt-2">
              We also offer a service where you can post us your clothes,
              bedding and stuff before the trip. We bring it up in the support
              van and transport it back at the end and post it back to you .
              Save you carrying it on the bike, people like this option and we
              charge you for the return postage. The cost of this trip is £349
              per bike. Please let me know your thoughts even if the trip is not
              for you. It would be nice to get some feedback and views. Regards
            </p>
          </section>

          {/* Highlights 

          {/* Pricing Section */}
          <section>
            <p className="text-gray-700 mt-2">
              TRIP FULLY BOOKED PLACES AVAILABLE ON JULY 13TH TRIP
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
