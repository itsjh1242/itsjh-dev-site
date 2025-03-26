import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <main className="bg-_background flex min-h-screen w-full">
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
};
