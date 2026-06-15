import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const currentYear = new Date().getFullYear();

const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Honda",
  "Mahindra",
  "Toyota",
];

const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG"];
const transmissions = ["Automatic", "Manual"];
const bodyTypes = ["Hatchback", "SUV", "Sedan", "MUV"];
const ownerships = ["1st", "2nd", "3rd"];

const registrationYearRange = [currentYear - 15, currentYear];
const kmDrivenRange = [0, 100000];

function formatPriceRange(values) {
  return values.map((value) => value.toLocaleString("en-IN")).join(" - ");
}

function formatKm(value) {
  return `${value.toLocaleString("en-IN")} km`;
}

function FilterSection({ title="", children, className = "" }) {
  return (
    <section
      className={`border-t ${title === "" ? "pt-3" : "pt-6"} first:border-t-0 first:pt-0 ${className}`}
    >
      <h3 className="mb-4 text-sm font-semibold">{title}</h3>
      {children}
    </section>
  );
}

function CheckboxGroup({ options, selectedValues, onToggle, getLabel }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => {
        const id = `filter-${String(option).replace(/\s+/g, "-").toLowerCase()}`;
        const isChecked = selectedValues.includes(option);

        return (
          <label key={option} htmlFor={id} className="flex items-center gap-3">
            <Checkbox
              id={id}
              checked={isChecked}
              onCheckedChange={() => onToggle(option)}
            />
            <span className="text-sm text-foreground">{getLabel(option)}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function FilterAside({
  priceValue,
  setPriceValue,
  yearValue,
  setYearValue,
  kmValue,
  setKmValue,
  selectedBrands,
  setSelectedBrands,
  selectedFuelTypes,
  setSelectedFuelTypes,
  selectedTransmissions,
  setSelectedTransmissions,
  selectedBodyTypes,
  setSelectedBodyTypes,
  selectedOwnerships,
  setSelectedOwnerships,
}) {
  const toggleSelection = (value, setter) => {
    setter((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  };

  return (
    <aside className="w-full xl:sticky xl:top-6 xl:w-80 xl:self-start">
      <Card className="shadow-md xl:max-h-[calc(100vh-3rem)] xl:overflow-y-auto xl:scrollbar-thin">
        <CardHeader className="border-b">
          <CardTitle>Filter Cars</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <FilterSection>
            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="price-range">Price Range</Label>
                <span className="text-sm text-muted-foreground">
                  {formatPriceRange(priceValue)}
                </span>
              </div>
              <Slider
                id="price-range"
                value={priceValue}
                onValueChange={setPriceValue}
                min={0}
                max={5000000}
                step={20000}
              />
            </div>
          </FilterSection>

          <FilterSection title="Brands">
            <CheckboxGroup
              options={brands}
              selectedValues={selectedBrands}
              onToggle={(value) => toggleSelection(value, setSelectedBrands)}
              getLabel={(value) => value}
            />
          </FilterSection>

          <FilterSection>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="registration-year-range">
                  Registration Year
                </Label>
                <span className="text-sm text-muted-foreground">
                  {yearValue.join(" - ")}
                </span>
              </div>
              <Slider
                id="registration-year-range"
                value={yearValue}
                onValueChange={setYearValue}
                min={registrationYearRange[0]}
                max={registrationYearRange[1]}
                step={1}
              />
            </div>
          </FilterSection>

          <FilterSection>
            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="km-driven-range">KM Driven</Label>
                <span className="text-sm text-muted-foreground">
                  {kmValue.map(formatKm).join(" - ")}
                </span>
              </div>
              <Slider
                id="km-driven-range"
                value={kmValue}
                onValueChange={setKmValue}
                min={kmDrivenRange[0]}
                max={kmDrivenRange[1]}
                step={1000}
              />
            </div>
          </FilterSection>

          <FilterSection title="Fuel Type">
            <CheckboxGroup
              options={fuelTypes}
              selectedValues={selectedFuelTypes}
              onToggle={(value) => toggleSelection(value, setSelectedFuelTypes)}
              getLabel={(value) => value}
            />
          </FilterSection>

          <FilterSection title="Transmission">
            <CheckboxGroup
              options={transmissions}
              selectedValues={selectedTransmissions}
              onToggle={(value) =>
                toggleSelection(value, setSelectedTransmissions)
              }
              getLabel={(value) => value}
            />
          </FilterSection>

          <FilterSection title="Body Type">
            <CheckboxGroup
              options={bodyTypes}
              selectedValues={selectedBodyTypes}
              onToggle={(value) => toggleSelection(value, setSelectedBodyTypes)}
              getLabel={(value) => value}
            />
          </FilterSection>

          <FilterSection title="Ownership">
            <CheckboxGroup
              options={ownerships}
              selectedValues={selectedOwnerships}
              onToggle={(value) =>
                toggleSelection(value, setSelectedOwnerships)
              }
              getLabel={(value) => `${value} Owner`}
            />
          </FilterSection>
        </CardContent>
      </Card>
    </aside>
  );
}
