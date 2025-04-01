import { FlightSegmentDisplay, ProgressLine } from "@/app/details/components";

function FlightSegment() {
  return (
    <div className="mt-5 flex flex-col gap-4 justify-center items-center">
      <div className="flex items-center justify-between gap-[51px]">
        <FlightSegmentDisplay
          time="10:15"
          city="Milan"
          terminal="MXP T1"
          date="Tuesday, July 10, 2025"
          isConfirmed={true}
        />
        <div className="flex flex-col justify-center items-center gap-3 flex-1">
          <p className="text-sm font-medium text-gray-500">13h 40m</p>
          <ProgressLine />
        </div>
        <FlightSegmentDisplay
          time="10:15"
          city="Milan"
          terminal="MXP T1"
          date="Tuesday, July 10, 2025"
          isConfirmed={false}
        />
      </div>
      <div className="flex items-center justify-around">
        <div className="flex flex-col gap-2 justify-center items-start">
          <div className="flex items-center gap-7xl">
            <p className="text-sm">Flight Number</p>
            <p className="text-sm font-light">123456789</p>
          </div>
          <div className="flex items-center gap-7xl">
            <p className="text-sm">Flight Class</p>
            <p className="text-sm font-light">Economy</p>
          </div>
          <div className="flex items-center gap-7xl">
            <p className="text-sm">Operated by</p>
            <p className="text-sm font-light">British Airways</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FlightSegment };
