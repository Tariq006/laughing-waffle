"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    year: "1987",
    title: "The Foundation",
    description: "A group of passionate golf enthusiasts gathered to establish the first premier golf club in Abeokuta, driven by a vision of creating a sanctuary for the sport.",
    image: "https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "1992",
    title: "Championship Expansion",
    description: "The course was expanded to a full 18-hole championship layout, designed by world-renowned architects to challenge and inspire.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2005",
    title: "Modern Clubhouse Unveiled",
    description: "Our state-of-the-art clubhouse was opened, offering luxury amenities and becoming the social heart of the community.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "Today",
    title: "Continuing the Legacy",
    description: "Abeokuta Golf Club remains the pinnacle of excellence, hosting international tournaments and fostering a vibrant community of golfers.",
    image: "https://images.unsplash.com/photo-1592910129840-25a162395e02?q=80&w=2070&auto=format&fit=crop",
  },
];

const executives = [
  { name: "The Captain", position: "Engr Umar Olaseni Bakare" },
  { name: "Vice Captain", position: "Pastor Adediran Oladele" },
  { name: "General Secretary", position: "Dr Quudus Yusuff" },
  { name: "Asst. Gen. Secretary", position: "Dr Olatunji Apeleyin" },
  { name: "Treasurer", position: "Mr Emmanuel Egbetade" },
  { name: "Public Relation Officer", position: "Mr Eniola Egbekunle" },
  { name: "Competition Secretary", position: "Mr Tolulope Olugbemi" },
  { name: "House Officer", position: "Pro Mubasiru Sanusi" },
  { name: "Course Officer", position: "Pro Nojeem Sofela" },
];

const boardOfTrustees = [
  { name: "Osi Egba Chief (Hon) Olabode Mustapha" },
  { name: "Chief (Mrs) Ruth Luwoye" },
  { name: "Alhaji Luqmon Buhari" },
  { name: "Dr Ayodele Aderinwale" },
  { name: "Engr Ola Sobande" },
  { name: "Hon. Justice Mobolaji Ojo" },
  { name: "Engr Oladimeji Isiaka" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-serif text-5xl md:text-6xl mb-4"
          >
            Our Legacy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-golf-gold mx-auto"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-golf-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-lg shadow-xl border-t-4 border-golf-gold"
            >
              <h2 className="section-subtitle">Our Vision</h2>
              <p className="font-serif text-2xl text-golf-green italic leading-relaxed">
                &quot;To be the premier golfing destination in Africa, where tradition, nature, and excellence converge to create an unparalleled lifestyle experience.&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-lg shadow-xl border-t-4 border-golf-green"
            >
              <h2 className="section-subtitle">Our Mission</h2>
              <p className="font-serif text-2xl text-golf-green italic leading-relaxed">
                &quot;To provide our members and guests with a world-class golfing environment, exceptional facilities, and a warm community that honors the traditions of the game.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Leadership</h2>
            <h3 className="section-title">Executive Committee</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-golf-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-golf-green/20 to-golf-gold/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-golf-green/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-golf-gold/20 flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-golf-green">
                          {executive.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-serif text-xl font-bold text-golf-green mb-2">{executive.name}</h4>
                <p className="text-gray-600 font-medium">{executive.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-24 bg-golf-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Governance</h2>
            <h3 className="section-title">Board of Trustees</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boardOfTrustees.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-golf-green/20 to-golf-gold/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-golf-green/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-golf-gold/20 flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-golf-green">
                          {member.name.split(' ').filter(word => word.length > 2).map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-serif text-lg font-bold text-golf-green text-center">{member.name}</h4>
                <p className="text-gray-500 text-sm text-center mt-2">Board Member</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="section-subtitle">The Journey</h2>
            <h3 className="section-title">Our Story</h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-golf-green/20 hidden md:block" />

            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 bg-golf-gold rounded-full border-4 border-white shadow-lg font-bold text-golf-green">
                    {index + 1}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-4"
                  >
                    <span className="text-golf-gold font-bold text-xl">{event.year}</span>
                    <h4 className="font-serif text-3xl text-golf-green">{event.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-golf-green text-golf-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-subtitle !text-golf-gold">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { title: "Tradition", desc: "Respecting the heritage of golf." },
              { title: "Excellence", desc: "Upholding the highest standards." },
              { title: "Community", desc: "Fostering meaningful connections." },
              { title: "Sustainability", desc: "Caring for our green sanctuary." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <h4 className="font-serif text-2xl text-golf-gold">{value.title}</h4>
                <p className="text-golf-cream/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}