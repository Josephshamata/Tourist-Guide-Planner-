import { Outlet } from "react-router-dom";
import { Header } from "../components/nav/Header";

export function MainLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      <Header />
      <Outlet />
    </div>
  );
}