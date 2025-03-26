interface TravelerSummaryProps {
  adultCount: number;
  childCount: number;
  infantCount: number;
}

export function TravelerSummary({
  adultCount,
  childCount,
  infantCount,
}: TravelerSummaryProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      
      {adultCount > 0 && (
        
        <p className="text-sm font-bold">{adultCount} Adult</p>
      )}
      {childCount > 0 && (
        <p className="text-sm font-bold">{childCount} Child</p>
      )}
      {infantCount > 0 && (
        <p className="text-sm font-bold">{infantCount} Infant</p>
      )}
    </div>
  );
}
