/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Link as LinkIcon, Phone, Cpu, Code, Brain, Layers, Database, Server, Cloud, Menu, ChevronDown, Briefcase, Rocket, ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-primary/20">
      {/* Background Glows */}
      <div className="soft-glow top-[-10%] left-[-10%] bg-primary" />
      <div className="soft-glow bottom-[-10%] right-[-10%] bg-secondary" />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-bold tracking-tight hidden sm:inline-block">Aashish Porwal</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {["About", "Skills", "Experience", "Projects"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1C5Q4wgSMwpzZtM9kcq2NXKxOaNXoQf8w/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
            >
              My Resume
            </a>
            <button 
              className="md:hidden text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center space-y-8 text-2xl font-bold"
        >
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-sm uppercase tracking-widest mt-8">Close</button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-xs font-medium text-slate-600 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Hi, I'm Aashish
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-center mb-8 leading-[0.9]"
        >
          AI <span className="text-gradient">Engineer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed"
        >
          I craft intelligent digital systems that solve complex problems and automate workflows
          —from LLM-powered apps to multi-agent architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all group">
            View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-1">3</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Featured Projects</div>
          </div>
          <div className="border-x border-slate-100 px-12 sm:px-24">
            <div className="text-4xl font-bold text-secondary mb-1">2+</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-1">∞</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Ideas to Explore</div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll to explore</span>
          <ChevronDown className="animate-bounce" size={20} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto" id="projects">
        <SectionHeader 
          title="Selected Projects" 
          subtitle="A showcase of AI-driven solutions and intelligent systems I've built." 
        />
        
        <div className="space-y-12">
          {[
            {
              id: "01",
              title: "DDC — 360F",
              subtitle: "AI Recommendation System",
              description: "Optimized OCR + VLM pipeline, reducing 20-page PDF processing time from 280s to 45–60s. Migrated system to LangGraph with a master agent orchestrating Fact Find, Gap Analysis, and Recommendation phases.",
              tags: ["LangGraph", "OCR", "VLM", "MCP"],
              image: "https://picsum.photos/seed/ai-rec/1200/800"
            },
            {
              id: "02",
              title: "ProtoBots AI",
              subtitle: "Document Intelligence Platform",
              description: "Integrated multiple LLM providers for document-centric conversational AI systems. Built an LLM benchmarking platform to evaluate accuracy, latency, and cost efficiency.",
              tags: ["LLMs", "Benchmarking", "Vector Search", "Embeddings"],
              image: "https://picsum.photos/seed/protobots/1200/800"
            }
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-[40px] overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-8 md:p-16">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 font-bold mb-8">
                    {project.id}
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary font-bold mb-6">{project.subtitle}</p>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all group/btn">
                    View Project <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
                <div className="relative h-[400px] lg:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-white" id="skills">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: <Code className="text-primary" />, title: "Languages", content: "Python, SQL, JavaScript" },
              { icon: <Brain className="text-secondary" />, title: "AI / ML", content: "LLMs, Model Training, LoRA, QLoRA, RAG, Embeddings, OCR (Tesseract), VLMs, Prompt Engineering, AI Deployment" },
              { icon: <Layers className="text-accent" />, title: "Frameworks", content: "LangChain, LangGraph, MCP, OpenAI, Anthropic, DeepSeek" },
              { icon: <Database className="text-primary" />, title: "Databases", content: "Qdrant, ChromaDB, FAISS, MongoDB, MySQL" },
              { icon: <Server className="text-secondary" />, title: "Backend", content: "FastAPI, Django, Flask, DRF, REST APIs, JWT" },
              { icon: <Cloud className="text-accent" />, title: "Cloud & Tools", content: "AWS (EC2, S3), Docker, Redis, Git, GitHub, GitLab, Jira, Swagger" }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{skill.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto" id="experience">
        <SectionHeader title="Work Experience" />
        <div className="space-y-16">
          {[
            {
              role: "Software Developer (AI/ML)",
              company: "ThoughtWin IT Solutions",
              period: "Aug 2025 – Present",
              points: [
                "Engineered scalable AI pipelines integrating OCR, embeddings, and vector search for unstructured data.",
                "Architected multi-agent workflows using LangGraph for adaptive task routing and complex reasoning.",
                "Deployed RAG systems using Qdrant and ChromaDB to deliver context-aware responses."
              ]
            },
            {
              role: "Jr. Python Developer",
              company: "Growing IT Solutions",
              period: "Feb 2024 – Present",
              points: [
                "Built AI-powered chat and report bots using OpenAI and Anthropic APIs.",
                "Designed scalable backend services using Django and FastAPI.",
                "Automated WhatsApp workflows handling 60% of customer interactions."
              ]
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-slate-400 font-medium">{exp.company}</p>
                </div>
                <div className="text-slate-400 font-bold text-sm mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-4">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-slate-500 flex gap-4 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-current" /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <a href="mailto:porwalaashish9@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 hover:bg-primary hover:text-white transition-all font-bold text-sm">
              <Mail size={18} /> porwalaashish9@gmail.com
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 hover:bg-primary hover:text-white transition-all font-bold text-sm">
              <LinkIcon size={18} /> LinkedIn
            </a>
            <a href="tel:+917389304078" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 hover:bg-primary hover:text-white transition-all font-bold text-sm">
              <Phone size={18} /> +91 7389304078
            </a>
          </div>
          
          <p className="text-[10px] tracking-[0.4em] text-slate-300 uppercase font-bold">
            © 2025 AASHISH PORWAL // ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </footer>
    </div>
  );
}
