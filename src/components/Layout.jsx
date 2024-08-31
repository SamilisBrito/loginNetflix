import { Outlet } from "react-router-dom";
import { ModalMovieProvider } from "../context/ModalMovieContext";
import { Header } from "./Header";
import { DetailsModal } from "./detailsModal";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="px-5">
      <ModalMovieProvider>
        <Header />
        <Outlet />
        <DetailsModal />
        <Footer />
      </ModalMovieProvider>
    </div>
  );
}
