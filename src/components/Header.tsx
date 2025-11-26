import { ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-10 h-10 text-amber-600" />
            <div>
              <h1 className="text-3xl font-bold text-amber-600">S&P</h1>
              <p className="text-xs text-gray-600">Since 2015</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>+94 XX XXX XXXX</span>
            </div>
          </div>

          <a
            href="#order"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
