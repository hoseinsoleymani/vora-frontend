import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  direction: 'left' | 'right';
  disabled: boolean;
  formData: Record<string, string>;
}

const NavigationButton = ({ direction, disabled, formData }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  
  return (
    <form action="/tickets" method="GET" className={`absolute ${isLeft ? 'left-0' : 'right-0'} mt-3 z-10`}>
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
      
      <Button 
        type="submit"
        disabled={disabled}
        className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-100 ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isLeft ? (
          <span className="i-fluent:ios-arrow-24-filled text-3xl text-gray-500 flex items-center justify-center w-full h-full"></span>
        ) : (
          <span className="i-fluent:ios-arrow-rtl-24-filled text-3xl text-gray-500 flex items-center justify-center w-full h-full"></span>
        )}
      </Button>
    </form>
  );
};

export { NavigationButton }; 
