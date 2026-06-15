import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarBySlug } from "../data/cars-data";
import CarImageCarousel from "@/components/common/car-image-carousel";
import CarDetailSkeleton from "@/components/skeleton/car-detail-skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CarFront,
  CircleGauge,
  ClipboardList,
  Droplets,
  Fuel,
  Gauge,
  KeyRound,
  MapPin,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const badgeClassNames = {
  Assured: "bg-emerald-50 text-emerald-800 border border-emerald-800",
  "Top Pick": "bg-amber-50 text-amber-900 border border-amber-800",
  "Great Deal": "bg-sky-50 text-sky-800 border border-sky-800",
};

function formatNumber(value) {
  return value.toLocaleString("en-IN");
}

function formatPrice(value) {
  return `Rs. ${(value / 100000).toFixed(2)} lakh`;
}

function formatCurrency(value) {
  return `Rs. ${formatNumber(value)}`;
}

function calculateEstimatedEmi(value) {
  return Math.round(value / 150);
}

export default function CarDetails() {
  const { carSlug } = useParams();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [carSlug]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getCarBySlug(carSlug).then((car) => {
      if (isMounted) {
        setCarData(car);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [carSlug]);

  const galleryImages = useMemo(() => {
    if (!carData) {
      return [];
    }

    return carData.images.details;
  }, [carData]);

  if (isLoading) {
    return <CarDetailSkeleton />;
  }

  if (!carData) {
    return (
      <div className="mx-auto max-w-7xl text-center">
        Car not found.
      </div>
    );
  }

  const detailItems = [
    {
      icon: Calendar,
      label: "Reg. year",
      value: carData.registrationYear,
    },
    {
      icon: Fuel,
      label: "Fuel",
      value: carData.fuelType,
    },
    {
      icon: Gauge,
      label: "KM driven",
      value: `${formatNumber(carData.kmDriven)} km`,
    },
    {
      icon: CarFront,
      label: "Transmission",
      value: carData.transmission,
    },
    {
      icon: CircleGauge,
      label: "Engine capacity",
      value: `${carData.engine}cc`,
    },
    {
      icon: ShieldCheck,
      label: "Ownership",
      value: carData.ownership,
    },
    {
      icon: ClipboardList,
      label: "Make year",
      value: carData.year,
    },
    {
      icon: KeyRound,
      label: "Color",
      value: carData.color,
    },
    {
      icon: WalletCards,
      label: "Body type",
      value: carData.bodyType,
    },
    {
      icon: Droplets,
      label: "Mileage",
      value:
        carData.fuelType === "Electric"
          ? `${carData.mileage} km range`
          : `${carData.mileage} km/l`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${carData.location.city}, ${carData.location.state}`,
    },
    {
      icon: ShieldCheck,
      label: "Badge",
      value: carData.badge,
    },
  ];

  const emiValue = calculateEstimatedEmi(carData.discountedPrice);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
      <div className="space-y-6 lg:w-3/5">
        <CarImageCarousel
          images={galleryImages}
          alt={`${carData.brand} ${carData.model}`}
        />

        <Card>
          <CardContent>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl lg:text-2xl font-semibold text-slate-950">
                  Car overview
                </h2>
                <p className="text-sm text-slate-500">
                  Key specs and ownership details for this vehicle.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 p-3 text-slate-500">
                <CircleGauge className="size-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {detailItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 py-4 sm:px-5 lg:min-h-28 lg:px-6"
                  >
                    <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-1 text-base font-semibold text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="lg:sticky lg:top-10 lg:self-start lg:w-2/5">
        <Card className="bg-white shadow-sm">
          <CardContent>
            <Badge className={`${badgeClassNames[carData.badge]}`}>
              {carData.badge}
            </Badge>

            <div className="mt-4">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                {carData.brand} {carData.model}
              </h1>
              <p className="text-sm text-slate-600">{carData.variant}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-700">
                {formatNumber(carData.kmDriven)} km
              </span>
              <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-700">
                {carData.ownership} owner
              </span>
              <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-700">
                {carData.transmission}
              </span>
              <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-700">
                {carData.fuelType}
              </span>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-orange-50 px-4 py-2 text-slate-800">
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange-500" />
              <p className="text-sm leading-6">
                {carData.location.locality}, {carData.location.city},{" "}
                {carData.location.state}
              </p>
            </div>

            <Card className="mt-4 overflow-hidden p-0 gap-0">
              <div className="px-5 py-3">
                <p className="text-sm text-slate-500">EMI starts at</p>
                <p className="mt-1 text-xl font-semibold text-slate-950">
                  Rs.{formatNumber(emiValue)}/mo
                </p>
              </div>

              <div className="bg-slate-100 px-5 py-3">
                <p className="text-xl font-semibold text-slate-950">
                  {formatPrice(carData.discountedPrice)}
                </p>
                <p className="text-sm text-slate-400 line-through">
                  {formatPrice(carData.originalPrice)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  + taxes and transfer charges
                </p>
              </div>
            </Card>

            <div className="mt-4 rounded-2xl border border-dashed border-orange-200 bg-orange-50/60 px-4 py-4">
              <p className="text-sm text-slate-500">On-road estimate</p>
              <p className="mt-1 text-xl font-semibold text-slate-950">
                {formatCurrency(carData.discountedPrice + 35474)}
              </p>
            </div>

            <Button className="mt-4 w-full">Book free test drive</Button>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
