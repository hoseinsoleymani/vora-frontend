import { Button } from "@/components/ui/button";

interface FlightPriceProps {
  price: string;
}

const FlightPrice: React.FC<FlightPriceProps> = ({ price }) => {
  return (
    <div className="flex w-2/6 items-center justify-center space-x-5">
      <div className="text-xl font-semibold text-gray-900">{price}</div>
      <form action="/ticket/select-flight" method="POST">
        <input type="hidden" name="flightPrice" value={price} />
        <Button type="submit" variant="default" size="sm">
          Select Flight
        </Button>
      </form>
    </div>
  );
};

export { FlightPrice };