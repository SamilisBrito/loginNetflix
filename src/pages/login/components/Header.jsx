import logo from "../../../assets/logo.png";

export function Header() {
  return (
    <div className="py-6 px-8 m-auto max-w-7xl z-20 relative">
      <a href="#">
        <img width={148} src={logo} alt="logo" />
      </a>
    </div>
  );
}
