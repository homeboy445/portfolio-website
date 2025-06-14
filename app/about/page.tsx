"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import portfolioData from "../data.js";
import Link from "next/link";
import DP from "../../assets/dp.jpg";

export default function AboutPage() {
  const profileRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);

  const properties = useMemo(() => {
    return {
      sections: {
        marginBottom: "mb-[15%]",
      },
    };
  }, []);

  const showNavigationBar = useCallback(() => {
    return window.innerWidth >= 1000;
  }, []);

  const [shouldRenderNavigationBar, setShouldRenderNavigationBar] = useState(
    showNavigationBar()
  );

  useEffect(() => {
    const handleResize = () => {
      setShouldRenderNavigationBar(showNavigationBar());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showNavigationBar]);

  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-4 md:px-16 mt-10 max-w-7xl mx-auto flex flex-col justify-center items-center relative">
      {/* Fixed Navigation Index */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="hidden xl:block fixed right-[4%] top-[35%] -translate-y-1/2 border-l-2 border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 p-4 rounded-lg"
      >
        <nav
          className="space-y-4 pl-4"
          style={{ display: shouldRenderNavigationBar ? "block" : "none" }}
        >
          {[
            { id: "profile", label: "Profile", ref: profileRef },
            { id: "experience", label: "Work Experience", ref: experienceRef },
            { id: "education", label: "Education", ref: educationRef },
            { id: "skills", label: "Technical Skills", ref: skillsRef },
            { id: "tools", label: "Tools & Tech", ref: toolsRef },
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={(e) => {
                debugger;
                e.preventDefault();
                const element = section.ref.current;
                if (element) {
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const targetPosition = rect.top + scrollTop - 200; // 100px offset from top
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Profile Section */}
      <motion.section
        ref={profileRef}
        id="profile"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className={`flex flex-col md:flex-row items-center gap-8 ${properties.sections.marginBottom}`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-gray-200 shadow-lg hover:border-blue-500 transition-all duration-300"
        >
          <Image src={DP} alt="Profile" fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex-1 text-center md:text-left ml-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            {portfolioData.about.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {portfolioData.bio}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {portfolioData.description}
          </p>
          {portfolioData.about.calendar.display && (
            <Link
              href={portfolioData.about.calendar.link}
              target="_blank"
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Meeting
            </Link>
          )}
        </motion.div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        ref={experienceRef}
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className={`max-w-5xl mx-auto ${properties.sections.marginBottom}`}
      >
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text text-center">
          Work Experience
        </h1>
        <div className="flex flex-col">
          {portfolioData.workExperience.map((job) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-xl p-8 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/[0.07] dark:to-purple-500/[0.07] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-2">
                  {job.role}
                </h3>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {job.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {job.period}
                </p>
                <ul className="space-y-4">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:item:text-blue-600 dark:group-hover:item:text-blue-400 transition-colors">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={educationRef}
        id="education"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className={`max-w-5xl mx-auto ${properties.sections.marginBottom}`}
      >
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text text-center">
          Education
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative rounded-xl p-6 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/[0.07] dark:to-purple-500/[0.07] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className={`max-w-5xl mx-auto ${properties.sections.marginBottom}`}
        ref={skillsRef}
      >
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text text-center">
          Technical Skills
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative rounded-xl p-6 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/[0.07] dark:to-purple-500/[0.07] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools & Technologies Section */}
      <motion.section
        id="tools"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className={`max-w-5xl mx-auto ${properties.sections.marginBottom}`}
        ref={toolsRef}
      >
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text text-center">
          Tools & Technologies
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="flex flex-wrap gap-3"
        >
          {portfolioData.toolsAndTech.map((tool) => (
            <motion.span
              key={tool}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="group relative px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.08] to-purple-500/[0.08] dark:from-blue-500/[0.12] dark:to-purple-500/[0.12] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">{tool}</span>
            </motion.span>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
