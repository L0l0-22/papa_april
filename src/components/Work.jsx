"use client";

import Image from "next/image";

export default function Work() {
  const workList = [
    {
      image: "/laptop.png",
      name: "CHOOSE",
      description:
        "Prepared fresh daily, our pizza is crafted with hand-stretched dough, homemade sauce, and the finest toppings.",
    },
    {
      image: "/circle2.png",
      name: "PREPARE FOOD",
      description:
        "From dough to oven, every Elpizza is made with love — and trust us, you can taste it",
    },
    {
      image: "/pizzaBox.png",
      name: "DELIVER",
      description:
        "Our pizza doesn’t just look good — it’s crafted to make your taste buds dance",
    },
  ];

  return (
    <div className="pb-32 h-fit">
      
      {/* Title */}
      <div className="text-center text-xl font-potta font-normal space-y-2">
        <h2 className="text-lightGreen">How to work</h2>
        <h2>"Pizza is an important part of a balanced mood"</h2>
      </div>

      {/* Background */}
      <div className="bg-contain bg-dots">
        <div className="xl:flex hidden justify-between">
          
          {workList.map((item, index) => {
            
            // 🔹 FIRST ITEM
            if (index === 0) {
              return (
                <div key={index} className="flex flex-col items-start text-start gap-5">
                  
                  <div className="relative w-[180px] h-[180px]">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>

                  <h3 className="text-2xl font-bold text-mainGreen ml-0 xl1600:ml-18 xl1700:ml-28 xl1800:ml-36">
                    {item.name}
                  </h3>

                  <p className="max-w-xs text-gray-700 mt-2 xl1800:text-right line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            }

            // 🔹 SECOND ITEM
            if (index === 1) {
              return (
                <div key={index} className="flex flex-col items-center text-start gap-5">
                  
                  <h3 className="text-2xl font-bold text-mainGreen xl1600:mr-5 xl1400:mt-2 xl1400:mr-6 xl1600:mt-0">
                    {item.name}
                  </h3>

                  <p className="max-w-xs text-gray-700 mt-2">
                    {item.description}
                  </p>

                  <div className="relative w-[180px] h-[180px]">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                </div>
              );
            }

            // 🔹 THIRD ITEM
            if (index === 2) {
              return (
                <div key={index} className="flex flex-col xl1400:items-end text-start gap-5">
                  
                  <div className="relative w-[180px] h-[180px] mr-24 xl1400:mr-0 xl1800:mr-24">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>

                  <h3 className="text-2xl font-bold text-mainGreen mr-0 xl1600:mr-18 xl1700:mr-28 xl1800:mr-36">
                    {item.name}
                  </h3>

                  <p className="max-w-xs text-gray-700 mt-2 xl1400:text-end xl1800:text-start">
                    {item.description}
                  </p>
                </div>
              );
            }

            return null;
          })}

        </div>
      </div>
    </div>
  );
}