import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ContextProvider } from "../context/Context";

export function Layout() {
  return (
    <div className="px-5">
      <ContextProvider>
        <Header />
        <Outlet />
        <h1>Footer</h1>
      </ContextProvider>
    </div>
  );
}
