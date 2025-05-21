"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoomPriceCard } from "../../room-price";
import { Skeleton } from "@/components/ui/skeleton";

interface HotelRoom {
  id: string;
  name: string;
  price: {
    currency: string;
    total: string;
  };
  capacity: {
    adults: number;
    children: number;
  };
  amenities: string[];
  cancellationPolicy: string;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
}

interface RoomPricesSectionProps {
  rooms: HotelRoom[];
}

export const RoomPricesSection: React.FC<RoomPricesSectionProps & { loading?: boolean }> = ({
  rooms,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-40 w-full mb-4" />
        <Skeleton className="h-40 w-full mb-4" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Available Rooms</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <Select defaultValue="price">
            <SelectTrigger className="w-[180px] bg-gray-50 border-0">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {rooms.map((room) => (
          <RoomPriceCard
            key={room.id}
            {...room}
          />
        ))}
      </div>
    </div>
  );
}; 