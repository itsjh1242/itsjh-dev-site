import { Outlet } from "react-router-dom";
import { SideNav } from "./side-nav";

export const RootLayout: React.FC = () => {
  return (
    <main className="flex min-h-screen w-full bg-black">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
};
