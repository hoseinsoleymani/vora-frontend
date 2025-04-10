import React from 'react';
import { HotelCard } from './HotelCard'; // Import HotelCard to leverage its internal skeleton
import { HotelListHeader } from './HotelListHeader'; // Use header skeleton part
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton for header/pagination parts

interface HotelListSkeletonProps {
    viewMode: "list" | "grid";
    pageSize: number; // Number of skeleton cards to show
}

const HotelListSkeleton: React.FC<HotelListSkeletonProps> = ({ viewMode, pageSize }) => {

    return (
        <div>
             {/* Render a skeleton version of the header */}
             <div className="flex items-center justify-between p-4 rounded-lg">
                <Skeleton className="h-5 w-32" />
                <div className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-6 w-12" /> 
                    <Skeleton className="h-5 w-5" />
                </div>
            </div>

            <div className={viewMode === "list" ? "space-y-4 mt-5" : "grid grid-cols-3 gap-4 mt-5"}>
                {Array(pageSize).fill(0).map((_, i) => (
                    // HotelCard will render its own skeleton since hotel data is null initially
                    <HotelCard key={`skeleton-${i}`} viewMode={viewMode} id={`skeleton-${i}`} />
                ))}
            </div>
             {/* Pagination skeleton */}
             <div className="mt-5 flex justify-center">
                <Skeleton className="h-10 w-64" /> 
             </div>
        </div>
    );
};

export { HotelListSkeleton }; 