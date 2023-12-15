import React from "react";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-8 mb-4">
      <p className="text-lg">
        <span className="uppercase">Train By Brain </span>
        by Oleksii Shevchenko
      </p>
      <ul className="flex items-center gap-2">
        <li>
          <a href="https://t.me/YA_ZNAL_CHTO_TI_PRYDESH" target="_blank">
            <FaTelegram size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oleksii-shevchenko-0b1a8b280/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Rainbow2281337" target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
