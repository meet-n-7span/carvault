import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar";


export default function CommonLayout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="px-4 py-10 sm:px-6 container mx-auto">
        <Outlet/>
      </main>
    </div>
  );
}
