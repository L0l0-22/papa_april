'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "@/redux/slices/menuSlice";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useLocale();
  const { categories, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-b-2 border-red-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-[80%] mx-auto mt-12 mb-32">
      {categories.map((category, index) => (
        <section
          key={category.uuid ? `${category.uuid}-${index}` : index}
          id={category.uuid || `category-${index}`}
          className="mb-20 scroll-mt-12"
        >
          <h2 className="mb-4 h2-title">{category.name}</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {category.products?.map((item, index) => (
              <div
                key={item.uuid ? `${item.uuid}-${index}` : (item.id ? `${item.id}-${index}` : index)}
                className="flex flex-col overflow-hidden transition bg-white border shadow rounded-2xl hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="mb-1 text-base font-bold">{item.name}</h3>

                  <p className="flex-grow text-sm text-gray-600">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-9">
                    <p className="text-sm font-bold">
                      {item.has_discount ? (
                        <>
                          <span className="mr-2 text-red-600">${item.price_after_discount}</span>
                          <span className="text-xs text-gray-400 line-through">${item.price}</span>
                        </>
                      ) : (
                        `$${item.price}`
                      )}
                    </p>

                    <button
                      onClick={() => {
                        router.push(`/${locale}/product/${item.id}`);
                      }}
                      className="btn-primary"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}