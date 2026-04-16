"use client";

import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";

export default function NutritionInfoSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-potta mb-8 md:ml-12 text-black">
        Love Details As Much As Our Pizza?
      </h2>

      <div className="bg-biege rounded-3xl shadow-xl p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Text */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-lg md:text-xl font-potta text-green-900 mb-12 uppercase">
            Papa Johns Nutrition and Allergens Menu
          </h3>

          <p className="text-[#515151] text-lg font-normal leading-relaxed mb-6 max-w-3xl">
            We know you love our pizzas. But we also know that you care about the food you eat.
            Nutritional content and product allergy information is as important as fresh ingredients
            and great taste. We're committed to giving you as much information as we can on the calorie count,
            allergens and other nutritional information of our menu, to help you make smart choices
            based on your dietary needs. <br /><br />
            Click on the links below to find the calorie count and allergy information for each product
            in our menu.
          </p>

          {/* Links */}
          <div className="space-y-3">
            <a
              href="/nutrition.pdf"
              className="flex items-center gap-3 font-semibold hover:underline"
              download
            >
              <FaFilePdf className="text-mainRed text-2xl" />
              Nutritional Information.PDF
            </a>

            <a
              href="/allergens.pdf"
              className="flex items-center gap-3 font-semibold hover:underline"
              download
            >
              <FaFilePdf className="text-mainRed text-2xl" />
              Allergen Information.PDF
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-[250px] md:w-[300px] h-[250px] md:h-[300px]">
            <Image
              src="/nutrition.png"
              alt="Pizza Nutrition"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}