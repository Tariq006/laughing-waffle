"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Shirt, Utensils, Award, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const dressCodeItems = [
  { icon: Shirt, label: "Collared Shirts", detail: "Tucked in at all times" },
  { icon: Award, label: "Tailored Trousers", detail: "No denim or cargo pants" },
  { icon: Award, label: "Golf Shoes", detail: "Soft spikes only" },
];

const amenities = [
  {
    title: "Pro Shop",
    desc: "Stocked with the latest equipment and apparel from top brands.",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Locker Rooms",
    desc: "Luxury changing facilities with saunas and private showers.",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Dining & Bar",
    desc: "Exquisite local and international cuisine with a panoramic view.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote: "A truly magnificent course. The fairways are pristine and the hospitality is second to none.",
    author: "Robert Smith",
    role: "International Guest",
  },
  {
    quote: "The best golf experience in Nigeria. Every hole tells a story and the views are breathtaking.",
    author: "Komolafe Ifeoluwa",
    role: "Regular Visitor",
  },
];

export default function Visitors() {
  return (
    <div className="pt-20">
      {/* Welcome Hero */}
      <section className="py-24 bg-golf-green text-golf-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?q=80&w=2070&auto=format&fit=crop"
            alt="Decoration"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-5xl md:text-7xl mb-8"
            >
              Guest <span className="text-golf-gold">Experience</span>
            </motion.h1>
            <p className="text-xl text-golf-cream/80 leading-relaxed mb-10">
              We welcome visitors from around the world to experience our championship course and legendary hospitality. Whether you&apos;re here for a single round or exploring membership, we&apos;re dedicated to making your visit unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold flex items-center gap-2">
                Book a Tee Time <Calendar size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-subtitle">Information</h2>
              <h3 className="section-title">Visitor Details</h3>
              <p className="text-gray-600 mb-12">
                Available to guests from Monday to Sunday. We recommend booking at least 48 hours in advance to secure your preferred tee time.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-golf-cream rounded-xl">
                  <div className="p-3 bg-golf-green text-white rounded-lg">
                    <Shirt size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-golf-green mb-4">Dress Code</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {dressCodeItems.map((item) => (
                        <div key={item.label} className="text-center sm:text-left">
                          <p className="text-sm font-bold text-golf-green">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-golf-cream rounded-xl">
                  <div className="p-3 bg-golf-green text-white rounded-lg">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-golf-green mb-2">Dining & Etiquette</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-golf-gold">•</span>
                        <span>Cell phones should be on silent in all club areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-golf-gold">•</span>
                        <span>Respect the pace of play and allow faster groups to pass</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-golf-gold">•</span>
                        <span>Proper golf attire is required in all clubhouse areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-golf-gold">•</span>
                        <span>Replace divots, repair ball marks, and rake bunkers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2070&auto=format&fit=crop"
                alt="Visitor Info"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <blockquote className="text-white border-l-4 border-golf-gold pl-6">
                  <p className="text-2xl font-serif italic mb-4">
                    &quot;The hospitality here is as impressive as the course itself.&quot;
                  </p>
                  <footer className="text-golf-gold font-bold">The Daily Golfer</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className="py-24 bg-golf-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">World-Class</h2>
            <h3 className="section-title">Club Amenities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {amenities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <h4 className="font-serif text-2xl text-golf-green mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Star className="text-golf-gold inline-block mb-4" size={32} />
              <h2 className="section-title">What Our Guests Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-golf-cream p-10 rounded-2xl relative"
                >
                  <p className="font-serif text-xl text-golf-green leading-relaxed mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-golf-green">{t.author}</p>
                    <p className="text-sm text-golf-earth uppercase tracking-widest">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-golf-earth text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to Tee Off?</h2>
            <p className="text-lg opacity-80 mb-10">
              Join us for an exceptional day of golf. Book your tee time online or contact our reception for group bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-gold flex items-center justify-center gap-2">
                Book Online Now <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-primary border-white bg-transparent hover:bg-white hover:text-golf-green">
                Inquire about Group Rates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}