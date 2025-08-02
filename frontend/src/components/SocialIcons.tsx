import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

interface SocialLink {
  icon: React.ReactElement;
  url: string;
  label: string;
  hover: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/gajananrasekar",
    label: "GitHub",
    hover: "hover:bg-gray-900",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/gajananrasekar",
    label: "LinkedIn",
    hover: "hover:bg-blue-700",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/gajananrasekar",
    label: "Twitter",
    hover: "hover:bg-blue-500",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/gajananrasekar",
    label: "Instagram",
    hover: "hover:bg-gradient-to-tr from-pink-500 to-yellow-500",
  },
  {
    icon: <FaFacebook />,
    url: "https://facebook.com/gajananrasekar",
    label: "Facebook",
    hover: "hover:bg-blue-800",
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {socialLinks.map(({ icon, url, label, hover }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-xl text-gray-700 dark:text-gray-300 ${hover} hover:text-white transition-transform transform hover:scale-110 duration-300`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;