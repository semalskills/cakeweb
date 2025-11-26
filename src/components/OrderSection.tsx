import { Phone, Smartphone } from 'lucide-react';

export default function OrderSection() {
  return (
    <section id="order" className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Order Now</h2>
          <p className="text-xl mb-12 opacity-90">
            Get your favorite treats delivered right to your door
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:+94XXXXXXXXX"
              className="bg-white text-amber-600 hover:bg-gray-50 rounded-2xl p-8 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Phone className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Call to Order</h3>
              <p className="text-lg">+94 XX XXX XXXX</p>
            </a>

            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 hover:bg-gray-50 rounded-2xl p-8 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Smartphone className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">WhatsApp Order</h3>
              <p className="text-lg">Message us directly</p>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Delivery Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white rounded-xl px-8 py-4 shadow-lg">
                <p className="text-2xl font-bold text-pink-600">PickMe</p>
              </div>
              <div className="bg-white rounded-xl px-8 py-4 shadow-lg">
                <p className="text-2xl font-bold text-green-600">Uber Eats</p>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Available on your favorite delivery platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
