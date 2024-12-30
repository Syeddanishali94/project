import Image from 'next/image'
import { ChefHat, Utensils, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#2B1810] text-[#FFA500] pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">About LASMANIA</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-[#FFA500]/90 mb-4">
              Founded in 2010, LASMANIA began as a small family-owned burger joint with a passion for creating the perfect patty. Our commitment to quality ingredients and innovative flavors quickly earned us a loyal following in the local community.
            </p>
            <p className="text-[#FFA500]/90">
              As word spread about our mouthwatering burgers, we expanded our menu and opened new locations. Today, LASMANIA is proud to be a beloved burger destination, serving up delicious meals to burger enthusiasts across the country.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="LASMANIA restaurant interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#3C2A1E] p-6 rounded-lg text-center">
              <ChefHat className="w-12 h-12 mx-auto mb-4 text-[#FF0000]" />
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-[#FFA500]/90">We source only the finest, freshest ingredients to ensure every bite is bursting with flavor.</p>
            </div>
            <div className="bg-[#3C2A1E] p-6 rounded-lg text-center">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-[#FF0000]" />
              <h3 className="text-xl font-semibold mb-2">Culinary Innovation</h3>
              <p className="text-[#FFA500]/90">Our chefs are constantly experimenting with new flavors and techniques to bring you exciting burger creations.</p>
            </div>
            <div className="bg-[#3C2A1E] p-6 rounded-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#FF0000]" />
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-[#FFA500]/90">Your enjoyment is our top priority. We strive to provide an exceptional dining experience with every visit.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Visit Us Today</h2>
          <p className="text-[#FFA500]/90 mb-4">
            Experience the LASMANIA difference for yourself. Visit one of our locations and discover why we're the go-to destination for burger lovers everywhere.
          </p>
          <p className="text-[#FFA500]/90">
            We can't wait to serve you and share our passion for great food!
          </p>
        </div>

        <div className="bg-[#3C2A1E] p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-[#FFA500]/90">123 Burger Street</p>
              <p className="text-[#FFA500]/90">Foodville, FL 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-[#FFA500]/90">Monday - Thursday: 11am - 10pm</p>
              <p className="text-[#FFA500]/90">Friday - Saturday: 11am - 11pm</p>
              <p className="text-[#FFA500]/90">Sunday: 12pm - 9pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

