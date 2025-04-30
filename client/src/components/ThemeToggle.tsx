import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Theme is stored in localStorage on the client side
  // This prevents a hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled>
      <Sun className="h-5 w-5" />
    </Button>;
  }
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };
  
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative">
      <Sun 
        className={`h-5 w-5 absolute transition-transform ${
          theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`} 
      />
      <Moon 
        className={`h-5 w-5 absolute transition-transform ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`} 
      />
      <Monitor 
        className={`h-5 w-5 absolute transition-transform ${
          theme === "system" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`} 
      />
      
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-full"
        layoutId="theme-toggle-highlight"
        initial={false}
        transition={{ type: "spring", damping: 15, stiffness: 300 }}
        animate={{ opacity: [0, 0.5, 0] }}
        key={theme}
      />
    </Button>
  );
}
