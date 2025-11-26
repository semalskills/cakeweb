import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import OrderSection from './components/OrderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductsSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
