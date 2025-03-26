import { Button } from "@/components/ui/button";
import { ReceiptSparkles16Regular } from "@fluentui/react-icons";

interface Option {
  id: string;
  label: string;
}

interface TabButtonsProps {
  options: Option[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ options, selectedTab, onTabChange }) => {
  return (
    <div className="flex items-start gap-4">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="lg"
          className={`min-w-[200px] inline-flex items-center justify-center gap-2 transition-all ${
            selectedTab === option.id
              ? "bg-primary text-white hover:bg-primary hover:text-white"
              : "bg-white text-primary"
          }`}
          onClick={() => onTabChange(option.id)}
        >
          <span
            className={`transition-opacity ${
              selectedTab === option.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <ReceiptSparkles16Regular />
          </span>
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default TabButtons;
