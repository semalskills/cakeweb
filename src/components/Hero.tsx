export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Freshly Baked <span className="text-amber-600">Daily</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Indulge in our delicious selection of cakes, pastries, and beverages.
            Crafted with love and the finest ingredients since 2015.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Menu
            </a>
            <a
              href="#order"
              className="bg-white hover:bg-gray-50 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-amber-600"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
