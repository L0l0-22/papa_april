"use client";

import Image from "next/image";

export default function Steps() {
  const stepsList = [
    {
      image: "/Step1.png",
      name: "Step 1",
      description:
        "We're making sure you're safe. Place your order online or by phone and request Contact Free Delivery.",
    },
    {
      image: "/Step2.png",
      name: "Step 2",
      description:
        "Our quality seal guarantees your pizza complies with all of our safety standards and it hasn’t been opened.",
    },
    {
      image: "/Step3.png",
      name: "Step 3",
      description:
        "Your delivery is contact-free - we'll leave your pizza at your door and step away while you collect it.",
    },
    {
      image: "/Step4.png",
      name: "Step 4",
      description:
        "Once you receive your order, our driver will wait until you check it and make sure it’s correct.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl mb-12 max-w-7xl font-potta text-center lg:text-left">
        We’re making sure you’re safe, from the moment you place your order to when you receive it.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {stepsList.map((step, index) => (
          <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Image */}
            <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
              <Image
                src={step.image}
                alt={step.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="mt-5 max-w-[15rem]">
              <h3 className="text-lg font-bold">{step.name}</h3>

              <p className="text-sm mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}