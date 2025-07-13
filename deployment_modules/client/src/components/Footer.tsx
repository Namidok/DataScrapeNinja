import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Namidok", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/srikar-kodi-046a631b2/", label: "LinkedIn" }
  ];
  
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <a className="text-2xl font-bold gradient-text">Srikar Kodi</a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Python Developer & Data Engineer specializing in ETL processes, data architecture, and full-stack development.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-xl"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Visakhapatnam, Andhra Pradesh, India</p>
            <p className="text-muted-foreground mt-2">
              <a href="mailto:kodisrikar@gmail.com" className="hover:text-primary">
                kodisrikar@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Srikar Kodi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
