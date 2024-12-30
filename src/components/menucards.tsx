"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  id: number;
  title: string;
  Image: string;
  discription: string;
  price: number;
  rating: number;
}

export default function MenuCards() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`);
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching menu items. Please try again later.");
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div className="text-center text-[#FFA500]">Loading menu...</div>;
  }

  if (error) {
    return <div className="text-center text-[#FF0000]">{error}</div>;
  }

  return (
    <div id="menu" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="bg-[#2B1810] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href={`/itemsdetails/${item.id.toString()}`}>
            <div className="relative h-[220px] w-full">
              <Image
                src={item.Image}
                alt={item.title}
                width={500}
                height={500}
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[#FFA500] font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-white text-sm mb-4">{item.discription}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#FF0000] font-bold">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#FFA500] fill-current" />
                  <span className="text-[#FFA500] ml-1">{item.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
