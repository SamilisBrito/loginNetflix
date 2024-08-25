import { Footer } from "./components/Footer";
import { FormLogin } from "./components/FormLogin";
import { Header } from "./components/Header";

export function Login() {
  return (
    <div className="bg-custom">
      <main className="pb-16">
        <Header />
        <FormLogin />
      </main>
      <Footer />
    </div>
  );
}
