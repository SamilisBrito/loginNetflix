import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <main className="bg-custom pb-16">
        <Header />
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;
