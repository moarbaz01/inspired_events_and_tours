import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`
    );
    const data = await response.json();
    console.log(data)
    return NextResponse.json("hii");
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
