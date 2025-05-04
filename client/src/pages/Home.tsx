import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import ParallaxSection from "@/components/ParallaxSection";
import Chatbot from "@/components/Chatbot";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, MessageSquare } from "lucide-react";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    }
  };
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden hero-bg">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 30, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 z-10 relative text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Srikar Kodi</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedText text="Full Stack Python & AI Enthusiast" />
          </motion.div>
          
          <motion.p 
            className="text-lg max-w-2xl mx-auto mb-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I develop full stack applications that leverage AI technologies to solve real-world problems.
            Currently building intelligent web solutions that combine Python backends with modern frontend frameworks.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Link href="/about">
                <Button className="text-lg px-8 py-6 button-glow" size="lg">
                  About Me
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={item}>
              <Link href="/projects">
                <Button className="text-lg px-8 py-6 button-glow" size="lg" variant="outline">
                  View Projects
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={item}>
              <Button 
                className="text-lg px-8 py-6 button-glow" 
                size="lg" 
                variant="secondary"
                onClick={() => setShowChat(!showChat)}
              >
                Chat With Me
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Brief intro section */}
      <ParallaxSection className="py-24 bg-secondary about-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
            Transforming Data Into Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-card p-8 rounded-xl glow-border"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.5L9 16.5V11.5L12 9.5L15 11.5V16.5L12 18.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 9.5L9 7.5V2.5L12 0.5L15 2.5V7.5L12 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M22 15.5L19 13.5V8.5L22 6.5L25 8.5V13.5L22 15.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 15.5L-1 13.5V8.5L2 6.5L5 8.5V13.5L2 15.5Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <p className="text-muted-foreground">
                Building efficient ETL pipelines and data warehousing solutions for reliable data management.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-8 rounded-xl glow-border"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9H6V21H2V9Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 3H14V21H10V3Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M18 6H22V21H18V6Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
              <p className="text-muted-foreground">
                Implementing AI solutions and natural language processing models to extract insights from complex data.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-8 rounded-xl glow-border"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 2V12L17 17" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Creating end-to-end solutions with Python and modern web frameworks to deliver complete, scalable applications.
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Chatbot */}
      {showChat && (
        <Chatbot onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}
