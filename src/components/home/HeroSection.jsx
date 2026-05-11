import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../../utils/animations";
import HomeHeroSlider from "./HomeHeroSlider";

export default function HeroSection() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0.7, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal grid-line"
    >
      {/* Background layers */}
      <div className="absolute inset-0 noise-overlay z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-charcoal to-charcoal z-0" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy/80 rounded-full blur-[100px] z-0" />

      <motion.div style={{ y, opacity }} className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  Est. 2006 — Monrovia, Liberia
                </span>
                <span className="flex-1 h-px bg-gold/30" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-black text-6xl md:text-7xl xl:text-8xl leading-[1.1] text-slate mb-6"
              >
                Powering
                <br />
                <span className="text-gold text-glow">the Future</span>
                <br />
                Through Precision
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-body text-slate/60 text-lg leading-relaxed max-w-md mb-8"
              >
                Advanced geological solutions engineered for safety, efficiency,
                and scale. West Africa's premier mining & drilling services
                partner.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Explore Services <ChevronRight size={16} />
                </Link>
                <Link to="/projects" className="btn-outline">
                  View Projects <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-6 mt-12"
              >
                {[
                  { icon: CheckCircle2, label: "ISO 9001 Certified" },
                  { icon: Shield, label: "Zero LTI Record" },
                  { icon: Zap, label: "24/7 Operations" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-slate/50 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Icon size={14} className="text-gold" />
                    {label}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Slider */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <HomeHeroSlider />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
