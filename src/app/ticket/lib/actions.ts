'use server';

import { StopInfo } from '../types';

// Server action برای دریافت داده‌های قیمت تقویم
export async function fetchPriceCalendarData(origin: string, destination: string, departureDate: string) {
  try {
    const res = await fetch(
      `http://5.161.155.143:5000/flight/calendar?origin=${origin}&destination=${destination}&departure_date=${departureDate}`,
      { cache: 'no-store' }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    
    return Object.keys(data).map((date) => ({
      date,
      price: data[date],
    }));
  } catch (error) {
    console.error("Error fetching price data: ", error);
    return [];
  }
}

// Server action برای دریافت داده‌های پرواز
export async function fetchFlightData(
  origin: string, 
  destination: string, 
  departureDate: string, 
  adults: number, 
  page: number, 
  pageSize: number
) {
  try {
    const url = `http://5.161.155.143:5000/flight/offers/search?origin=${origin}&destination=${destination}&departure_date=${departureDate}&adults=${adults}&page=${page}&page_size=${pageSize}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch flight data");
    
    const data = await res.json();
    const results = data.results.map((flight: any) => {
      // پردازش اطلاعات توقف‌ها
      const segments = flight.itineraries[0].segments;
      const stopCount = segments.length - 1;
      
      let stopInfo: StopInfo[] = [];
      if (stopCount > 0) {
        for (let i = 0; i < stopCount; i++) {
          const currentSegment = segments[i];
          const nextSegment = segments[i + 1];
          
          const departureTime = new Date(currentSegment.arrival.at);
          const arrivalTime = new Date(nextSegment.departure.at);
          const layoverDuration = Math.floor((arrivalTime.getTime() - departureTime.getTime()) / (1000 * 60)); // دقیقه
          
          stopInfo.push({
            airport: currentSegment.arrival.iataCode,
            duration: formatLayoverDuration(layoverDuration),
          });
        }
      }

      const departureSegment = segments[0];
      const arrivalSegment = segments[segments.length - 1];
      
      return {
        airline: departureSegment.carrierCode,
        airlineImage: departureSegment.carrierImage || "",
        departureTime: new Date(departureSegment.departure.at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        departureCity: departureSegment.departure.iataCode,
        arrivalTime: new Date(arrivalSegment.arrival.at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        arrivalCity: arrivalSegment.arrival.iataCode,
        duration: formatDuration(flight.itineraries[0].duration),
        price: `€ ${flight.price.grandTotal}`,
        flightNumber: segments.map((seg: any) => seg.number).join(' / '),
        stops: stopCount === 0 ? "Direct" : `${stopCount} Stop${stopCount > 1 ? 's' : ''}`,
        stopInfo: stopInfo,
      };
    });
    
    return {
      results,
      totalPages: data.total_pages
    };
  } catch (error) {
    console.error(error);
    return {
      results: [],
      totalPages: 0
    };
  }
}

// تابع کمکی برای فرمت کردن مدت زمان
function formatDuration(duration: string): string {
  const durationRegex = /PT(\d+)H(\d+)M/;
  const match = duration.match(durationRegex);
  
  if (match) {
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    return `${hours}h ${minutes}m`;
  }
  
  return duration;
}

// تابع کمکی برای فرمت کردن مدت زمان توقف
function formatLayoverDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
} 