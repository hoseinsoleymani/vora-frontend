import { WizardProvider } from "@/hooks/useWizard";
import { PaymentLayout } from "./components/paymentLayout";
import { getFlightOffer } from "./components";

export interface FlightSegment {
  aircraft: {
    code: string;
  };
  arrival: {
    at: string;
    iataCode: string;
  };
  carrierCode: string;
  departure: {
    at: string;
    iataCode: string;
    terminal?: string;
  };
  duration: string;
  id: string;
  number: string;
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
  const departure_date = params?.departure_date;
  const flightOffer = await getFlightOffer(id, {
    origin: params.origin,
    destination: params.destination,
    departure_date: params.departure_date,
    adults: Number(params.adults) || 1,
    page: Number(params.page) || 1,
    page_size: Number(params.page_size) || 10,
  });

  const flightItinerary: FlightSegment[] = flightOffer.itineraries[0].segments;
  const adults = params.adults;
  const travelerPricings: [] = flightOffer.travelerPricings;
  const totalPrice = flightOffer.price.total
  

  console.log("Full Flight Offer:", flightOffer);

  return (
    <WizardProvider totalSteps={3}>
      <PaymentLayout
        destination={destination}
        from={orgin}
        flightItinerary={flightItinerary}
        adults={adults}
        totalPrice={totalPrice}
        travellers={travelerPricings}
        departure_date={departure_date}
        offerId={id}
      />
    </WizardProvider>
  );
}

export default page;
