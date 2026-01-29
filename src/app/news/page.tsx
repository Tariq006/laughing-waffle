"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, ChevronRight, Mail } from "lucide-react";

const articles = [
  {
    title: "Annual Governor's Cup Results",
    category: "Tournament Results",
    date: "June 15, 2024",
    excerpt: "The 2024 Governor's Cup concluded with spectacular performances and a thrilling sudden-death playoff...",
    image: "https://images.unsplash.com/photo-1594142465967-360ee07e2a9b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "New Pro Shop Collection Arrives",
    category: "Club Announcements",
    date: "June 10, 2024",
    excerpt: "Discover the latest premium golf apparel and equipment from TaylorMade and Titleist, now available at the clubhouse...",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mastering the Short Game: Pro Tips",
    category: "Golf Tips",
    date: "June 05, 2024",
    excerpt: "Our head pro shares three essential drills to help you shave strokes off your scorecard by improving your putting...",
    image: "https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fairway Maintenance Schedule",
    category: "Maintenance Updates",
    date: "June 01, 2024",
    excerpt: "To maintain our championship standards, we will be performing scheduled aeration on the back nine next Tuesday...",
    image: "https://images.unsplash.com/photo-1565492290150-516d56d10c05?q=80&w=2070&auto=format&fit=crop",
  },
];

const categories = [
  "Tournament Results",
  "Club Announcements",
  "Golf Tips",
  "Maintenance Updates",
  "Social Events",
];

const upcomingEvents = [
  { date: "June 22", title: "Monthly Medal Tournament" },
  { date: "July 04", title: "Summer Social BBQ" },
  { date: "July 15", title: "Junior Golf Academy Starts" },
];

export default function News() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-golf-cream py-20 border-b border-golf-green/10">
        <div className="container mx-auto px-6">
          <h1 className="section-subtitle">Stay Updated</h1>
          <h2 className="section-title">Golf News & Updates</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Blog Feed */}
            <div className="lg:w-2/3 space-y-16">
              {articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-golf-gold text-golf-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {article.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-golf-earth mb-4">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-golf-green mb-4 group-hover:text-golf-gold transition-colors">
                    <Link href="#">{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {article.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 font-bold text-golf-green group-hover:gap-4 transition-all">
                    Read Full Story <ChevronRight size={20} className="text-golf-gold" />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="bg-golf-cream p-8 rounded-2xl">
                <h4 className="font-serif text-xl text-golf-green mb-6">Search News</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-white border border-golf-green/10 px-6 py-3 rounded-lg focus:outline-none focus:border-golf-gold text-sm"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-golf-cream p-8 rounded-2xl">
                <h4 className="font-serif text-xl text-golf-green mb-6">Categories</h4>
                <ul className="space-y-4">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-golf-gold transition-colors text-sm">
                        <Tag size={14} className="text-golf-gold" />
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upcoming Events */}
              <div className="bg-golf-green text-golf-cream p-8 rounded-2xl">
                <h4 className="font-serif text-xl text-golf-gold mb-8">Upcoming Events</h4>
                <div className="space-y-8">
                  {upcomingEvents.map((event) => (
                    <div key={event.title} className="flex items-start gap-4">
                      <div className="bg-golf-green-light px-3 py-1 rounded text-center min-w-[60px]">
                        <p className="text-xs font-bold text-golf-gold uppercase">{event.date.split(' ')[0]}</p>
                        <p className="text-lg font-serif">{event.date.split(' ')[1]}</p>
                      </div>
                      <p className="text-sm font-medium pt-1 leading-snug">{event.title}</p>
                    </div>
                  ))}
                </div>
                <Link href="/gallery" className="inline-block mt-8 text-sm text-golf-gold hover:underline">
                  View Full Calendar
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-golf-earth text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Mail size={120} />
                </div>
                <h4 className="font-serif text-xl mb-4">Newsletter</h4>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">
                  Join our exclusive list to receive club announcements and golf tips directly.
                </p>
                <form className="space-y-4 relative z-10">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/10 border border-white/20 px-6 py-3 rounded-lg focus:outline-none focus:border-white text-sm"
                  />
                  <button className="w-full btn-gold py-3">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
