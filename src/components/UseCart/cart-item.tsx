'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartItem as CartItemType } from '@/components/UseCart/useCart'

interface CartItemProps {
  item: CartItemType
  onRemove: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      {/* Product Image */}
      <div className="relative h-24 w-24 bg-[#F6EBDA] rounded-lg overflow-hidden">
        <Image
          src={item.Image} // Image URL
          alt={item.title}  // Alt text for accessibility
          fill
          className="object-contain p-2"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-[#2F2105]">{item.title}</h3>
        <p className="text-[#FF902B] font-medium">{item.price} $</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} // Decrease quantity
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} // Increase quantity
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Remove Item Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-500 hover:text-red-500"
        onClick={() => onRemove(item.id)} // Remove the item from cart
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  )
}