import { motion, useInView } from 'motion/react';
import { ArrowRight, BarChart3, Mail, Network, Twitter, Users, Building2, ChevronRight, TrendingUp, Linkedin, ChevronDown, Search, PenTool, MapPin, LineChart, FileCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
// @ts-ignore
import heroBg from './assets/images/nairobi_data_skyline_1780696343014.png';

export default function App() {
  return (
    <div className="min-h-screen bg-archways-base text-slate-200 font-sans selection:bg-archways-red/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-archways-base/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-archways-red" />
            <span className="text-xl font-bold tracking-tight text-white">Archways<span className="text-archways-red">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#about" className="hover:text-white transition-colors">Firm</a>
          </div>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded text-sm font-medium transition-all flex items-center gap-2 group">
            Global Reach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background abstract data skyline" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-linear-to-b from-archways-base/80 via-archways-base/90 to-archways-base"></div>
          
          {/* Subtle grid and lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/4 top-0 w-px bg-linear-to-b from-archways-red/50 to-transparent"
          />
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute top-1/3 right-0 h-px bg-linear-to-l from-archways-amber/30 to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-archways-red/30 bg-archways-red/10 text-archways-red text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-archways-red animate-pulse"></div>
              Dedicated Kenyan Intelligence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Archways Consultants: <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">Kenya's Dedicated Research Authority.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl"
            >
              From market dynamics in Nairobi to nationwide socio-economic studies, bridging gaps with evidence-based insights. We transform complex local signals into clear, actionable authority.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="bg-archways-red hover:bg-archways-red/90 text-white px-8 py-4 rounded font-semibold transition-colors flex items-center justify-center gap-2">
                Engage Our Experts
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded font-medium transition-colors flex items-center justify-center">
                Explore Methodologies
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise / Features Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
              <p className="text-slate-400 text-lg">Rigorous methodologies applied across critical sectors to unlock strategic advantages.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-archways-red font-medium hover:text-archways-red/80 transition-colors">
              View full taxonomy <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6 text-archways-red" />}
              title="Market & Consumer Dynamics"
              description="Deep analysis into purchasing behaviors, competitive landscapes, and emerging macro-trends to position your enterprise."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6 text-archways-amber" />}
              title="Social & Economic Research"
              description="Comprehensive studies on societal shifts, policy impacts, and demographic evolutions driving structural change."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Network className="w-6 h-6 text-archways-green" />}
              title="Scientific Data Analytics"
              description="Advanced quantitative modeling and spatial analysis providing empirical foundations for highly technical operational decisions."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Trust Metric Section */}
      <section className="border-y border-white/5 bg-archways-surface/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="text-4xl text-archways-red font-bold mb-2">
                <AnimatedCounter to={98} suffix="%" />
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Predictive Accuracy</div>
            </div>
            <div>
              <div className="text-4xl text-white font-bold mb-2">
                <AnimatedCounter to={47} />
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Counties Covered</div>
            </div>
            <div>
              <div className="text-4xl text-white font-bold mb-2">
                <AnimatedCounter to={15} />
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Target Sectors</div>
            </div>
            <div>
              <div className="text-4xl text-archways-amber font-bold mb-2">
                <AnimatedCounter to={1} prefix="< " suffix="%" />
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Margin of Error</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Journey Section */}
      <section id="process" className="py-24 border-b border-white/5 bg-archways-surface/30 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engagement Journey</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">A rigorous, structured approach from initial discovery to the delivery of actionable strategic intelligence.</p>
          </div>

          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-slate-700/50"></div>
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-[39px] top-10 bottom-10 w-px bg-slate-700/50"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 relative">
               <ProcessStep num="01" title="Discovery" desc="Aligning on core objectives and scoping." icon={<Search className="w-8 h-8" />} delay={0} />
               <ProcessStep num="02" title="Design" desc="Architecting our research methodology." icon={<PenTool className="w-8 h-8" />} delay={0.15} />
               <ProcessStep num="03" title="Execution" desc="Deploying field teams across regions." icon={<MapPin className="w-8 h-8" />} delay={0.3} />
               <ProcessStep num="04" title="Analytics" desc="Processing and modeling the gathered data." icon={<LineChart className="w-8 h-8" />} delay={0.45} />
               <ProcessStep num="05" title="Delivery" desc="Presenting empirical, strategic insights." icon={<FileCheck className="w-8 h-8" />} delay={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement FAQ Section */}
      <section id="faq" className="py-24 border-b border-white/5 bg-archways-base">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engagement FAQ</h2>
            <p className="text-slate-400 text-lg">Common questions regarding our research timelines, methodologies, and consultation process.</p>
          </div>
          <div className="flex flex-col gap-2">
            <FAQItem 
              question="What is the typical timeline for a comprehensive market research project?"
              answer="Project timelines vary based on scope and geographical spread. A standard Nairobi-focused market analysis typically requires 4-6 weeks, whereas a nationwide multi-county socio-economic study may take 10-14 weeks to ensure robust data collection and quality assurance."
            />
            <FAQItem 
              question="How do you ensure data accuracy and cultural relevance in the Kenyan market?"
              answer="Our field teams are locally sourced from the regions they survey, ensuring nuanced understanding of cultural contexts and language dialects. This is backed by rigorous multi-tier data validation and real-time electronic monitoring."
            />
            <FAQItem 
              question="What happens during the initial consultation?"
              answer="The initial consultation is a discovery session with our senior partners. We assess your core operational challenges, define the specific intelligence required to solve them, and outline a tailored methodological approach."
            />
            <FAQItem 
              question="Do you handle both qualitative and quantitative research?"
              answer="Yes. We are a fully dedicated, multi-disciplinary firm. We often deploy mixed-method designs, pairing large-scale quantitative surveys with deep-dive qualitative In-Depth Interviews (IDIs) and focus groups to provide complete situational awareness."
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 border-b border-white/5 bg-archways-surface/10">
        <div className="max-w-3xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Initiate a Project</h2>
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded px-4 py-3 text-white focus:outline-none focus:border-archways-red focus:bg-slate-800 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded px-4 py-3 text-white focus:outline-none focus:border-archways-red focus:bg-slate-800 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-800/50 border border-slate-700/50 rounded px-4 py-3 text-white focus:outline-none focus:border-archways-red focus:bg-slate-800 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Company / Organization</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded px-4 py-3 text-white focus:outline-none focus:border-archways-red focus:bg-slate-800 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Project Brief</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700/50 rounded px-4 py-3 text-white focus:outline-none focus:border-archways-red focus:bg-slate-800 transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-archways-red hover:bg-archways-red/90 text-white font-semibold py-4 rounded transition-colors mt-4">
                Submit Inquiry
              </button>
           </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-archways-base pt-16 pb-12 relative overflow-hidden">
        {/* Subtle geometric background line */}
        <div className="absolute right-0 bottom-0 w-1/2 h-px bg-linear-to-r from-transparent to-archways-red/20"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Initiate a Project</h3>
              <p className="text-slate-400 max-w-md mb-8">
                Connect with our senior partners to discuss your specific analytical requirements and explore our methodologies.
              </p>
              <div className="flex items-center gap-3 text-lg font-mono text-white bg-slate-800/50 inline-flex px-6 py-4 rounded border border-slate-700/50">
                <Mail className="w-5 h-5 text-archways-amber" />
                <a href="mailto:K2mreseachers@gmail.com" className="hover:text-archways-red transition-colors">
                  K2mreseachers@gmail.com
                </a>
              </div>
            </div>
            <div className="md:text-right flex flex-col md:items-end justify-between">
               <div className="mb-8">
                 <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Location Matrix</h4>
                 <p className="text-slate-400 font-light leading-relaxed">
                   Nairobi, Kenya<br />
                   Global Operations Hub
                 </p>
               </div>
               <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                   <Twitter className="w-5 h-5" />
                 </a>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-sm font-light text-slate-500">
            <p>&copy; {new Date().getFullYear()} Archways Consultants. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Engagement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay = 0 }: { icon: ReactNode, title: string, description: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-slate-800/20 hover:bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 rounded p-8 transition-all h-full flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-archways-red/0 to-transparent group-hover:via-archways-red/50 transition-all duration-500"></div>
      <div className="w-12 h-12 rounded bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 font-light leading-relaxed flex-grow">{description}</p>
      
      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-archways-red transition-colors w-max">
        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left text-lg font-medium text-white hover:text-archways-red transition-colors"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-archways-red' : 'text-slate-400'}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-400 font-light pr-8 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

function ProcessStep({ num, title, desc, icon, delay }: { num: string, title: string, desc: string, icon: ReactNode, delay: number }) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-50px" }}
       transition={{ duration: 0.6, delay }}
       className="relative flex md:flex-col items-center md:items-center text-left md:text-center group"
    >
      <div className="w-20 h-20 shrink-0 rounded-full bg-archways-base border border-slate-700/80 group-hover:border-archways-red transition-colors z-10 flex items-center justify-center shadow-lg mb-0 md:mb-6 mr-6 md:mr-0">
        <div className="text-archways-red group-hover:text-white transition-colors">
           {icon}
        </div>
      </div>
      <div>
        <div className="text-archways-red font-mono text-xs font-semibold mb-2 tracking-widest uppercase">Phase {num}</div>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-400 font-light text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ from = 0, to, duration = 2, suffix = '', prefix = '' }: { from?: number, to: number, duration?: number, suffix?: string, prefix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setValue(to); // Ensure it ends exactly on the target value
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{prefix}{value}{suffix}</span>;
}

