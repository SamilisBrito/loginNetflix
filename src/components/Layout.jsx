import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ContextProvider } from "./Context";

export function Layout() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
      </ContextProvider>
      <h1>Footer</h1>
    </>
  );
}
