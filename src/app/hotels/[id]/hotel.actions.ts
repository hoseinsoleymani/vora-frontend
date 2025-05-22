const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface HotelLocation {
  address: string;
  city: string;
  country: string;
}

interface HotelAmenity {
  name: string;
  icon: string;
}

interface HotelData {
  id: string;
  name: string;
  description: string;
  images: string[];
  rating: number;
  price: string;
  currency: string;
  amenities: HotelAmenity[];
  location: HotelLocation;
}

interface HotelRoom {
  id: string;
  name: string;
  price: {
    currency: string;
    total: string;
  };
  capacity: {
    adults: number;
    children: number;
  };
  amenities: string[];
  cancellationPolicy: string;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
}

interface SearchParams {
  nights: number;
  adults: number;
  children: number;
  rooms: number;
}

const staticData = {
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ],
  amenities: [
    { name: "Free Wi-Fi", icon: "wifi" },
    { name: "Free Breakfast", icon: "food" },
    { name: "Indoor Pool", icon: "pool" },
    { name: "Gym", icon: "gym" },
    { name: "Restaurant", icon: "restaurant" },
    { name: "Spa", icon: "spa" },
    { name: "Free Parking", icon: "parking" },
    { name: "Laundry Service", icon: "laundry" }
  ]
};

const convertToEUR = (amount: string, currency: string): string => {
  const rates: { [key: string]: number } = {
    'MXN': 0.055,
    'USD': 0.92,
    'GBP': 1.17,
    'EUR': 1
  };

  const rate = rates[currency] || 1;
  const amountInEUR = parseFloat(amount) * rate;
  return amountInEUR.toFixed(2);
};

export async function getHotelById(id: string): Promise<HotelData> {
  try {
    const response = await fetch(`${API_BASE_URL}/hotel/offer/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hotel data');
    }

    const data = await response.json();
    const hotel = data.hotel;
    const offer = data.offers[0];

    return {
      id: offer.id,
      name: hotel.name,
      description: offer.room.description.text,
      images: staticData.images,
      rating: hotel.rating?.rating || 4.5,
      price: convertToEUR(offer.price.total, offer.price.currency),
      currency: '€',
      amenities: staticData.amenities,
      location: {
        address: hotel.cityCode || "Address not available",
        city: hotel.cityCode || "City not available",
        country: hotel.address?.countryCode || "Country not available"
      }
    };
  } catch (error) {
    console.error('Error fetching hotel data:', error);
    throw error;
  }
}

export async function getHotelRooms(hotelId: string, searchParams: {
  nights?: number;
  adults?: number;
  children?: number;
  rooms?: number;
}): Promise<HotelRoom[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/hotel/offer/${hotelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hotel rooms');
    }

    const data = await response.json();
    const offer = data.offers[0];

    return [{
      id: offer.id,
      name: offer.room.typeEstimated.category,
      price: {
        currency: '€',
        total: convertToEUR(offer.price.total, offer.price.currency)
      },
      capacity: {
        adults: offer.guests.adults,
        children: 0
      },
      amenities: ["WiFi", "TV", "Safe", "AC"],
      cancellationPolicy: offer.policies.cancellations[0].description.text,
      breakfastIncluded: offer.boardType !== "ROOM_ONLY",
      freeCancellation: offer.policies.refundable.cancellationRefund === "REFUNDABLE_UP_TO_DEADLINE"
    }];
  } catch (error) {
    console.error('Error fetching hotel rooms:', error);
    throw error;
  }
} 