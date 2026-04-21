import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/shop/CartDrawer';
import LandingPage from './pages/LandingPage';
import MarketplacePage from './pages/MarketplacePage';
import ProductCustomizationPage from './pages/ProductCustomizationPage';
import ArtistDashboardPage from './pages/ArtistDashboardPage';
import CartPage from './pages/CartPage';
import UserProfilePage from './pages/UserProfilePage';
import { useAppContext } from './context/AppContext';
import { useEffect } from 'react';

function App() {
  const { isDarkMode } = useAppContext();

  useEffect(() => {
    // Add dark class to body if needed
    if (isDarkMode) {
      document.body.classList.add('bg-black', 'text-white');
    } else {
      document.body.classList.remove('bg-black', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/product/:designId" element={<ProductCustomizationPage />} />
            <Route path="/dashboard" element={<ArtistDashboardPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </Router>
  );
}

export default App;
