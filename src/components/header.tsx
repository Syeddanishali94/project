'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, ShoppingCart, Search, X } from 'lucide-react'
import SearchBar from "@/components/searchbar"
import { useCart } from '@/components/UseCart/useCart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItems } = useCart()

  return (
    <header className="w-full bg-[#2B1810] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lasmania Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#FFA500] hover:text-white transition-colors font-medium"
            >
              HOME
            </Link>
            <Link 
              href="/#menu" 
              className="text-[#FFA500] hover:text-white transition-colors font-medium"
            >
              MENU
            </Link>
            <Link 
              href="/about" 
              className="text-[#FFA500] hover:text-white transition-colors font-medium"
            >
              ABOUT
            </Link>
          </nav>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#FFA500] hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>
            <Link 
              href="/cart"
              className="text-[#FFA500] hover:text-white transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#FF0000] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#FFA500] hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>
            <Link 
              href="/cart"
              className="text-[#FFA500] hover:text-white transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#FF0000] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FFA500] hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#2B1810] p-4 shadow-lg">
            <SearchBar />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 px-4 py-6 bg-[#2B1810] border-t border-[#FFA500]/20">
              <Link 
                href="/" 
                className="text-[#FFA500] hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/#menu" 
                className="text-[#FFA500] hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                MENU
              </Link>
              <Link 
                href="/#deals" 
                className="text-[#FFA500] hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                DEALS
              </Link>
              <Link 
                href="/#about" 
                className="text-[#FFA500] hover:text-white transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

