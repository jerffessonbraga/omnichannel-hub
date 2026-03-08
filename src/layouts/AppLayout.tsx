import { Outlet } from "react-router-dom";
import AppNavbar from "@/components/app/AppNavbar";
import AppStatusBar from "@/components/app/AppStatusBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background pb-8">
      <AppNavbar />
      <main className="p-4 md:p-6">
        <Outlet />
      </main>
      <AppStatusBar />
    </div>
  );
};

export default AppLayout;
