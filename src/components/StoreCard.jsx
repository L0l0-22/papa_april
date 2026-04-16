"use client";

import { useRouter } from "next/navigation";

export default function StoreCard() {
  const router = useRouter();

  const stores = Array(8).fill({
    name: "PJPS - Cairo",
    address: "Cairo, Maadi 13784",
    hours: "Monday - Sunday 11AM - 4AM",
    contact: "0111147272",
  });

  return (
    <div className="max-w-[95%] w-full mx-auto">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-biege rounded-xl shadow-md p-6 flex flex-col gap-3 justify-between hover:shadow-lg transition"
          >
            
            <h3 className="font-bold text-lg mb-2">{store.name}</h3>

            <div className="text-sm space-y-3 mb-4">
              <div>
                <strong>Address</strong>
                <p>{store.address}</p>
              </div>

              <div>
                <strong>Hours</strong>
                <p>{store.hours}</p>
              </div>

              <div>
                <strong>Contact</strong>
                <p>{store.contact}</p>
              </div>
            </div>

            <button
              onClick={() => router.push("/menu")}
              className="bg-lightYellow w-fit px-8 py-2 font-medium rounded-full hover:bg-transparent border border-black uppercase"
            >
              ORDER HERE!
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}