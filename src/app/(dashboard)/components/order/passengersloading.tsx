import { Skeleton } from "@/components/ui/skeleton";

function PassengersLoading() {
  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold">order</h3>
      <div className="mt-14">
        <div className="flex items-center gap-2">
          <span className="i-fluent:ticket-diagonal-24-regular"></span>
          <h3 className="text-lg font-bold">Upcoming Orders</h3>
        </div>
        <div className="mt-8 p-6 bg-white rounded-2xl shadow w-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-32 " />
            </div>
          </div>
          <div className="space-y-8">
            {[1].map((index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-6 w-60 rounde-lg"></Skeleton>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-48" />
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <div className="w-1/3">
                      <Skeleton className="h-16 w-full" />
                    </div>
                    <div className="w-1/3">
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <Skeleton className="h-6 w-60 rounde-lg"></Skeleton>
                  <Skeleton className="h-6 w-48" />
                  <div className="flex items-center gap-5">
                    <div className="w-1/3">
                      <Skeleton className="h-16 w-full" />
                    </div>
                    <div className="w-1/3">
                      <Skeleton className="h-16 w-full" />
                    </div>
                    <div className="w-1/3">
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PassengersLoading };
