import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </RootLayout>
  );
}

export default App