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
    <footer className="text-neutral-400 lg:mt-28 max-w-5xl m-auto text-sm sm:text-base mt-5 sm:mt-14">
      <div className="flex gap-2 text-white">
        <a href="#" rel="noopener noreferrer">
          <FaFacebookF className="text-xl" />
        </a>
        <a href="#" rel="noopener noreferrer">
          <FaInstagram className="text-xl" />
        </a>
        <a href="#" rel="noopener noreferrer">
          <FaTwitter className="text-xl" />
        </a>
        <a href="#" rel="noopener noreferrer">
          <FaYoutube className="text-xl" />
        </a>
      </div>
      <div className="grid gap-1 sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-2">
        {INFORMATION.map((information) => (
          <a key={information} href="#" className=" hover:underline">
            {information}
          </a>
        ))}
      </div>
      <button className="bg-transparent p-3 border border-neutral-600 rounded">
        Código do serviço
      </button>
      <p className="mt-3">© 1997-2024 Netflix, Inc.</p>
    </footer>
  );
}
