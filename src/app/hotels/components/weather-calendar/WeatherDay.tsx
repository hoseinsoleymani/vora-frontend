import { Button } from "@/components/ui/button";

interface WeatherDayProps {
  day: { date: string; temp: string; condition: string; icon: string };
  index: number;
  isSelected: boolean;
  formData: {
    selectedItemIndex: string;
    currentIndex: string;
    selected_date: string;
  };
  formatDate: (date: string) => { weekday: string; fullDate: string };
}

const WeatherDay = ({ day, index, isSelected, formData, formatDate }: WeatherDayProps) => {
  const { weekday, fullDate } = formatDate(day.date);
  
  return (
    <form 
      key={index} 
      action="/hotels" 
      method="GET"
      className="inline-block px-1"
    >
      <input type="hidden" name="selectedItemIndex" value={index.toString()} />
      <input type="hidden" name="currentIndex" value={formData.currentIndex} />
      <input type="hidden" name="selected_date" value={day.date} />
      
      <Button 
        type="submit"
        variant="ghost"
        className={`flex-shrink-0 w-24 h-24 mt-2 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center ${
          isSelected ? "border-2 border-blue-500" : ""
        } cursor-pointer`}
      >
        <div className="text-xs font-medium">{weekday}</div>
        <div className="text-[10px] text-gray-500 mb-1">{fullDate}</div>
        <div className="flex items-center">
          <span className="text-lg mr-1">{day.icon}</span>
          <span className="text-sm font-semibold">{day.temp}</span>
        </div>
      </Button>
    </form>
  );
};

export { WeatherDay }; 
