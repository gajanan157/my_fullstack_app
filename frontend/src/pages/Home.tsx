import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">Gajanan Rasekar</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          A full-stack developer crafting modern web apps with <strong>React</strong>, <strong>Tailwind</strong>,
          and <strong>Java (Spring Boot)</strong>. Let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
