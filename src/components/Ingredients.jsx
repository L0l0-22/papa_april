"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ingredients() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      
      {/* Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-4xl mb-9 font-potta">
          BETTER INGREDIENTS. <br /> BETTER PIZZA.
        </h2>

        <p className="text-gray-700 leading-7 max-w-2xl mb-9">
          We know the more you put onto something, the more you get out. So,
          from the first Papa John's pizza, made in a broom closet in Indiana
          USA – to now more than 5,000 locations in 45 countries and territories
          around the world – we've always used better ingredients to make better
          pizza.
        </p>

        <p className="text-gray-700 leading-7 max-w-2xl mb-12">
          Find out all about our signature, vine-ripened tomato sauce, our fresh,
          never frozen, dough, our Italian-style cheese, fresh vegetables and
          high quality meat.
        </p>

        <button
          onClick={() => router.push("/about/ingredients")}
          className="bg-lightYellow px-12 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase"
        >
          EXPLORE OUR INGREDIENTS
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
          <Image
            src="/circle.png"
            alt="Pizza Ingredients"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}