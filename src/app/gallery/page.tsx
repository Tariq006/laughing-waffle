"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play, X, Trophy, Calendar, User } from "lucide-react";

const photos = [
  { id: 1, category: "Tournaments", src: "https://images.unsplash.com/photo-1594142465967-360ee07e2a9b?q=80&w=2070&auto=format&fit=crop", title: "Governor's Cup 2024" },
  { id: 2, category: "Social Events", src: "https://images.unsplash.com/photo-1565492290150-516d56d10c05?q=80&w=2070&auto=format&fit=crop", title: "New Year's Eve Gala" },
  { id: 3, category: "Junior Golf", src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2070&auto=format&fit=crop", title: "Junior Summer Camp" },
  { id: 4, category: "Dining", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", title: "Champagne Brunch" },
  { id: 5, category: "Tournaments", src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop", title: "Club Championship" },
  { id: 6, category: "Social Events", src: "https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?q=80&w=2070&auto=format&fit=crop", title: "Evening Social Mixer" },
  { id: 7, category: "Junior Golf", src: "https://images.unsplash.com/photo-1605051008035-7bb66f8e798e?q=80&w=2070&auto=format&fit=crop", title: "Junior Finals" },
  { id: 8, category: "Dining", src: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop", title: "Terrace Dining" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof photos[0]>(null);

  return (
    <div className="pt-20">
      {/* Video Montage Hero */}
      <section className="relative h-[60vh] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
          alt="Video Preview"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 bg-golf-gold rounded-full flex items-center justify-center text-golf-green mb-8 mx-auto shadow-2xl"
          >
            <Play size={40} fill="currentColor" />
          </motion.button>
          <h1 className="text-white font-serif text-4xl md:text-5xl mb-4">Capturing the Moment</h1>
          <p className="text-golf-gold uppercase tracking-[0.3em] text-sm">Watch Our Club Life</p>
        </div>
      </section>

      {/* February Tournament Winner Section */}
      <section className="py-24 bg-golf-green text-golf-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golf-gold/20 rounded-full mb-4">
                <Trophy className="text-golf-gold" size={32} />
              </div>
              <h2 className="section-subtitle !text-golf-gold">Latest Achievement</h2>
              <h3 className="section-title !text-golf-cream">February Golf Tournament Winner</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1592910129840-25a162395e02?q=80&w=2070&auto=format&fit=crop"
                  alt="February Tournament Winner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-golf-gold text-sm font-bold uppercase tracking-widest mb-1">Champion</p>
                    <p className="font-serif text-2xl">[Winner's Name Here]</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-golf-green-light p-8 rounded-xl border-l-4 border-golf-gold">
                  <h4 className="font-serif text-2xl text-golf-cream mb-6">Tournament Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-golf-gold/20 rounded-lg">
                        <Calendar className="text-golf-gold" size={20} />
                      </div>
                      <div>
                        <p className="text-golf-cream font-semibold">Event Date</p>
                        <p className="text-golf-cream/70">February 15-17, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-golf-gold/20 rounded-lg">
                        <Trophy className="text-golf-gold" size={20} />
                      </div>
                      <div>
                        <p className="text-golf-cream font-semibold">Final Score</p>
                        <p className="text-golf-cream/70">-8 under par</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-golf-gold/20 rounded-lg">
                        <User className="text-golf-gold" size={20} />
                      </div>
                      <div>
                        <p className="text-golf-cream font-semibold">Participants</p>
                        <p className="text-golf-cream/70">48 golfers competed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-golf-cream/80 text-lg leading-relaxed">
                  The February Golf Tournament showcased exceptional skill and sportsmanship. Our champion displayed remarkable consistency throughout the competition, with a stunning final round that secured the victory.
                </p>

                <p className="text-golf-cream/80 text-lg leading-relaxed">
                  Join us in congratulating our winner and all participants for making this tournament a memorable event in our club's history.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Visual Journey</h2>
            <h3 className="section-title">Events Gallery</h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our collection of memorable moments from tournaments, social gatherings, and special events at Abeokuta Golf Club.
            </p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(photo)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-golf-gold text-xs font-bold uppercase tracking-widest mb-1">{photo.category}</p>
                    <p className="text-white font-serif text-xl">{photo.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-golf-gold transition-colors">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-8 text-center">
                <p className="text-golf-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">{selectedImage.category}</p>
                <h4 className="text-white font-serif text-3xl">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram Feed Style Section */}
      <section className="py-24 bg-golf-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Follow Our Journey</h2>
            <h3 className="section-title">@AbeokutaGolfClub</h3>
          </div>
          <div className="flex gap-4 overflow-hidden -mx-6 px-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="min-w-[250px] aspect-square relative rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={`https://images.unsplash.com/photo-1592910129840-25a162395e02?q=80&w=2070&auto=format&fit=crop&sig=${i}`}
                  alt="Insta"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}