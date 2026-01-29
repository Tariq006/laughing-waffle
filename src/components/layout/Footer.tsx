import Link from "next/link";
import { FlagTriangleRight, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-golf-green-dark text-golf-cream pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-golf-gold rounded-full flex items-center justify-center">
              <FlagTriangleRight className="text-golf-green" size={20} />
            </div>
            <span className="font-serif text-lg font-bold">ABEOKUTA GOLF CLUB</span>
          </div>
          <p className="text-sm text-golf-cream/70 leading-relaxed">
            Where tradition meets excellence. Join us for a premium golfing experience in the heart of nature.
          </p>
          <div className="flex space-x-4">
            <Facebook className="text-golf-gold cursor-pointer hover:text-white transition-colors" size={20} />
            <Instagram className="text-golf-gold cursor-pointer hover:text-white transition-colors" size={20} />
            <Twitter className="text-golf-gold cursor-pointer hover:text-white transition-colors" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-golf-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-golf-gold transition-colors">Our Story</Link></li>
            <li><Link href="/course" className="hover:text-golf-gold transition-colors">The Course</Link></li>
            <li><Link href="/visitors" className="hover:text-golf-gold transition-colors">Visitor Info</Link></li>
            <li><Link href="/news" className="hover:text-golf-gold transition-colors">Golf News</Link></li>
            <li><Link href="/gallery" className="hover:text-golf-gold transition-colors">Events Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-golf-gold">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="text-golf-gold shrink-0" size={18} />
              <span> Kobape road, Behind Governor’s Office, Oke Mosan, Abeokuta, Ogun State, Nigeria.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-golf-gold shrink-0" size={18} />
              <span>+234 814 814 4554</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-golf-gold shrink-0" size={18} />
              <span>support@abeokutagolfclub.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-golf-gold">Newsletter</h4>
          <p className="text-sm text-golf-cream/70 mb-4">Subscribe for latest news and tournament updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-golf-green border border-golf-green-light px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-golf-gold text-sm"
            />
            <button className="bg-golf-gold text-golf-green px-4 py-2 rounded-r-md hover:bg-golf-gold-light transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-golf-green-light text-center text-xs text-golf-cream/50">
        <p>&copy; {new Date().getFullYear()} Abeokuta Golf Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
