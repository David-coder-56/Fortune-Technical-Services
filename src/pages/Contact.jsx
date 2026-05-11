import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle,
  Loader,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import { contactInfo } from "../utils/data";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
} from "../utils/animations";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errs.email = "Valid email required";
    }
    if (!formData.message.trim() || formData.message.length < 20) {
      errs.message = "Please provide a meaningful message (min. 20 characters)";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="card-dark p-8 md:p-12">
      <h3 className="font-display font-black text-3xl text-slate uppercase mb-2">
        Send a Message
      </h3>
      <p className="font-body text-slate/40 text-sm mb-10">
        Our team responds within 4 business hours.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle size={56} className="text-gold mx-auto mb-6" />
            <h4 className="font-display font-black text-2xl text-slate uppercase mb-3">
              Message Received
            </h4>
            <p className="font-body text-slate/50">
              Thank you, {formData.name}. A Fortune engineer will contact you
              within 4 hours.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  service: "",
                  message: "",
                });
              }}
              className="mt-8 btn-outline text-xs"
            >
              Send Another
            </button>
          </motion.div>
        ) : status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-500 text-2xl font-bold">!</span>
            </div>
            <h4 className="font-display font-black text-2xl text-slate uppercase mb-3">
              Submission Failed
            </h4>
            <p className="font-body text-slate/50">
              Something went wrong. Please try again or contact us directly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 btn-outline text-xs"
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500/60" : ""}
                  />
                  <label htmlFor="name">Full Name *</label>
                </div>
                {errors.name && (
                  <p className="text-red-400 text-[10px] font-mono mt-1 uppercase tracking-wider">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500/60" : ""}
                  />
                  <label htmlFor="email">Email Address *</label>
                </div>
                {errors.email && (
                  <p className="text-red-400 text-[10px] font-mono mt-1 uppercase tracking-wider">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone Number</label>
              </div>

              {/* Service */}
              <div className="form-group">
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="drilling">Rotary Drilling</option>
                  <option value="mining">Mining Operations</option>
                  <option value="survey">Geological Survey</option>
                  <option value="equipment">Equipment Leasing</option>
                  <option value="civil">Site Preparation</option>
                  <option value="hse">Safety & Compliance</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <label htmlFor="service">Service of Interest</label>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-red-500/60" : ""}
                />
                <label htmlFor="message">Project Description *</label>
              </div>
              {errors.message && (
                <p className="text-red-400 text-[10px] font-mono mt-1 uppercase tracking-wider">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Inquiry <ChevronRight size={16} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-charcoal grid-line overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 to-charcoal" />
        <div className="absolute right-1/4 top-1/3 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[80px]" />
        <div className="noise-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-36 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="section-label mb-6">
              Get in Touch
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-6xl md:text-8xl uppercase leading-none text-slate"
            >
              Let's Build
              <br />
              Something <span className="text-gold">Strong</span>
              <br />
              Together
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="font-display font-black text-4xl text-slate uppercase mb-6">
                  Reach Our Team
                </h2>
                <p className="font-body text-slate/50 leading-relaxed">
                  Whether you're planning an exploration campaign, need
                  emergency equipment support, or want to discuss a long-term
                  contract — we're ready to respond.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Main Office",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone}`,
                  },
                  {
                    icon: Phone,
                    label: "24/7 Emergency Line",
                    value: contactInfo.emergency,
                    href: `tel:${contactInfo.emergency}`,
                    accent: true,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: contactInfo.address,
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: contactInfo.hours,
                  },
                ].map(({ icon: Icon, label, value, href, accent }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div
                      className={`w-10 h-10 shrink-0 flex items-center justify-center border ${
                        accent
                          ? "border-gold bg-gold/10"
                          : "border-steel-dark/40"
                      } mt-0.5`}
                    >
                      <Icon
                        size={16}
                        className={accent ? "text-gold" : "text-slate/40"}
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-slate/30 mb-1">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-slate/70 hover:text-gold transition-colors text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-slate/70 text-sm">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate/30 mb-4">
                  Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ISO 9001:2015",
                    "ISO 14001:2015",
                    "ISO 45001:2018",
                    "NEBOSH",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="font-mono text-[9px] uppercase tracking-widest border border-gold/20 text-gold/50 px-3 py-1"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="h-72 bg-navy-dark border-t border-steel-dark/30 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-line opacity-30" />
        <div className="text-center relative z-10">
          <MapPin size={32} className="text-gold mx-auto mb-3" />
          <p className="font-mono text-slate/40 text-xs uppercase tracking-widest">
            14 Tubman Blvd, Sinkor, Monrovia, Liberia
          </p>
          <a
            href="https://maps.google.com?q=Monrovia+Liberia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-mono text-gold text-xs uppercase tracking-widest hover:underline"
          >
            Open in Google Maps <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
