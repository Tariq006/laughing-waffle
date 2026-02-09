"use client";

import { motion } from "framer-motion";

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
      {/* Hero Header - Simplified */}
      <section className="py-24 bg-golf-green text-golf-cream">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Our Legacy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-golf-gold mx-auto mb-8"
          />
          <p className="text-xl text-golf-cream/80 max-w-3xl mx-auto leading-relaxed">
            Established in 1987, Abeokuta Golf Club stands as one of the most prestigious sporting and social institutions in Ogun State, offering an exclusive environment where sport, relaxation, and social interaction blend seamlessly.
          </p>
        </div>
      </section>

      {/* Our Story - Clean Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Our Story</h2>
            <h3 className="section-title">Established 1987</h3>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="font-serif text-3xl text-golf-green">A Sanctuary of Sport & Spirit</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Abeokuta Golf Club was established in the year 1987 and has since grown into one of the most notable sporting and social institutions in Ogun State. The club is strategically located on an expansive land area of approximately 49 hectares, nestled in a serene and naturally appealing environment behind the Ogun State Government Secretariat, Abeokuta.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Its location offers members and visitors a peaceful escape from the bustle of city life, making it an ideal setting for leisure, recreation, and professional networking.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-golf-cream p-8 rounded-xl border-l-4 border-golf-gold"
              >
                <h4 className="font-serif text-2xl text-golf-green mb-4">Our Membership Community</h4>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The membership of Abeokuta Golf Club, which currently stands at about 180 members, cuts across diverse socio-economic strata of society. It comprises men and women, as well as individuals from different age groups, professional backgrounds, and walks of life. This diversity fosters a strong sense of community, mutual respect, and social interaction among members.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Membership is by strict selection, as prospective members are carefully screened to ensure they possess impeccable character, discipline, and high moral integrity. This deliberate process helps to preserve the long-standing ideals, values, etiquette, and global traditions associated with the game of golf.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="font-serif text-3xl text-golf-green">The Championship Course</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  The golf course itself is a standard 72-par course, thoughtfully designed to meet international golfing expectations. It boasts a beautiful and refreshing ambience, characterized by lush green vegetation, natural rivers, and serene lakes that enhance both the aesthetics and the playing experience.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  The mildly challenging topography of the course provides an engaging test of skill for both amateur and professional golfers, making every round of play both enjoyable and rewarding. The layout of the course blends seamlessly with the natural landscape, offering breathtaking views and a calming atmosphere that promotes relaxation and focus.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h4 className="font-serif text-3xl text-golf-green">Safety & Security</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Beyond the sport, Abeokuta Golf Club places a strong emphasis on the safety and security of its members, guests, and property. Robust security measures are consistently maintained to ensure a safe and secure environment at all times. This commitment to safety further reinforces the club&apos;s reputation as a well-managed and member-focused institution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h4 className="font-serif text-3xl text-golf-green">Club House Excellence</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  The Club House is another major highlight of Abeokuta Golf Club. It is well equipped to provide adequate bar and kitchen services, offering a variety of refreshments and meals in a comfortable and welcoming setting. In addition, the clubhouse features ultramodern changing rooms and bathrooms designed to meet the needs and comfort of members and visitors alike.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-golf-green/5 p-8 rounded-xl border border-golf-green/10"
              >
                <h4 className="font-serif text-2xl text-golf-green mb-4">Our Legacy</h4>
                <p className="text-lg leading-relaxed text-gray-700">
                  Overall, Abeokuta Golf Club stands as a symbol of sporting excellence, tradition, and refined leisure, making it a pride of Abeokuta and Ogun State at large.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-24 bg-golf-cream">
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
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golf-green/10"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-golf-green/10 rounded-full mb-4">
                    <span className="text-3xl font-serif font-bold text-golf-green">
                      {executive.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-golf-green mb-2">{executive.name}</h4>
                  <p className="text-gray-600 font-medium">{executive.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-24 bg-white">
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
                className="bg-golf-cream rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-golf-gold/20"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-golf-gold/10 rounded-full mb-4">
                    <span className="text-2xl font-serif font-bold text-golf-green">
                      {member.name.split(' ').filter(word => word.length > 2).map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-golf-green mb-2">{member.name}</h4>
                  <p className="text-gray-500 text-sm">Board Member</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-golf-green text-golf-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle !text-golf-gold">Our Vision & Mission</h2>
            <h3 className="section-title !text-golf-cream">Guiding Principles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-golf-cream/10 backdrop-blur-sm p-10 rounded-xl"
            >
              <h4 className="font-serif text-2xl text-golf-gold mb-6">Our Vision</h4>
              <p className="font-serif text-xl text-golf-cream italic leading-relaxed">
                &quot;To be the premier golfing destination in Africa, where tradition, nature, and excellence converge to create an unparalleled lifestyle experience.&quot;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-golf-cream/10 backdrop-blur-sm p-10 rounded-xl"
            >
              <h4 className="font-serif text-2xl text-golf-gold mb-6">Our Mission</h4>
              <p className="font-serif text-xl text-golf-cream italic leading-relaxed">
                &quot;To provide our members and guests with a world-class golfing environment, exceptional facilities, and a warm community that honors the traditions of the game.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-golf-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-subtitle">Core Values</h2>
          <h3 className="section-title mb-16">What We Stand For</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                className="bg-white p-8 rounded-xl shadow-lg border border-golf-green/10"
              >
                <div className="w-16 h-16 bg-golf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-golf-green">
                    {value.title[0]}
                  </span>
                </div>
                <h4 className="font-serif text-xl text-golf-green mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}