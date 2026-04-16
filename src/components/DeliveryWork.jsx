"use client";

import Image from "next/image";

const defaultWorkList = [
  {
    image: "/work1.png",
    name: "Pre-Paid Orders",
    description: "You order and pay for your meal online or by phone.",
  },
  {
    image: "/work2.png",
    name: "Quality Seal",
    description:
      "We prepare your pizza and add a quality seal to the box to guarantee food safety standards.",
  },
  {
    image: "/work3.png",
    name: "Doorstep Drop",
    description:
      "We’ll leave your order at the door and step away to a safe distance so you can collect it.",
  },
  {
    image: "/work4.png",
    name: "Verification",
    description:
      "We’ll wait until you check your order to make sure it’s correct.",
  },
];

export default function DeliveryWork({
  workList = defaultWorkList,
  title = "How Does Contact-Free Delivery Work?",
}) {
  return (
    <div className="h-fit">
      {/* Title */}
      <div className="text-center text-3xl font-bold space-y-2">
        <h2>{title}</h2>
      </div>

      {/* Background */}
      <div className="bg-contain bg-dots2">
        <div className="xl:flex hidden justify-between">
          {workList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-5 max-w-[12rem]"
            >
              {/* Image */}
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="max-w-xs text-gray-700 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}