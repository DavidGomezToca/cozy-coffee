import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";

export default function Layout() {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Overview />
    </div>
  );
}
