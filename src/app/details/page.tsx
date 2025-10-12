import { WizardProvider } from "@/hooks/useWizard";
import { PaymentLayout } from "./components/paymentLayout";
import { getFlightOffer } from "./components";
import { Footer } from "@/components/ui";
import { cookies } from "next/headers";

export interface FlightSegment {
  aircraft: {
    code: string;
    iataCode: string;
    terminal?: string;
  };
  arrival: {
    at: string;
    iataCode: string;
    terminal?: string;
  };
  carrierCode: string;
  departure: {
    at: string;
    iataCode: string;
    terminal?: string;
  };
  duration: string;
  id: string;
  flightNumber: string;
  numberOfStops: number;
  operating: {
    carrierCode: string;
  };
}



async function page({
  searchParams,
}: {
  searchParams: Promise<{
    offerId: string;
    origin: string;
    destination: string;
    departure_date: string;
    adults: number;
    page: number;
    page_size: number;
  }>;
}) {
  const params = await searchParams;
  const id = params?.offerId;
  const orgin = params?.origin;
  const destination = params?.destination;
  const adults = params.adults;
  const departure_date = params?.departure_date;
  const flightOffer = await getFlightOffer(id, {
    origin: params.origin,
    destination: params.destination,
    departure_date: params.departure_date,
    adults: Number(params.adults) || 1,
    page: Number(params.page) || 1,
    page_size: Number(params.page_size) || 10,
  });

  console.log(flightOffer);
  
  const airlineNameFa = flightOffer.AirlineNameFa;
  const flightItinerary: FlightSegment[] = flightOffer.itineraries[0].segments;
  const duration = flightOffer.itineraries[0].duration;
  const token = (await cookies()).get("arvan_access")?.value;
  const flightNumber = flightOffer.itineraries[0].segments[0].flightNumber;
  const {
    travelerPricing,
    price: { grandTotal: grandTotal },
  } = flightOffer;
  console.log(flightItinerary);
  
  return (
    <WizardProvider totalSteps={3}>
      <PaymentLayout
        duration={duration}
        destination={destination}
        from={orgin}
        flightItinerary={flightItinerary}
        adults={adults}
        totalPrice={Number(grandTotal)}
        travellers={travelerPricing}
        departure_date={departure_date}
        offerId={id}
        airlineNameFa={airlineNameFa}
      />
      <Footer />
    </WizardProvider>
  );
}

export default page;
