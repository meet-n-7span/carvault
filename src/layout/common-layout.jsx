import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar";


export default function CommonLayout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="container mx-auto">
        <Outlet/>
      </main>
    </div>
  );
}
