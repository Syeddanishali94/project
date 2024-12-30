'use client'

import { useCart } from '@/components/UseCart/useCart'
import { CartItem } from '@/components/UseCart/cart-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { toast } from 'react-toastify'

export default function CartPage() {
  const { cartItems, isLoading, removeFromCart, updateQuantity, getTotal, clearCart } = useCart()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#2B1810] pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-[#3C2A1E] rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="h-24 bg-[#3C2A1E] rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#2B1810] pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="mx-auto h-24 w-24 text-[#FFA500] mb-6" />
            <h1 className="text-2xl font-bold text-[#FFA500] mb-4">Your Cart is Empty</h1>
            <p className="text-[#FFA500]/80 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild className="bg-[#FF0000] hover:bg-[#FF0000]/80 text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const handleCheckout = () => {
    toast.success("Proceeding to checkout!", { 
      position: "bottom-right",
      theme: "dark"
    })
    clearCart()
  }

  return (
    <div className="min-h-screen bg-[#2B1810] pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#FFA500]">Your Cart</h1>
            <Button
              variant="outline"
              asChild
              className="text-[#FFA500] hover:text-[#FF0000] border-[#FFA500] hover:border-[#FF0000]"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>

          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="bg-[#3C2A1E] rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-[#FFA500]">Subtotal</span>
              <span className="text-2xl font-bold text-[#FFA500]">${getTotal().toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-[#FF0000] hover:bg-[#FF0000]/80 text-white text-lg py-6"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

