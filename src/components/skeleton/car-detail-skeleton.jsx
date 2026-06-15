import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DETAIL_ITEM_COUNT = 12;

export default function CarDetailSkeleton() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-10 lg:flex-row">
      <div className="space-y-6 lg:w-3/5">
        <div className="w-full">
          <Card className="overflow-hidden border border-slate-200 bg-white p-2 shadow-sm rounded-2xl">
            <Skeleton className="aspect-[4/3] w-full rounded-2xl lg:max-h-50 xl:max-h-90" />
          </Card>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:mt-4 lg:gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-14 w-20 shrink-0 rounded-2xl sm:h-16 sm:w-24 lg:h-[72px] lg:w-[104px]"
              />
            ))}
          </div>
        </div>

        <Card>
          <CardContent>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="h-4 w-64" />
              </div>
              <Skeleton className="h-11 w-11 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: DETAIL_ITEM_COUNT }).map((_, index) => (
                <div
                  key={index}
                  className="flex min-h-24 items-start gap-4 py-4 sm:px-5 lg:min-h-28 lg:px-6"
                >
                  <Skeleton className="h-11 w-11 shrink-0 rounded-2xl" />
                  <div className="w-full space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-5 w-28" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="lg:sticky lg:top-10 lg:self-start lg:w-2/5">
        <Card className="bg-white shadow-sm">
          <CardContent>
            <Skeleton className="h-7 w-24 rounded-full" />

            <div className="mt-4 space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Skeleton className="h-8 w-24 rounded-xl" />
              <Skeleton className="h-8 w-28 rounded-xl" />
              <Skeleton className="h-8 w-24 rounded-xl" />
              <Skeleton className="h-8 w-20 rounded-xl" />
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-orange-50 px-4 py-2">
              <Skeleton className="mt-0.5 h-5 w-5 shrink-0 rounded-full" />
              <div className="w-full space-y-2 py-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            <Card className="mt-4 overflow-hidden p-0 gap-0">
              <div className="space-y-2 px-5 py-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-7 w-36" />
              </div>

              <div className="space-y-2 bg-slate-100 px-5 py-3">
                <Skeleton className="h-7 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-40" />
              </div>
            </Card>

            <div className="mt-4 rounded-2xl border border-dashed border-orange-200 bg-orange-50/60 px-4 py-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-7 w-40" />
              </div>
            </div>

            <Skeleton className="mt-4 h-10 w-full rounded-md" />
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
