import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the keyword from the query string
    const searchParams = request.nextUrl.searchParams;
    const keyword = searchParams.get("keyword");

    // Only proceed if keyword is provided
    if (!keyword) {
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    // Forward the request to the actual API
    const apiUrl = `http://5.161.155.143:5000/flight/location/search?keyword=${encodeURIComponent(
      keyword
    )}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Get the response data
    const data = await response.json();

    // Return the data with appropriate headers
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in flight location search API:", error);
    return NextResponse.json(
      { error: "Failed to fetch location data" },
      { status: 500 }
    );
  }
}
