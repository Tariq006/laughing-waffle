"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <section className="relative h-[40vh] bg-golf-green overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Us"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white font-serif text-5xl md:text-7xl mb-4">Contact Us</h1>
          <p className="text-golf-gold uppercase tracking-[0.3em] text-sm">We&apos;d Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Main */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <h2 className="section-subtitle">Get in Touch</h2>
              <h3 className="section-title">Send a Message</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether you have a question about membership, want to book a corporate event, or just want to say hello, our team is ready to assist you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-golf-green uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-golf-cream border border-golf-green/10 px-6 py-4 rounded-lg focus:outline-none focus:border-golf-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-golf-green uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="w-full bg-golf-cream border border-golf-green/10 px-6 py-4 rounded-lg focus:outline-none focus:border-golf-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-golf-green uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Topic of inquiry"
                    className="w-full bg-golf-cream border border-golf-green/10 px-6 py-4 rounded-lg focus:outline-none focus:border-golf-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-golf-green uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full bg-golf-cream border border-golf-green/10 px-6 py-4 rounded-lg focus:outline-none focus:border-golf-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="btn-gold w-full md:w-auto flex items-center justify-center gap-3 py-4 px-12 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:w-2/5 space-y-8">
              <div className="bg-golf-green text-golf-cream p-10 rounded-2xl shadow-xl">
                <h4 className="font-serif text-3xl text-golf-gold mb-8">Contact Details</h4>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-golf-gold/20 p-3 rounded-lg h-fit">
                      <MapPin className="text-golf-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-golf-gold mb-2">Location</p>
                      <p className="font-medium text-lg leading-snug">Kobape road, Behind Governor’s Office, Oke Mosan, Abeokuta, Ogun State, Nigeria.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-golf-gold/20 p-3 rounded-lg h-fit">
                      <Phone className="text-golf-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-golf-gold mb-2">Phone</p>
                      <p className="font-medium text-lg">+234 814 814 4554</p>
                      <p className="font-medium text-lg"> +234 803 404 6873</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-golf-gold/20 p-3 rounded-lg h-fit">
                      <Mail className="text-golf-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-golf-gold mb-2">Email</p>
                      <p className="font-medium text-lg">support@abeokutagolfclub.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-golf-cream p-10 rounded-2xl border border-golf-green/5">
                <h4 className="font-serif text-2xl text-golf-green mb-6 flex items-center gap-3">
                  <Clock size={24} className="text-golf-gold" /> Opening Hours
                </h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between border-b border-golf-green/5 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-golf-green">6:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-golf-green/5 pb-2">
                    <span>Saturday - Sunday</span>
                    <span className="font-bold text-golf-green">5:30 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span className="font-bold text-golf-green">6:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-1000">
        {/* Placeholder for real map */}
        <div className="w-full h-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.988085750371!2d3.35!3d7.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c4a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2sAbeokuta%20Golf%20Club!5e0!3m2!1sen!2sng!4v1622525252525!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
