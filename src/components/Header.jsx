import "../styles/App.scss";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <header className="header">
      <Navbar />
      <Hero />
    </header>
  );
}
