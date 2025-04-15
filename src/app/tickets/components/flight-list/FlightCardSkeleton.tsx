"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface FlightCardSkeletonProps {
  count?: number;
}

const FlightCardSkeleton = ({ count = 3 }: FlightCardSkeletonProps) => {
  return (
    <div className="space-y-4 mt-5">
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className="flex bg-white shadow-md rounded-xl p-4 justify-between space-x-10">
          {/* Flight Info Skeleton */}
          <div className="flex flex-col w-1/6 justify-center space-y-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          {/* Flight Times Skeleton */}
          <div className="flex-1 flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <Skeleton className="h-5 w-10" />
              <Skeleton className="h-4 w-8 mt-1" />
            </div>
            <Skeleton className="h-1 w-full flex-1" />
            <div className="flex flex-col items-center">
              <Skeleton className="h-5 w-10" />
              <Skeleton className="h-4 w-8 mt-1" />
            </div>
            <div className="flex flex-col items-center w-20">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12 mt-1" />
            </div>
          </div>
          {/* Flight Price Skeleton */}
          <div className="flex w-2/6 items-center justify-center space-x-5">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export { FlightCardSkeleton }; 