"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop",
  "https://unsplash.com/photos/birds-eye-photo-of-grass-field--xvKQuNtOhI/download?force=true&w=2070",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop",
];

const ctaItems = [
  {
    title: "Discover Our Course",
    description: "Explore our pristine 18-hole championship course.",
    href: "/course",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Become a Member",
    description: "Join an exclusive community of golf enthusiasts.",
    href: "/contact",
    image: "https://images.unsplash.com/photo-1592910129840-25a162395e02?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Plan Your Visit",
    description: "Everything you need to know for your first visit.",
    href: "/visitors",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Latest Events",
    description: "Stay updated with our tournaments and social gatherings.",
    href: "/gallery",
    image: "https://images.unsplash.com/photo-1565492290150-516d56d10c05?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt="Abeokuta Golf Club"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-golf-gold uppercase tracking-[0.3em] font-sans text-sm md:text-base mb-4"
          >
            Experience Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            Abeokuta Golf Club <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-sans font-light italic opacity-90">
              Where Tradition Meets Excellence
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/course" className="btn-gold flex items-center justify-center gap-2">
              Explore the Course <ChevronRight size={20} />
            </Link>
            <Link href="" className="btn-primary flex items-center justify-center gap-2 bg-transparent border-white hover:bg-white hover:text-golf-green">
              Membership portal <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll to discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* Tagline Section */}
      <section className="py-24 bg-golf-cream relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-subtitle">A Sanctuary of Sport & Spirit</h2>
            <p className="font-serif text-3xl md:text-4xl text-golf-green leading-snug mb-8">
              &quot;Nestled amidst the lush landscapes of Abeokuta, our club offers more than just a game. It&apos;s an invitation to a lifestyle of elegance, tranquility, and vibrant community.&quot;
            </p>
            <div className="w-24 h-1 bg-golf-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Visual Grid CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ctaItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-96 overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <h3 className="font-serif text-3xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-6 max-w-sm">{item.description}</p>
                  <Link href={item.href} className="flex items-center gap-2 text-golf-gold font-medium group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section (Extra) */}
      <section className="py-24 bg-golf-green text-golf-cream">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-subtitle !text-golf-gold">Unrivaled Excellence</h2>
            <h3 className="section-title !text-golf-cream">Premier Facilities for the Modern Golfer</h3>
            <p className="text-golf-cream/80 mb-8 text-lg">
              From our state-of-the-art driving range to the luxury of our private locker rooms and fine dining at the clubhouse, every detail is designed to exceed your expectations.
            </p>
            <ul className="space-y-4 mb-10">
              {["18-Hole Championship Course", "Professional Golf Instruction", "Exquisite Dining & Social Lounge", "Exclusive Member Events"].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-golf-gold" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-gold inline-block">
              Explore Membership
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1594142465967-360ee07e2a9b?q=80&w=2070&auto=format&fit=crop"
              alt="Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
