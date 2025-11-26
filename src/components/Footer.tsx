import { Facebook, Instagram, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-amber-600" />
              <div>
                <h3 className="text-2xl font-bold text-amber-600">S&P</h3>
                <p className="text-xs text-gray-400">Since 2015</p>
              </div>
            </div>
            <p className="text-gray-400">
              Serving the finest baked goods and beverages in Colombo for over 8 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Order Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Order through:</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  PickMe
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  Uber Eats
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} S&P Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
