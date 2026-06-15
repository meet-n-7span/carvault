import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Honda",
  "Mahindra",
  "Toyota",
];
const models = [
  "Brezza",
  "Nexon",
  "Creta",
  "Baleno",
  "Safari",
  "Seltos",
  "City",
];

function Navbar() {
  const navigate = useNavigate();

  function handleSearchNavigation(searchType, searchValue) {
    navigate("/cars", {
      state: {
        searchType,
        searchValue,
      },
    });
  }

  return (
    <header className="w-full max-w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-6 border-b">
      <img
        src={logo}
        alt="car vault"
        onClick={() => navigate("/")}
        className="w-20 sm:w-25 md:w-30 cursor-pointer"
      />

      <nav className="flex-1">
        <NavigationMenu className="justify-center">
          <NavigationMenuList className="justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/cars">Cars</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[20rem] md:min-w-md lg:min-w-70">
                <ul className="grid grid-flow-col grid-rows-4 auto-cols-fr gap-4 p-4">
                  {brands.map((brand) => (
                    <li key={brand}>
                      <NavigationMenuLink
                        asChild
                        onClick={() => handleSearchNavigation("brands", brand)}
                      >
                        <button type="button">{brand}</button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden rounded-full bg-muted px-3 py-2 text-sm font-medium text-foreground sm:block">
          Meet Navadiya
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Navbar;
