import React from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Assuming you use react-i18next

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      titleKey: "footer.aboutUs.title", 
      links: [
        { key: "footer.aboutUs.ourStory", href: "#" },
        { key: "footer.aboutUs.team", href: "#" },
        { key: "footer.aboutUs.careers", href: "#" },
        { key: "footer.aboutUs.press", href: "#" }
      ]
    },
    { 
      titleKey: "footer.support.title", 
      links: [
        { key: "footer.support.faqs", href: "#" },
        { key: "footer.support.contact", href: "#" },
        { key: "footer.support.privacyPolicy", href: "#" },
        { key: "footer.support.terms", href: "#" }
      ]
    },
    { 
      titleKey: "footer.resources.title", 
      links: [
        { key: "footer.resources.blog", href: "#" },
        { key: "footer.resources.guides", href: "#" },
        { key: "footer.resources.webinars", href: "#" },
        { key: "footer.resources.helpCenter", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("footer.brandName")}
            </motion.h2>
            <p className="text-gray-300">{t("footer.tagline")}</p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaPhone className="text-cyan-400" />
                <span>{t("footer.phone")}</span>
              </div>
              <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="text-cyan-400" />
                <span>{t("footer.email")}</span>
              </div>
              <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={section.titleKey} className="space-y-4">
              <motion.h3 
                className="text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {t(section.titleKey)}
              </motion.h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + linkIndex * 0.05 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {t(link.key)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <motion.h3 
              className="text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("footer.newsletter.title")}
            </motion.h3>
            <p className="text-gray-300">{t("footer.newsletter.description")}</p>
            
            <motion.div 
              className="mt-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full p-3 pr-12 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button 
                className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg hover:scale-110 transition-transform"
                aria-label={t("footer.newsletter.subscribeButton")}
              >
                <FaPaperPlane />
              </button>
            </motion.div>

            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-cyan-500 transition-colors hover:scale-110" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-400 transition-colors hover:scale-110" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition-colors hover:scale-110" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-700 transition-colors hover:scale-110" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-red-600 transition-colors hover:scale-110" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-700 mt-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t("footer.copyright", { year: currentYear })}
          </motion.p>
          <motion.div 
            className="flex gap-4 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="#" className="hover:text-cyan-400 transition-colors">{t("footer.privacyPolicyLink")}</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">{t("footer.termsOfServiceLink")}</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">{t("footer.cookiesLink")}</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;