import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileDown, ChevronRight } from "lucide-react";
import Chatbot from "@/components/Chatbot";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [showChat, setShowChat] = useState(false);

  const experiences = [
    {
      period: "2023 - 2025",
      title: t("Application Developer"),
      company: "Vavili Technologies",
      description: <>{t("Designed full stack web applications, an avid member on working on our product TemplesWiki.")}</>
    },
    {
      period: "2022 - 2023",
      title: t("Trainee Software Engineer"),
      company: "Valuelabs",
      description: t("Worked as a Quality Assurance Engineer, developing and executing comprehensive test plans, collaborating closely with Product Managers on requirement analysis, and documenting test results to maintain high-quality software delivery standards.")
    }
  ];

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="py-16 relative overflow-hidden about-bg">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-[20%] w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("About Me Title")} <span className="gradient-text">{t("Me")}</span>
            </h1>

            <div className="h-1 w-20 bg-primary mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("Who I Am")}</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  {t("About Intro 1")}
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  {t("About Intro 2")}
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  {t("About Intro 3")}
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  {t("About Intro 4")}
                </p>


                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="https://drive.google.com/file/d/1WPFbJg3arhVcQzi7AoWIOE6qn4RB0Kth/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Button className="button-glow">
                      <FileDown className="mr-2 h-5 w-5" /> {t("View Resume")}
                    </Button>
                  </a>

                  <Button variant="outline" onClick={() => setShowChat(true)}>
                    {t("Ask Me Anything")}
                  </Button>
                </div>
              </div>

              <div>
                <motion.div
                  className="relative border-2 border-primary/20 rounded-2xl overflow-hidden max-w-sm mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/attached_assets/Portfolio DP.jpg"
                      alt="Srikar Kodi"
                      className="w-full h-full object-cover"
                      style={{
                        opacity: 1,
                        transition: "opacity 0.6s ease-in-out"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills section */}
      <AnimatedSection className="py-24 bg-secondary about-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("Technical Skills")}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Python", "Numpy", "Pandas", "Flask",
              "NLP", "TensorFlow", "PyTorch", "Data Visualization",
              "SQL", "PostgreSQL", "JavaScript", "React JS",
              "AWS", "Docker", "Kubernetes", "REST APIs", "Linux"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-card p-4 rounded-xl text-center glow-border"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience section */}
      <AnimatedSection className="py-24 hero-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("Work Experience")}</h2>

          <div className="space-y-12 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 border-l-2 border-primary/30"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-lg text-primary mb-3">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Hobbies section */}
      <AnimatedSection className="py-24 bg-secondary projects-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t("Education")}</h2>

              <div className="space-y-8">
                <motion.div
                  className="bg-card p-6 rounded-xl glow-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-sm text-muted-foreground">2016 - 2020</p>
                  <h3 className="text-xl font-bold mt-2">{t("B.Tech in Electronics and Communication")}</h3>
                  <p className="text-primary">{t("MVGR College of Engineering")}</p>
                  <p className="mt-3 text-muted-foreground">
                    {t("Focused on building a strong foundation in technical skills and electronics. Developed problem-solving abilities and project management.")}
                  </p>
                </motion.div>


              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t("Hobbies & Interests")}</h2>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Football", icon: "⚽" },
                  { name: "Cricket", icon: "🏏" },
                  { name: "Films", icon: "🎬" },
                  { name: "Reading", icon: "📚" },
                  { name: "Travelling", icon: "✈️" },
                  { name: "Music", icon: "🎵" }
                ].map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    className="bg-card p-6 rounded-xl flex items-center gap-4 glow-border"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-3xl">{hobby.icon}</span>
                    <span className="text-lg">{t(hobby.name)}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/projects">
                  <Button className="w-full button-glow">
                    {t("See My Projects")} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
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
