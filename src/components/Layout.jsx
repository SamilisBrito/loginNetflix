import { Outlet } from "react-router-dom";
import { ModalMovieProvider } from "../context/ModalMovieContext";
import { Header } from "./Header";
import { DetailsModal } from "./detailsModal";

export function Layout() {

  return (
    <div className="px-5">
      <ModalMovieProvider>
        <Header />
        <Outlet />
        <DetailsModal />
        <h1>Footer</h1>
      </ModalMovieProvider>
    </div>
  );
}
