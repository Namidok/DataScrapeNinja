import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ThemeProvider } from "next-themes";
import i18n from "./lib/i18n"; // Import i18n configuration
import { I18nextProvider } from 'react-i18next';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <BackgroundAnimation />
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
