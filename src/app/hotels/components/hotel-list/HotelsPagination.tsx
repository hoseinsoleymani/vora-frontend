import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface HotelsPaginationProps {
    page: number;
    totalPages: number;
    createPageUrl: (pageNum: number) => string | undefined;
}

const HotelsPagination: React.FC<HotelsPaginationProps> = ({
    page,
    totalPages,
    createPageUrl,
}) => {
    // Improved pagination range logic
    const getPaginationRange = () => {
        const delta = 1; // Number of pages to show before/after current page
        const left = page - delta;
        const right = page + delta;
        const range = [];
        const rangeWithDots: (number | string)[] = [];

        for (let i = 1; i <= totalPages; i++) {
            // Show first page, last page, current page, and pages within delta
            if (i === 1 || i === totalPages || (i >= left && i <= right)) {
                range.push(i);
            }
        }

        let last: number | null = null;
        for (const num of range) {
            if (last !== null) {
                // If gap is larger than 1, add ellipsis
                if (num - last > 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(num);
            last = num;
        }

        return rangeWithDots;
    };


    if (totalPages <= 1) {
        return null; // Don't render pagination if only one page
    }

    return (
        <Pagination className="mt-5 rtl:space-x-reverse">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={page > 1 ? createPageUrl(page - 1) : undefined}
                        aria-disabled={page === 1}
                        tabIndex={page === 1 ? -1 : undefined}
                        className={page === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {getPaginationRange().map((pageNum, index) => (
                    <PaginationItem key={typeof pageNum === 'number' ? pageNum : `ellipsis-${index}`}>
                        {pageNum === '...' ? (
                            <span className="px-4 py-2">...</span> // Or use PaginationEllipsis if available
                        ) : (
                            <PaginationLink
                                href={createPageUrl(pageNum as number)}
                                isActive={page === pageNum}
                                size="icon"
                            >
                                {pageNum}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href={page < totalPages ? createPageUrl(page + 1) : undefined}
                        aria-disabled={page === totalPages}
                        tabIndex={page === totalPages ? -1 : undefined}
                        className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export { HotelsPagination }; 