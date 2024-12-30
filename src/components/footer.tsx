import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2B1810] text-[#FFA500] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="Lasmania Logo"
                width={180}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-[#FFA500]/80 max-w-xs">
              Satisfy your craving with our delicious selection of dishes made with the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="text-sm hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/#deals" className="text-sm hover:text-white transition-colors">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF0000]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF0000]" />
                <a href="mailto:info@lasmania.com" className="text-sm hover:text-white transition-colors">
                  info@lasmania.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF0000] flex-shrink-0" />
                <span className="text-sm">123 Food Street, Cuisine City, FC 12345</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="block">Monday - Friday</span>
                <span className="text-[#FFA500]/80">11:00 AM - 10:00 PM</span>
              </li>
              <li className="text-sm">
                <span className="block">Saturday - Sunday</span>
                <span className="text-[#FFA500]/80">12:00 PM - 11:00 PM</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA500] hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA500] hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA500] hover:text-white transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#FFA500]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#FFA500]/60">
              © {new Date().getFullYear()} Lasmania. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-[#FFA500]/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-[#FFA500]/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

