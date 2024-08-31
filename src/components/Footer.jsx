import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const INFORMATION = [
  "Audiodescrição",
  "Central de ajuda",
  "Cartão pré-pago",
  "Imprensa",
  "Relações com investidores",
  "Carreiras",
  "Termos de uso",
  "Privacidade",
  "Avisos legais",
  "Preferências de cookies",
  "Informações corporativas",
  "Entre em contatos",
];

export function Footer() {
  return (
    <footer className="text-neutral-400 lg:mt-28 max-w-5xl m-auto text-sm sm:text-base ">
      <div className="flex gap-2 text-white">
        <FaFacebookF className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaTwitter className="text-xl" />
        <FaYoutube className="text-xl" />
      </div>
      <div className="grid gap-1 sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-2">
        {INFORMATION.map((information) => (
          <a href="#" className=" hover:underline">{information}</a>
        ))}
      </div>
     
      <button className="bg-transparent p-3 border border-neutral-600 rounded">
        Código do serviço
      </button>
      <p className="mt-3">© 1997-2024 Netflix, Inc.</p>
    </footer>
  );
}
