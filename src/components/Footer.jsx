export function Footer() {
  return (
    <footer className="">
      <p>Dúvidas? Ligue 0800 591 2876</p>
      <ul>
        <li>
          <a>Perguntas frequentes</a>
        </li>
        <li>
          <a>Central de Ajuda</a>
        </li>
        <li>
          <a>Termos de Uso</a>
        </li>
        <li>
          <a>Privacidade</a>
        </li>
        <li>
          <a>Preferências de cookies</a>
        </li>
        <li>
          <a>Informações corporativas</a>
        </li>
      </ul>
      <select name="language" id="language">
        <option value="">Português</option>
        <option value="">English</option>
      </select>
    </footer>
  );
}
