import { formatDuration } from "@/utils";

interface ProgressLineProps {
  duration?: string;
}

const ProgressLine = ({ duration }: ProgressLineProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {duration && (
        <div className="flex items-center gap-3">
          <p>{formatDuration(duration)}</p>
          <div className="h-2 w-2 bg-gray-2 rounded-full"></div>
          <span className="text-sm text-gray-5">Direct</span>
        </div>
      )}

      <div className="flex items-center w-[400px]">
        <div className="relative flex">
          <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-red-300 rounded-full"></div>
        </div>

        <div className="w-full h-1 bg-red-300 rounded-full"></div>
        <div className="relative flex">
          <div className="absolute translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-red-300"></div>
        </div>
      </div>
    </div>
  );
};

export { ProgressLine };
