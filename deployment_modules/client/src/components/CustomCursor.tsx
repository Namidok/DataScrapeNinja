import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Use spring for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // For the trailing effect
  const cursorXSmooth = useSpring(cursorX, { damping: 50, stiffness: 200 });
  const cursorYSmooth = useSpring(cursorY, { damping: 50, stiffness: 200 });
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };
    
    const hideCursor = () => {
      setIsVisible(false);
    };
    
    const showCursor = () => {
      setIsVisible(true);
    };
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseover", showCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseover", showCursor);
    };
  }, [cursorX, cursorY]);
  
  // Only show custom cursor on larger screens
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }
  
  return (
    <div className="custom-cursor-container">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 mix-blend-difference pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/20 pointer-events-none z-50"
        style={{
          x: cursorXSmooth,
          y: cursorYSmooth,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </div>
  );
}
