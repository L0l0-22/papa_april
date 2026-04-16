"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Pizza() {
  const router = useRouter();

  const pizzaList = [
    {
      image: "/Chicken Ranch.png",
      name: "Chicken Super Papa's",
      description:
        "This is a supreme feast of chicken, chicken sausage, veggies and black olives. Super chicken or chicken super? You decide.",
    },
    {
      image: "/Peperoni.png",
      name: "Pepperoni Pizza",
      description:
        "A timeless favorite topped with layers of premium pepperoni, melted mozzarella, and our signature tomato sauce. satisfying for every pizza lover.",
    },
    {
      image: "/Garden Special Ranch.png",
      name: "Garden Special",
      description:
        "Tomatoes, mushrooms, green peppers, onions and sweetcorn piled high on a cheesy base. A crunchy and fresh pizza choice for all veggie lovers out there.",
    },
    {
      image: "/BBQ Chicken Poppers.png",
      name: "BBQ Chicken Delight",
      description:
        "Smoky BBQ sauce meets grilled chicken, cheese, and onions in a perfect mix. A favorite for those who enjoy a sweet and tangy flavor explosion every time.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-4xl mb-20 font-potta text-center md:text-left">
        Hungry? Check Out Papa Johns Near You And Taste Our Signature Pizzas!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {pizzaList.map((pizza, index) => (
          <div key={index} className="flex flex-col items-center md:items-start">
            
            {/* Image */}
            <div className="relative w-[160px] h-[160px]">
              <Image
                src={pizza.image}
                alt={pizza.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="mt-5 max-w-[13rem] mx-8 md:mx-0 text-center md:text-left">
              <h3 className="text-lg font-bold">{pizza.name}</h3>

              <p className="text-sm mt-3 leading-relaxed">
                {pizza.description}
              </p>

              <button
                onClick={() => router.push("/menu")}
                className="text-lightGreen underline underline-offset-4 font-semibold mt-3"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}