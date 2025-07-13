import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useMemo } from 'react';

const BackgroundAnimation = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => {
      const color = 'rgba(255, 255, 255, 0.05)'; // Always dark mode spotlight
      return `radial-gradient(600px at ${x}px ${y}px, ${color}, transparent 80%)`
    }
  );

  const particles = useMemo(() => {
    const numParticles = 150; // Fixed for dark mode
    const particleSizeRange = [1, 2];
    const particleOpacityRange = [0.05, 0.15];
    const particleColor = '#ffffff'; // Fixed for dark mode

    return Array.from({ length: numParticles }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (particleSizeRange[1] - particleSizeRange[0]) + particleSizeRange[0],
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * (particleOpacityRange[1] - particleOpacityRange[0]) + particleOpacityRange[0],
      color: particleColor,
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background }}
      />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;