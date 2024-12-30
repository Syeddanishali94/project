import MenuCards from "@/components/menucards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src={"/images/banner.jpg"}
        alt="banner image"
        width={800}
        height={800}
        className="w-full h-auto"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#FFA500]">
          Our Menu
        </h1>
        <MenuCards />
      </div>
    </div>
  );
}
