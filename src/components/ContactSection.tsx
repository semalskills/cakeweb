import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600">
            Come experience our fresh baked goods in person
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-amber-50 border-2 border-amber-100">
            <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">
              Colombo<br />
              Sri Lanka
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-amber-50 border-2 border-amber-100">
            <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
            <p className="text-gray-700">
              +94 XX XXX XXXX<br />
              +94 XX XXX XXXX
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-amber-50 border-2 border-amber-100">
            <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
            <p className="text-gray-700">
              Mon - Sun<br />
              8:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
