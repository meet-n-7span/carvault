import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MapPin, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterAside from "../components/common/filter-aside";
import Search from "../components/common/search";
import { getCarsListing } from "@/data/cars-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListingPageSkeleton, CarsGridSkeleton } from '../components/skeleton/cars-listing-skeleton'

const currentYear = new Date().getFullYear();
const registrationYearRange = [currentYear - 15, currentYear];
const kmDrivenRange = [0, 100000];
const CARS_PER_PAGE = 6;
const badgeClassNames = {
  Assured:
    "bg-emerald-50 text-emerald-800 border border-emerald-800",
  "Top Pick":
    "bg-amber-50 text-amber-900 border border-amber-800",
  "Great Deal":
    "bg-sky-50 text-sky-800 border border-sky-800",
};

function formatNumber(value) {
  return value.toLocaleString("en-IN");
}

function formatPrice(value) {
  return `Rs. ${(value / 100000).toFixed(2)} lakh`;
}

function getBadgeClassName(badge) {
  return (
    badgeClassNames[badge] ??
    "bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-100"
  );
}

export default function CarsListing() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchValue = location.state?.searchValue ?? "";
  const initialSearchType = location.state?.searchType ?? "";
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("All");
  const [priceValue, setPriceValue] = useState([0, 5000000]);
  const [yearValue, setYearValue] = useState(registrationYearRange);
  const [kmValue, setKmValue] = useState(kmDrivenRange);
  const [selectedBrands, setSelectedBrands] = useState(
    initialSearchType === "brands" && initialSearchValue
      ? [initialSearchValue]
      : [],
  );
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedOwnerships, setSelectedOwnerships] = useState([]);
  const [listingResponse, setListingResponse] = useState({
    total: 0,
    cars: [],
  });
  const [visibleCars, setVisibleCars] = useState([]);
  const [hasMoreCars, setHasMoreCars] = useState(false);
  const [isLoadingCars, setIsLoadingCars] = useState(true);
  const [isInitialPageLoading, setIsInitialPageLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    async function fetchCarsListing() {
      setIsLoadingCars(true);
      const response = await getCarsListing({
        searchValue,
        sortBy,
        priceValue,
        yearValue,
        kmValue,
        selectedBrands,
        selectedFuelTypes,
        selectedTransmissions,
        selectedBodyTypes,
        selectedOwnerships,
      });

      setListingResponse(response);
      setIsLoadingCars(false);
      setIsInitialPageLoading(false);
    }

    fetchCarsListing();
  }, [
    searchValue,
    sortBy,
    priceValue,
    yearValue,
    kmValue,
    selectedBrands,
    selectedFuelTypes,
    selectedTransmissions,
    selectedBodyTypes,
    selectedOwnerships,
  ]);

  useEffect(() => {
    const initialCars = listingResponse.cars.slice(0, CARS_PER_PAGE);

    setVisibleCars(initialCars);
    setHasMoreCars(listingResponse.cars.length > initialCars.length);
  }, [listingResponse]);

  useEffect(() => {

    setSearchValue("");
  }, [
    priceValue,
    yearValue,
    kmValue,
    selectedBrands,
    selectedFuelTypes,
    selectedTransmissions,
    selectedBodyTypes,
    selectedOwnerships,
  ]);

  useEffect(() => {
    if (!isMobileFilterOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsMobileFilterOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileFilterOpen]);

  function loadMoreCars() {
    setVisibleCars((currentCars) => {
      const nextCars = listingResponse.cars.slice(
        currentCars.length,
        currentCars.length + CARS_PER_PAGE,
      );
      const updatedCars = [...currentCars, ...nextCars];

      setHasMoreCars(updatedCars.length < listingResponse.cars.length);
      return updatedCars;
    });
  }

  if (isInitialPageLoading) {
    return <ListingPageSkeleton />;
  }

  return (
    <>
      {isMobileFilterOpen ? (
        <div className="fixed inset-0 z-40 xl:hidden">
          <button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 bg-slate-950/45"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="absolute left-0 w-[min(90vw,24rem)] overflow-y-auto bg-background p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-950">Filters</h2>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setIsMobileFilterOpen(false)}
                aria-label="Close filters"
              >
                <X className="size-4" />
              </Button>
            </div>

            <FilterAside
              priceValue={priceValue}
              setPriceValue={setPriceValue}
              yearValue={yearValue}
              setYearValue={setYearValue}
              kmValue={kmValue}
              setKmValue={setKmValue}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedFuelTypes={selectedFuelTypes}
              setSelectedFuelTypes={setSelectedFuelTypes}
              selectedTransmissions={selectedTransmissions}
              setSelectedTransmissions={setSelectedTransmissions}
              selectedBodyTypes={selectedBodyTypes}
              setSelectedBodyTypes={setSelectedBodyTypes}
              selectedOwnerships={selectedOwnerships}
              setSelectedOwnerships={setSelectedOwnerships}
            />
          </div>
        </div>
      ) : null}

      <div className="mx-auto flex max-w-7xl flex-col gap-4 xl:flex-row xl:items-start">
        <div className="hidden xl:block">
          <FilterAside
            priceValue={priceValue}
            setPriceValue={setPriceValue}
            yearValue={yearValue}
            setYearValue={setYearValue}
            kmValue={kmValue}
            setKmValue={setKmValue}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedFuelTypes={selectedFuelTypes}
            setSelectedFuelTypes={setSelectedFuelTypes}
            selectedTransmissions={selectedTransmissions}
            setSelectedTransmissions={setSelectedTransmissions}
            selectedBodyTypes={selectedBodyTypes}
            setSelectedBodyTypes={setSelectedBodyTypes}
            selectedOwnerships={selectedOwnerships}
            setSelectedOwnerships={setSelectedOwnerships}
          />
        </div>
        <main className="min-w-0 flex-1">
          <div>
            <Search
              className="h-11 w-full shadow-md"
              value={searchValue}
              setValue={setSearchValue}
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="xl:hidden"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <Menu className="size-4" />
                  Filters
                </Button>
                <span className="text-sm sm:text-base">
                  Total {listingResponse.total} cars showing
                </span>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full shadow-md sm:w-50">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Price Low to High">
                      Price Low to High
                    </SelectItem>
                    <SelectItem value="Price High to Low">
                      Price High to Low
                    </SelectItem>
                    <SelectItem value="Newest First">Newest First</SelectItem>
                    <SelectItem value="Oldest First">Oldest First</SelectItem>
                    <SelectItem value="KM Low to High">
                      KM Low to High
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <InfiniteScroll
            dataLength={visibleCars.length}
            next={loadMoreCars}
            hasMore={hasMoreCars}
            loader={
              <p className="py-6 text-center text-sm text-muted-foreground">
                Loading cars...
              </p>
            }
            endMessage={
              !isLoadingCars && listingResponse.total > 0 ? (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  All cars loaded.
                </p>
              ) : null
            }
          >
            {isLoadingCars ? (
              <CarsGridSkeleton className="mt-4" />
            ) : visibleCars.length === 0 ? (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No cars found for the selected filters.
              </p>
            ) : (
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {visibleCars.map((car) => (
                  <Card key={car.id} className="overflow-hidden p-0 shadow-md mx-1">
                    <div className="relative">
                      <Badge
                        className={`absolute right-3 top-3 rounded-full shadow-sm ${getBadgeClassName(
                          car.badge,
                        )}`}
                      >
                        {car.badge}
                      </Badge>
                      <img
                        src={car.primaryImage}
                        alt={`${car.brand} ${car.model}`}
                        className="mx-auto h-44 w-full object-contain transition duration-300 hover:scale-110"
                      />
                    </div>

                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {car.brand} {car.model}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {formatNumber(car.kmDriven)} km
                        </span>
                        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {car.fuelType}
                        </span>
                        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {car.transmission}
                        </span>
                      </div>

                      <div className="">
                        <p className="text-xl font-bold text-slate-900">
                          {formatPrice(car.discountedPrice)}
                        </p>
                        <p className="text-xs text-muted-foreground line-through">
                          {formatPrice(car.originalPrice)}
                        </p>
                      </div>

                      <Button className="w-full" onClick={()=> navigate(`/cars/${car.slug}`) }>View Details</Button>
                    </CardContent>

                    <CardFooter className="flex items-center gap-2 bg-slate-50 text-xs text-muted-foreground h-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">
                        {car.city}, {car.state}
                      </span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </InfiniteScroll>
        </main>
      </div>
    </>
  );
}
