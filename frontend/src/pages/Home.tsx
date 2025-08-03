import profileImg from "../assets/profile.png";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300 px-6">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 👤 Left: Text Content */}
          <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-text">
                Gajanan Rasekar
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I’m a full-stack developer with hands-on experience in <strong>Angular</strong>, &nbsp 
              <strong>Vue</strong>, and <strong>Java (Spring Boot)</strong>. I’m also familiar with 
              &nbsp <strong>React</strong> aanad enjoy building clean, efficient, and user-friendly web applications.
            </p>

            {/* 🎯 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-md font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >
                Contact Me
              </Link>
            </div>

            {/* 🌐 Social Media Icons */}
            <div className="flex gap-6 text-2xl text-blue-600 dark:text-blue-400">
              <a
                href="https://github.com/gajanan157"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gajanan-rasekar-040993200/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/gajananrasekar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/gajanan_rasekar/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/gajananrasekar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* 🖼️ Right: Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImg} // Replace with your actual image path
              alt="Gajanan Rasekar"
              className="w-64 h-64 rounded-full shadow-xl object-cover border-4 border-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
