import React from 'react';

const Feature = () => {
  return (
    <section
      className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat"
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Latest Shirts
          </h2>

          <p className="hidden max-w-lg text-white/90 mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officia corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-primary/70 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
