'use server';

const API_BASE_URL = "https://api.voratrip.com";

const formatDateForAPI = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${year}/${month}/${day}`;
};

export interface HotelOffer {
  type: string;
  hotel: {
    type: string;
    hotelId: string;
    chainCode: string;
    dupeId: string;
    name: string;
    cityCode: string;
    latitude: number;
    longitude: number;
    rating: number;
  };
  available: boolean;
  offers: Array<{
    id: string;
    checkInDate: string;
    checkOutDate: string;
    rateCode: string;
    rateFamilyEstimated: {
      code: string;
      type: string;
    };
    commission: {
      percentage: string;
    };
    room: {
      type: string;
      typeEstimated: {
        category: string;
        beds: number;
        bedType: string;
      };
      description: {
        text: string;
        lang: string;
      };
    };
    guests: {
      adults: number;
    };
    price: {
      currency: string;
      base: string;
      total: string;
      taxes: Array<{
        code: string;
        amount: string;
        currency: string;
        included: boolean;
      }>;
      variations: {
        average: {
          base: string;
        };
        changes: Array<{
          startDate: string;
          endDate: string;
          total: string;
        }>;
      };
    };
    policies: {
      cancellations: Array<{
        description: {
          text: string;
        };
        policyType: string;
      }>;
      paymentType: string;
      refundable: {
        cancellationRefund: string;
      };
    };
    self: string;
  }>;
  self: string;
}

export interface HotelResponse {
  hotels: HotelOffer[];
  totalCount: number;
  totalPages: number;
}

interface ErrorResponse {
  errors: Array<{
    code: number;
    detail: string;
  }>;
}

interface ApiResponse {
  results: Array<{
    type: string;
    hotel: {
      type: string;
      hotelId: string;
      chainCode: string;
      dupeId: string;
      name: string;
      cityCode: string;
      latitude: number;
      longitude: number;
      rating: number;
    };
    available: boolean;
    offers: Array<{
      id: string;
      checkInDate: string;
      checkOutDate: string;
      rateCode: string;
      rateFamilyEstimated: {
        code: string;
        type: string;
      };
      commission: {
        percentage: string;
      };
      room: {
        type: string;
        typeEstimated: {
          category: string;
          beds: number;
          bedType: string;
        };
        description: {
          text: string;
          lang: string;
        };
      };
      guests: {
        adults: number;
      };
      price: {
        currency: string;
        base: string;
        total: string;
        taxes: Array<{
          code: string;
          amount: string;
          currency: string;
          included: boolean;
        }>;
        variations: {
          average: {
            base: string;
          };
          changes: Array<{
            startDate: string;
            endDate: string;
            total: string;
          }>;
        };
      };
      policies: {
        cancellations: Array<{
          description: {
            text: string;
          };
          policyType: string;
        }>;
        paymentType: string;
        refundable: {
          cancellationRefund: string;
        };
      };
      self: string;
    }>;
    self: string;
  }>;
  count: number;
  total_pages: number;
}

interface LocationResponse {
  iataCode?: string;
  address?: {
    cityCode: string;
  };
}

export async function getHotels(
  city: string,
  checkInDate: string,
  checkOutDate: string,
  page: number = 1,
  limit: number = 10
): Promise<HotelResponse> {
  try {
    const formattedCheckInDate = formatDateForAPI(checkInDate);
    const params = new URLSearchParams({
      city,
      check_in_date: formattedCheckInDate,
      adults: '1',
      room_quantity: '1',
      page: page.toString(),
      page_size: limit.toString()
    });

    const response = await fetch(`${API_BASE_URL}/hotel/offer/search?${params}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null) as ErrorResponse | null;
      if (errorData?.errors) {
        const errorMessages = errorData.errors.map((err) => {
          switch (err.code) {
            case 11226:
              return "No room or rate found for the selected hotel(s)";
            case 12247:
              return "No rate available for the requested number of guests. Please reduce the number of guests";
            case 1257:
              return "Invalid hotel code";
            default:
              return err.detail || "Unknown error fetching hotel information";
          }
        });
        throw new Error(errorMessages.join("\n"));
      }
      throw new Error(`Error fetching hotel information: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as ApiResponse;

    if (!data.results?.length) {
      return {
        hotels: [],
        totalCount: 0,
        totalPages: 0
      };
    }

    const hotels = data.results.map((result) => ({
      type: result.type,
      hotel: {
        type: result.hotel?.type,
        hotelId: result.hotel?.hotelId,
        chainCode: result.hotel?.chainCode,
        dupeId: result.hotel?.dupeId,
        name: result.hotel?.name,
        cityCode: result.hotel?.cityCode,
        latitude: result.hotel?.latitude,
        longitude: result.hotel?.longitude,
        rating: result.hotel?.rating
      },
      available: result.available,
      offers: result.offers?.map((offer) => ({
        id: offer.id,
        checkInDate: offer.checkInDate,
        checkOutDate: offer.checkOutDate,
        rateCode: offer.rateCode,
        rateFamilyEstimated: offer.rateFamilyEstimated,
        commission: offer.commission,
        room: {
          type: offer.room?.type,
          typeEstimated: offer.room?.typeEstimated,
          description: offer.room?.description
        },
        guests: offer.guests,
        price: {
          currency: offer.price?.currency,
          base: offer.price?.base,
          total: offer.price?.total,
          taxes: offer.price?.taxes,
          variations: offer.price?.variations
        },
        policies: {
          cancellations: offer.policies?.cancellations,
          paymentType: offer.policies?.paymentType,
          refundable: offer.policies?.refundable
        },
        self: offer.self
      })) || [],
      self: result.self
    }));

    return {
      hotels,
      totalCount: data.count || 0,
      totalPages: data.total_pages || Math.ceil((data.count || 0) / limit),
    };

  } catch (error) {
    console.error('Error fetching hotels:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching hotel information: ${error.message}`);
    }
    throw new Error('Unknown error fetching hotel information');
  }
}

export async function getLocationCode(keyword: string): Promise<string | null> {
  if (!keyword) return null;

  try {
    const response = await fetch(
      `${API_BASE_URL}/hotel/location/search?keyword=${encodeURIComponent(keyword)}`,
      { cache: 'no-store' }
    );

    if (!response.ok) return null;

    const data = await response.json() as LocationResponse[];
    if (!data?.length) return null;

    const location = data[0];
    return location.iataCode || location.address?.cityCode || null;

  } catch (error) {
    console.error('Error fetching location code:', error);
    return null;
  }
}

interface WeatherData {
  date: string;
  temp: string;
  condition: string;
  icon: string;
}

export async function fetchWeatherData(): Promise<WeatherData[]> {
  try {
    const weatherConditions = [
      { temp: '22°C', condition: 'Sunny', icon: '☀️' },
      { temp: '18°C', condition: 'Partly Cloudy', icon: '⛅' },
      { temp: '15°C', condition: 'Cloudy', icon: '☁️' },
      { temp: '12°C', condition: 'Rainy', icon: '🌧️' },
      { temp: '8°C', condition: 'Stormy', icon: '⛈️' },
      { temp: '25°C', condition: 'Hot', icon: '🔥' },
      { temp: '5°C', condition: 'Cold', icon: '❄️' }
    ];
    
    const today = new Date();
    return Array.from({ length: 14 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const { temp, condition, icon } = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      return {
        date: date.toISOString().split('T')[0],
        temp,
        condition,
        icon
      };
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
} 