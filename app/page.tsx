"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Image,
  Input,
  Modal,
  Otp,
  Select,
  Skeleton,
  Tabs,
  TextArea,
  Toggle,
} from "./components/ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { EyeIcon } from "./components/svgs";
import { toast } from "sonner";
import { Animation, Glow, Loader } from "./components/global";
import ImageNext from "next/image";
import { useRef } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const tabs = [
    { label: "Overview", value: "overview" },
    { label: "Components", value: "components" },
    { label: "Settings", value: "settings" },
  ];

  const selectOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <main className="relative min-h-screen bg-vultisig-bg-primary text-white selection:bg-vultisig-turquoise selection:text-vultisig-bg-primary">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-vultisig-persian/20"></div>
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[30vh] w-[30vh] rounded-full blur-[100px]"
              style={{
                background:
                  i === 0 ? "#33E6BF" : i === 1 ? "#2155DF" : "#0439C7",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.15,
                animation: `float ${10 + i * 5}s infinite ease-in-out`,
                animationDelay: `${i * -5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 pt-20"
        >
          <div className="max-w-5xl mx-auto">
            {/* Logo and Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              {/* Glowing Logo */}
              <div className="relative w-24 h-24 mx-auto mb-12">
                <div className="absolute inset-0 bg-vultisig-turquoise rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                <Image
                  src="/vultisig-logo.svg"
                  alt="Vultisig"
                  fill
                  className="object-contain relative z-10"
                />
              </div>

              {/* Headline with Gradient Animation */}
              <h1 className="relative text-6xl sm:text-7xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-gradient-x bg-gradient-to-r from-vultisig-turquoise via-vultisig-persian to-vultisig-gradient-to bg-[length:200%_auto] bg-clip-text text-transparent">
                  The Future of
                </span>
                <br />
                <span className="relative inline-block text-white">
                  Multi-Signature
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-vultisig-turquoise to-vultisig-persian transform scale-x-0 animate-expand-line"></div>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Experience unparalleled security with next-gen multi-signature
                technology.
                <br className="hidden sm:block" />
                <span className="text-vultisig-turquoise">
                  No complexity, just pure innovation.
                </span>
              </motion.p>

              {/* Interactive CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-vultisig-turquoise to-vultisig-persian rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative font-semibold text-lg text-vultisig-bg-primary">
                    Get Started Free
                  </span>
                </button>

                <a
                  href="#features"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="font-medium">Explore Features</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                {trustStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-vultisig-turquoise to-vultisig-persian bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto animate-scroll-down"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-vultisig-turquoise to-vultisig-persian bg-clip-text text-transparent">
                Why Choose Vultisig?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for the future, designed for today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-vultisig-bg-secondary/50 to-transparent backdrop-blur-sm border border-white/5 hover:border-vultisig-turquoise/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-vultisig-turquoise/5 to-vultisig-persian/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-vultisig-turquoise transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vultisig-bg-secondary/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join the next generation of secure asset management. Start your
              journey today.
            </p>
            <button className="group relative px-12 py-5 bg-gradient-to-r from-vultisig-turquoise to-vultisig-persian rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative text-vultisig-bg-primary font-semibold text-xl">
                Try Vultisig Now
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🛡️",
    title: "Military-Grade Security",
    description:
      "Advanced encryption and multi-signature protocols ensure your assets remain protected at all times.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Optimized performance with near-instant transaction processing and real-time synchronization.",
  },
  {
    icon: "🤝",
    title: "Smart Collaboration",
    description:
      "Seamlessly manage shared wallets and coordinate with team members or organizations.",
  },
];

const trustStats = [
  {
    value: "$10B+",
    label: "Assets Secured",
  },
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "99.99%",
    label: "Uptime",
  },
  {
    value: "24/7",
    label: "Support",
  },
];
