const About = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I’m a passionate full-stack developer with 4+ years of experience in building modern, responsive web applications.
          I specialize in <span className="font-semibold text-blue-600 dark:text-blue-400">Angular, Vue, React</span> for frontend and <span className="font-semibold text-blue-600 dark:text-blue-400">Java (Spring Boot)</span> with <span className="font-semibold text-blue-600 dark:text-blue-400">MySQL</span> for backend.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I'm currently focused on building scalable SaaS applications and portfolio projects using React, Tailwind CSS, and AWS.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          In my free time, I enjoy exploring new tech, contributing to open source, and helping others learn software development.
        </p>
      </div>
    </section>
  );
};

export default About;
