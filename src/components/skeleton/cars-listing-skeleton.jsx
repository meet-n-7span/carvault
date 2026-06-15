import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const CARD_SKELETON_COUNT = 6;

export function ListingPageSkeleton() {
  return (
    <div className="max-w-7xl mx-auto flex gap-4">
      <Card className="min-w-75 shadow-md h-screen">
        <div className="space-y-6 p-6">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </Card>

      <main className="w-full">
        <Skeleton className="h-11 w-full shadow-md" />
        <div className="mt-4 flex items-center justify-between gap-4">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-8 w-50 shadow-md" />
        </div>
        <CarsGridSkeleton className="mt-4" />
      </main>
    </div>
  );
}

export function CarsGridSkeleton({ className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ${className}`}
    >
      {Array.from({ length: CARD_SKELETON_COUNT }).map((_, index) => (
        <Card key={index} className="shadow-md mx-1 p-0 overflow-hidden">
          <div className="relative">
            <Skeleton className="h-44 w-full" />
            <Skeleton className="absolute right-4 top-4 h-8 w-20 rounded-full" />
          </div>

          <CardContent className="space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <div className="flex gap-2">
              <Skeleton className="h-7 w-19 rounded-md" />
              <Skeleton className="h-7 w-15 rounded-md" />
              <Skeleton className="h-7 w-17 rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-8 w-full" />
          </CardContent>

          <CardFooter className="bg-slate-50">
            <Skeleton className="h-1 w-32" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}