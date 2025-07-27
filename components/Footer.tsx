import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiHome,
} from "react-icons/fi";
import AnimatedLink from "./AnimatedLink"; // ✅ Import our premium link

interface FooterProps {
  footerRef?: React.Ref<HTMLElement>;
}

const Footer: React.FC<FooterProps> = () => {
  const socialLinks = [
    { icon: <FiFacebook />, href: "#" },
    { icon: <FiTwitter />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "Products", path: "/products" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", path: "#" },
        { name: "Documentation", path: "#" },
        { name: "Customer Service", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/legal" },
        { name: "Terms of Service", path: "/legal" },
      ],
    },
  ];

  return (
    <footer
      className="relative h-screen w-full text-white font-[Lato]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* ✅ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5020960/5020960-uhd_2732_1440_25fps.mp4"
        autoPlay
        muted
        loop
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ✅ Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* 🔹 Center Logo & Brand */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedLink to="/" className="flex flex-col items-center gap-3">
            <FiHome className="text-blue-400 text-5xl sm:text-6xl" />
            <span className="text-4xl sm:text-6xl font-extrabold tracking-wide">
              nesto
            </span>
          </AnimatedLink>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl max-w-md sm:max-w-xl mx-auto text-gray-200 leading-relaxed">
            Automate your life with next-gen smart home technology.
          </p>

          {/* ✅ Social Icons */}
          <div className="flex gap-4 sm:gap-6 mt-6 justify-center flex-wrap">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="hover:text-blue-400 transition"
              >
                {React.cloneElement(social.icon, {
                  size: 24,
                  className: "sm:w-7 sm:h-7",
                })}
              </a>
            ))}
          </div>
        </div>

        {/* 🔹 Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-4xl text-center mt-4 sm:mt-0">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <AnimatedLink
                      to={link.path}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🔹 Bottom copyright */}
        <div className="absolute bottom-4 sm:bottom-6 text-center text-xs sm:text-sm text-gray-300 px-2">
          © {new Date().getFullYear()} Nesto Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
