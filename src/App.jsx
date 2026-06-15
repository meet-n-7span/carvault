import { Route, Routes } from "react-router-dom"
import CommonLayout from "./layout/common-layout"
import LandingPage from "./pages/landing-page"
import CarsListing from "./pages/cars-listing";
import CarDetails from "./pages/car-detail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="cars" element={<CarsListing/>} />
          <Route path="cars/:carSlug" element={<CarDetails/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
