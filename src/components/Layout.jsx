import { Outlet } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
