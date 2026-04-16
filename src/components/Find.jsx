"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const defaultFindList = [
  {
    image: "/find1.png",
    name: "Better Ingredients. Better Pizza",
    description:
      "It’s that simple. It always has been. Ever since our very first pizza!",
    button: "About Us",
    navigateTo: "/about",
  },
  {
    image: "/find2.png",
    name: "Find Your Local Store",
    description:
      "Papa John's is in Saudi! Want to try an American-style pizza?",
    button: "Store Locator",
    navigateTo: "/about/store",
  },
  {
    image: "/find3.png",
    name: "Find Your Local Store",
    description:
      "Papa John's is in Saudi! Want to try an American-style pizza?",
    button: "Special Deals",
    navigateTo: "/offers",
  },
  {
    image: "/find1.png",
    name: "Better Ingredients. Better Pizza",
    description:
      "It’s that simple. It always has been. Ever since our very first pizza!",
    button: "About Us",
    navigateTo: "/about",
  },
];

export default function Find({
  bgColor = "bg-biege",
  findList = defaultFindList,
  buttonClass = "text-lightGreen font-bold mt-6 text-lg",
  title = "Want to Find Out More?",
  titleClass = "text-2xl md:text-4xl mb-24 font-potta text-center",
}) {
  const router = useRouter();

  return (
    <div>
      <h2 className={titleClass}>{title}</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-9 mt-9 justify-items-center">
        {findList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-center ${bgColor} rounded-lg w-fit shadow-lg`}
          >
            {/* Image */}
            <div className="relative w-full h-80 md:h-auto md:w-80">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-sm p-8">
              <h3 className="text-xl font-bold">{item.name}</h3>

              <p className="text-base font-normal mt-3 leading-relaxed">
                {item.description}
              </p>

              <button
                onClick={() => router.push(item.navigateTo)}
                className={buttonClass}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}