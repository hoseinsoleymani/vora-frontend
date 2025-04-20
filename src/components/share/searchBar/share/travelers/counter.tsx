import { Button } from "@/components/ui";

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
          <span className="i-fluent:subtract-12-regular text-2xl"></span>
        </Button>
        <p className="text-sm w-8 text-center">{count}</p>
        <Button
          size="sm"
          variant="outline"
          className="rounded-full h-4 w-4 p-2 flex items-center justify-center"
          onClick={onIncrement}
        >
          <span className="i-fluent:add-12-regular text-2xl"></span>
        </Button>
      </div>
    </div>
  );
}

export default Counter;
