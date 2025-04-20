import React from 'react';
import { Switch } from "@/components/ui/switch";

interface HotelListHeaderProps {
    totalCount: number;
    viewMode: "list" | "grid";
    onViewModeChange: (newMode: "list" | "grid") => void;
}

const HotelListHeader: React.FC<HotelListHeaderProps> = ({
    totalCount,
    viewMode,
    onViewModeChange
}) => {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg">
            <h3 className="text-sm text-gray-500">{totalCount} properties found</h3>
            <div className="flex items-center space-x-2">
                <span
                    className={`i-fluent:list-24-regular text-2xl cursor-pointer ${
                        viewMode === "list" ? "text-primary" : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={() => onViewModeChange("list")}
                    aria-label="List view"
                />
                <Switch
                    checked={viewMode === "grid"}
                    onCheckedChange={(checked) => onViewModeChange(checked ? "grid" : "list")}
                    aria-label={`Switch to ${viewMode === 'list' ? 'grid' : 'list'} view`}
                />
                <span
                    className={`i-fluent:grid-dots-24-regular text-2xl cursor-pointer ${
                        viewMode === "grid" ? "text-primary" : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={() => onViewModeChange("grid")}
                    aria-label="Grid view"
                />
            </div>
        </div>
    );
};

export { HotelListHeader }; 