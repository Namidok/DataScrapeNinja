import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import AnimatedSection from "@/components/AnimatedSection";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, MessageSquare, Send } from "lucide-react";
import Chatbot from "@/components/Chatbot";

export default function Contact() {
  const { t } = useTranslation();
  const [submitting, setSubmitting] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { toast } = useToast();

  // Define form schema
  const formSchema = z.object({
    name: z.string().min(2, t("Name must be at least 2 characters")),
    email: z.string().email(t("Please enter a valid email address")),
    message: z.string().min(10, t("Message must be at least 10 characters"))
  });

  type FormData = z.infer<typeof formSchema>;
  
  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t("Message sent!"),
      description: t("Thanks for reaching out. I'll get back to you soon."),
    });
    
    form.reset();
    setSubmitting(false);
  };
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Namidok",
      icon: <FaGithub className="w-6 h-6" />,
      username: "@Namidok"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/srikar-kodi-046a631b2/",
      icon: <FaLinkedin className="w-6 h-6" />,
      username: "Srikar Kodi"
    }
  ];

  return (
    <div className="w-full">
      {/* Header section */}
      <section className="py-24 relative overflow-hidden contact-bg">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute bottom-20 left-[30%] w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("Contact Title")} <span className="gradient-text">{t("Touch")}</span>
            </h1>
            
            <div className="h-1 w-20 bg-primary mb-10"></div>
            
            <p className="text-xl max-w-3xl text-muted-foreground mb-4">
              {t("Contact Intro")}
            </p>
            
            <Button 
              variant="secondary" 
              className="mt-4"
              onClick={() => setShowChat(true)}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {t("Start a chat")}
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact content */}
      <AnimatedSection className="py-12 bg-secondary about-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Mail className="mr-2 h-6 w-6" />
                  {t("Send me a message")}
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Your Name")}</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Email Address")}</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Message")}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full button-glow"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t("Sending...")}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          {t("Send Message")}
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Social links */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{t("Connect with me")}</h2>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card rounded-xl glow-border"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{link.name}</h3>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                    <svg 
                      className="ml-auto h-5 w-5 text-muted-foreground" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">{t("Location")}</h3>
                <p className="text-muted-foreground mb-2">{t("Visakhapatnam, Andhra Pradesh")}</p>
                <p className="text-muted-foreground">{t("India")}</p>
              </div>
              
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">{t("Email")}</h3>
                <a 
                  href="mailto:kodisrikar@gmail.com" 
                  className="text-primary hover:underline"
                >
                  kodisrikar@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* FAQ section */}
      <AnimatedSection className="py-24 hero-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("Frequently Asked Questions")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in data engineering, ETL pipelines, and full-stack development. I primarily work with Python, Flask, Django, PostgreSQL, and AWS cloud services."
              },
              {
                question: "Are you available for freelance work?",
                answer: "Yes, I'm open to freelance opportunities, particularly for interesting projects that align with my skills and interests."
              },
              {
                question: "What experience do you have with data pipelines?",
                answer: "I have developed ETL pipelines using Python for data transformation and loading into PostgreSQL databases. I'm skilled in building data warehousing solutions and implementing efficient data processing workflows."
              },
              {
                question: "Do you have experience with NLP and chatbots?",
                answer: "Yes, I've developed interactive chatbots with Natural Language Processing capabilities for applications like TemplesWiki. I've also created 'Cipher', a personal chatbot assistant powered by Python."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{t(faq.question)}</h3>
                <p className="text-muted-foreground">{t(faq.answer)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Chatbot */}
      {showChat && (
        <Chatbot onClose={() => setShowChat(false)} />
      )}
    </div>
  );
}
