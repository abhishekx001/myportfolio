import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-slate-200 selection:bg-primary-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-900/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm relative z-10 border-t border-white/5 bg-dark-900/80 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Abhishek S. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          {/* Using simple text links for footer */}
          <a href="#" className="hover:text-primary-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-400 transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
