"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoomPriceCard } from "../../room-price";

export const RoomPricesSection = () => {
  const rooms = [
    {
      id: "1",
      name: "Standard Room",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: {
        currency: "USD",
        total: "150"
      },
      capacity: {
        adults: 2,
        children: 1
      },
      amenities: ["WiFi", "TV", "Parking", "Accessibility"],
      cancellationPolicy: "Non-refundable",
      breakfastIncluded: true,
      freeCancellation: false
    },
    {
      id: "2",
      name: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: {
        currency: "USD",
        total: "250"
      },
      capacity: {
        adults: 2,
        children: 2
      },
      amenities: ["WiFi", "TV", "Parking", "Accessibility"],
      cancellationPolicy: "Free cancellation until 24 hours before check-in",
      breakfastIncluded: true,
      freeCancellation: true
    },
    {
      id: "3",
      name: "Suite",
      image: "https://images.unsplash.com/photo-1520250497591-112f5f251d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: {
        currency: "USD",
        total: "350"
      },
      capacity: {
        adults: 2,
        children: 2
      },
      amenities: ["WiFi", "TV", "Parking", "Accessibility"],
      cancellationPolicy: "Free cancellation until 48 hours before check-in",
      breakfastIncluded: true,
      freeCancellation: true
    }
  ];

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