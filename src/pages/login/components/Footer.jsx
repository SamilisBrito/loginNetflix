export function Footer() {
  return (
    <footer className="text-neutral-400 p-8 pt-10 bg-gradient-to-t from-black from-90% via-black/40 via-100% to-black z-20 relative">
      <div className="max-w-7xl m-auto">
        <p className="mb-3">
          Dúvidas? Ligue{" "}
          <a href="http://" className="hover:underline">
            0800 591 2876
          </a>
        </p>
        <ul className="grid gap-2 grid-cols-2 md:grid-cols-4 pb-5">
          <li>
            <a className=" hover:underline">Perguntas frequentes</a>
          </li>
          <li>
            <a className=" hover:underline">Central de Ajuda</a>
          </li>
          <li>
            <a className=" hover:underline">Termos de Uso</a>
          </li>
          <li>
            <a className=" hover:underline">Privacidade</a>
          </li>
          <li>
            <a className=" hover:underline">Preferências de cookies</a>
          </li>
          <li>
            <a className=" hover:underline">Informações corporativas</a>
          </li>
        </ul>
        <select
          name="language"
          id="language"
          className="bg-transparent p-3 border border-neutral-600 rounded"
        >
          <option value="">Português</option>
          <option value="">English</option>
        </select>
      </div>
    </footer>
  );
}
