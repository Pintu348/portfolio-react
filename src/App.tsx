import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 flex flex-col scroll-smooth'>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
