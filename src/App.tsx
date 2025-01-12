import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <nav className="mt-4">
          <a href="#about" className="mr-4 hover:underline">About</a>
          <a href="#projects" className="mr-4 hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="p-6">
        <section id="about" className="my-12">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4 text-gray-700">
            {/* Your bio */}
          </p>
        </section>
        <section id="projects" className="my-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {/* Project cards */}
          </div>
        </section>
        <section id="contact" className="my-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <form className="mt-4">
            {/* Contact form */}
          </form>
        </section>
      </main>
      <footer className="p-6 border-t border-gray-200 text-center">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
