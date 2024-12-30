'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Star, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/UseCart/useCart'
import { CartItem } from '@/components/UseCart/useCart'
import { toast } from 'react-toastify'

async function getItem(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch item')
    }

    const items = await res.json()
    return items.find((item: any) => item.id === parseInt(id))
  } catch (error) {
    console.error('Error fetching item:', error)
    return null
  }
}

export default function ItemPage({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<CartItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true)
      setError(null)
      const fetchedItem = await getItem(params.id)

      if (fetchedItem) {
        setItem({
          id: fetchedItem.id,
          Image: fetchedItem.Image,
          title: fetchedItem.title,
          price: fetchedItem.price,
          quantity: 1,
          rating: fetchedItem.rating,
          discription: fetchedItem.discription,
        })
      } else {
        setError('Item not found')
      }

      setIsLoading(false)
    }

    fetchItem()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#2B1810]">
        <Loader2 className="h-16 w-16 animate-spin text-[#FFA500]" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#2B1810]">
        <p className="text-[#FF0000] text-xl font-semibold">{error}</p>
      </div>
    )
  }

  if (!item) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(item)
    toast.success(`${item.title} has been added to your cart!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
      theme: "dark",
    })
  }

  return (
    <div className="bg-[#2B1810] min-h-screen">
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="bg-[#3C2A1E] rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden bg-[#2B1810]">
              <div className="relative aspect-square">
                <Image
                  src={item.Image}
                  alt={item.title}
                  width={900}
                  height={800}
                  objectFit="cover"
                  className="rounded-lg w-full h-full"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFA500]">
                {item.title}
              </h1>
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-[#2B1810] px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-[#FFA500] fill-current" />
                  <span className="ml-1 text-[#FFA500] font-medium">
                    {item.rating}
                  </span>
                </div>
                <span className="text-2xl font-bold ml-4 text-[#FF0000]">
                  ${item.price}
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 text-[#FFA500]">
                  Description
                </h2>
                <p className="text-[#FFA500]/80">
                  {item.discription}
                </p>
              </div>

              <div className="mt-auto">
                <Button
                  className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-[#FF0000] hover:bg-[#FF0000]/80 text-white transition-colors duration-300"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

