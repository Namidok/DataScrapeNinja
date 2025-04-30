import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/johndoe", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/johndoe", label: "Instagram" }
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
              <a className="text-2xl font-bold gradient-text">John Doe</a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Web developer & UI/UX designer creating modern digital experiences.
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
            <p className="text-muted-foreground">San Francisco, California</p>
            <p className="text-muted-foreground mt-2">
              <a href="mailto:john@example.com" className="hover:text-primary">
                john@example.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed with ❤️ and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
