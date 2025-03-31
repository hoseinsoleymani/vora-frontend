import { Button } from "@/components/ui";
import { Add12Regular, Subtract12Regular } from "@fluentui/react-icons";

interface CounterProps {
  lable: string;
  subLable: string;
  icon: React.ReactNode;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  spacing?: "normal" | "wide";
}

function Counter({
  lable,
  subLable,
  icon,
  count,
  onIncrement,
  onDecrement,
  spacing = "normal",
}: CounterProps) {
  return (
    <div
      className={`flex items-center ${
        spacing === "wide" ? "justify-between gap-8" : "justify-between"
      }`}
    >
      <div>
        <p className="font-semibold">{lable}</p>
        <p className="text-sm">({subLable})</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="rounded-full h-4 w-4 p-2 flex items-center justify-center"
          onClick={onDecrement}
        >
          <Subtract12Regular />
        </Button>
        <p className="text-sm w-8 text-center">{count}</p>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full h-4 w-4 p-2 flex items-center justify-center"
          onClick={onIncrement}
        >
          <Add12Regular className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default Counter;
