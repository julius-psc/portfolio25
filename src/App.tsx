import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Past from "./components/Past";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageToggle from "./contexts/LanguageToggle";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-general-background h-screen">
        <LanguageToggle />
        <Navbar />
        <Header />
        <Past />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
