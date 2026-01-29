"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

const holes = [
  {
    number: 1,
    par: 4,
    distance: "385m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Keep your tee shot to the left of the fairway to avoid the hidden bunker on the right. A soft landing on the green is essential.",
  },
  {
    number: 2,
    par: 3,
    distance: "165m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1519281683627-2a17ae19f71d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "The wind often catches balls here. Club up and aim for the center of the green, ignoring the flag if it's tucked behind the bunker.",
  },
  {
    number: 3,
    par: 5,
    distance: "510m",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A wide fairway makes for a great eagle opportunity. Be brave with your second shot to clear the water hazard.",
  },
  {
    number: 4,
    par: 4,
    distance: "410m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1586694739875-16d8460d3c87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Beware of the trees lining the right side. A controlled fade is the best approach to this narrow green.",
  },
  {
    number: 5,
    par: 4,
    distance: "390m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1501006264697-9c00d2ac22c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A dogleg right that requires a precise tee shot. Aim for the marker post to have a clear view of the green.",
  },
  {
    number: 6,
    par: 3,
    distance: "145m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Don't be fooled by the distance. The undulating green makes two-putting a challenge if you miss the tier.",
  },
  {
    number: 7,
    par: 5,
    distance: "495m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1551334784-45a9d14d4b67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Bunkers guard the landing zone for both your first and second shots. Play conservatively to secure a par.",
  },
  {
    number: 8,
    par: 4,
    distance: "360m",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1593693399741-6c4363b9fd03?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A short par 4 that rewards a straight drive. Use a long iron off the tee for better control.",
  },
  {
    number: 9,
    par: 4,
    distance: "425m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1501006264697-9c00d2ac22c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "The longest par 4 on the front nine. Aim for the right side of the fairway to counteract the slope.",
  },
  {
    number: 10,
    par: 4,
    distance: "375m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519281683627-2a17ae19f71d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "The back nine starts with a scenic downhill drive. Be careful with your approach as the green is well-guarded.",
  },
  {
    number: 11,
    par: 4,
    distance: "405m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A tough uphill hole. Take one extra club for your approach shot to ensure you reach the putting surface.",
  },
  {
    number: 12,
    par: 3,
    distance: "180m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Our signature par 3. Water on the right and deep bunkers on the left leave no room for error.",
  },
  {
    number: 13,
    par: 5,
    distance: "530m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "The longest hole on the course. A true three-shotter for most. Keep your third shot below the hole.",
  },
  {
    number: 14,
    par: 4,
    distance: "350m",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1501006264697-9c00d2ac22c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Risk and reward. Longer hitters can go for the green, but the smart play is a mid-iron to the wide part of the fairway.",
  },
  {
    number: 15,
    par: 4,
    distance: "395m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1551334784-45a9d14d4b67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "Aim for the left side of the fairway. The ball will naturally kick right towards the center.",
  },
  {
    number: 16,
    par: 3,
    distance: "155m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "The green is wider than it is deep. Precision with your distance control is more important than line.",
  },
  {
    number: 17,
    par: 4,
    distance: "420m",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1586694739875-16d8460d3c87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A demanding par 4 late in the round. Avoid the large oak tree on the left at all costs.",
  },
  {
    number: 18,
    par: 5,
    distance: "485m",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    proTip: "A spectacular finishing hole. Aim for the clubhouse chimney. Two good shots could see you putting for eagle.",
  },
];

const facilities = [
  {
    name: "Driving Range",
    description: "Perfect your swing at our state-of-the-art driving range with 20 covered bays and premium Srixon balls.",
    image: "https://images.unsplash.com/photo-1624298357594-36a5d3f6b1c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Putting Greens",
    description: "Two meticulously maintained practice greens that perfectly mirror the speed and conditions of the course.",
    image: "https://images.unsplash.com/photo-1535918101897-6b6c85b8f0a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Equipment Rental",
    description: "High-quality clubs from TaylorMade and Titleist available for rent, along with electric buggies and push trolleys.",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export default function Course() {
  const [activeHole, setActiveHole] = useState(0);

  const nextHole = () => setActiveHole((prev) => (prev + 1) % holes.length);
  const prevHole = () => setActiveHole((prev) => (prev - 1 + holes.length) % holes.length);

  return (
    <div className="pt-20">
      {/* Aerial Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586694739875-16d8460d3c87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Aerial View of Abeokuta Golf Course"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white font-serif text-5xl md:text-7xl mb-4"
          >
            The Course
          </motion.h1>
          <p className="text-white/90 font-sans tracking-[0.2em] uppercase text-sm md:text-base">
            An 18-Hole Masterpiece by Nature
          </p>
        </div>
      </section>

      {/* Interactive Hole Guide */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Tactical Guide</h2>
            <h3 className="section-title">Hole by Hole</h3>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative bg-golf-cream rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/3 relative h-[400px] lg:h-[600px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHole}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={holes[activeHole].image}
                      alt={`Hole ${holes[activeHole].number} - Abeokuta Golf Club`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute top-8 left-8 bg-golf-green text-white w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl border-4 border-golf-gold">
                  {holes[activeHole].number}
                </div>

                <div className="absolute bottom-8 right-8 flex gap-2">
                  <button 
                    onClick={prevHole} 
                    className="p-3 bg-white/90 rounded-full hover:bg-golf-gold transition-colors text-golf-green hover:text-white"
                    aria-label="Previous hole"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextHole} 
                    className="p-3 bg-white/90 rounded-full hover:bg-golf-gold transition-colors text-golf-green hover:text-white"
                    aria-label="Next hole"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Info Section */}
              <div className="lg:w-1/3 p-12 flex flex-col justify-center bg-golf-green text-golf-cream">
                <h4 className="font-serif text-4xl mb-8">Hole {holes[activeHole].number}</h4>
                
                <div className="grid grid-cols-3 gap-4 mb-10 text-center">
                  <div className="border-r border-golf-cream/20">
                    <p className="text-xs uppercase tracking-widest text-golf-gold mb-1">Par</p>
                    <p className="text-2xl font-bold">{holes[activeHole].par}</p>
                  </div>
                  <div className="border-r border-golf-cream/20">
                    <p className="text-xs uppercase tracking-widest text-golf-gold mb-1">Dist.</p>
                    <p className="text-2xl font-bold">{holes[activeHole].distance}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-golf-gold mb-1">Diff.</p>
                    <p className="text-sm font-bold uppercase">{holes[activeHole].difficulty}</p>
                  </div>
                </div>

                <div className="bg-golf-green-light p-6 rounded-lg border-l-4 border-golf-gold">
                  <div className="flex items-center gap-2 mb-3 text-golf-gold">
                    <Info size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Pro Tip</span>
                  </div>
                  <p className="text-sm italic leading-relaxed text-golf-cream/80">
                    &quot;{holes[activeHole].proTip}&quot;
                  </p>
                </div>

                <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {holes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveHole(i)}
                      className={`h-1 min-w-[12px] flex-1 rounded-full transition-all ${i === activeHole ? 'bg-golf-gold' : 'bg-golf-cream/20'}`}
                      aria-label={`Go to hole ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-golf-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Excellence Beyond the Green</h2>
            <h3 className="section-title">Course Facilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <h4 className="font-serif text-2xl text-golf-green mb-4 group-hover:text-golf-green-light transition-colors duration-300">
                    {facility.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
