import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
