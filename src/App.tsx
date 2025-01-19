
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Past from './components/Past';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (

      <div className='bg-general-background h-screen'>
        <Navbar />
        <Header />
        <Past />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
