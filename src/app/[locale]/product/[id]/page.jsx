'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVariants, resetVariants } from '@/redux/slices/variantsSlice';
import { fetchMenu } from '@/redux/slices/menuSlice';
import { addToCart } from '@/redux/slices/cartSlice';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();
  const id = params?.id;
  const locale = params?.locale || 'en';

  const { categories, loading: menuLoading } = useSelector((state) => state.menu);
  const { productData, loading: variantsLoading, error } = useSelector((state) => state.variants);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCrust, setSelectedCrust] = useState(null);

  // Find the product metadata from loaded categories
  const product = categories
    ?.flatMap((c) => c.products || [])
    ?.find((p) => p.id === Number(id));

  // Fetch menu if not loaded, to get product image, name, etc.
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchMenu());
    }
  }, [categories, dispatch]);

  // Fetch variants for this product
  useEffect(() => {
    if (id) {
      dispatch(fetchVariants(id));
    }
    return () => {
      dispatch(resetVariants());
    };
  }, [id, dispatch]);

  // Handle default selection when sizes data loads
  useEffect(() => {
    if (productData?.sizes?.length > 0) {
      setSelectedSize(productData.sizes[0]);
    }
  }, [productData]);

  if (menuLoading || variantsLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-16 h-16 border-4 border-mainRed border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">Loading delicious details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-gray-100 rounded-3xl shadow-xl text-center">
        <h2 className="text-2xl font-bold text-mainRed mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">We couldn't find the requested pizza or item. It may be temporarily unavailable.</p>
        <Link
          href={`/${locale}/menu`}
          className="inline-flex items-center gap-2 bg-mainGreen text-white px-8 py-3 rounded-full font-bold transition hover:bg-opacity-90"
        >
          <IoMdArrowBack size={20} /> Back to Menu
        </Link>
      </div>
    );
  }

  const sizes = productData?.sizes || [];
  const currentVariants = selectedSize ? selectedSize.variants : [];
  const basePrice = selectedSize ? selectedSize.base_price : product.price;
  const extraPrice = selectedCrust ? selectedCrust.extra_price : 0;
  const totalPrice = basePrice + extraPrice;

  return (
    <div className="max-w-[80%] mx-auto mt-8 mb-24 font-PapaSans">
      {/* Breadcrumb & Back button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href={`/${locale}`} className="hover:text-mainRed transition">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/menu`} className="hover:text-mainRed transition">Menu</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>
        
        <button
          onClick={() => router.push(`/${locale}/menu`)}
          className="flex items-center gap-2 text-mainGreen font-bold hover:text-black transition group"
        >
          <IoMdArrowBack size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </button>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Product Visuals */}
        <div className="w-full lg:w-[45%] flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[450px] bg-gradient-to-tr from-stone-50 to-orange-50 rounded-[40px] shadow-sm flex items-center justify-center p-8 transition-transform duration-500 hover:scale-105">
            <Image
              src={product.image || "/pizzaCircle.png"}
              alt={product.name}
              fill
              className="object-contain p-6"
              priority
            />
          </div>
          
          <div className="mt-8 text-center lg:text-left w-full max-w-[450px]">
            <h1 className="text-3xl md:text-4xl font-extrabold text-mainGreen mb-4 tracking-tight">
              {product.name}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
              {product.description || "Freshly baked pizza made with our signature sauce, standard dough, and premium toppings."}
            </p>
          </div>
        </div>

        {/* Right Side: Options Configuration */}
        <div className="w-full lg:w-[50%] flex flex-col bg-white border border-gray-100 p-8 md:p-10 rounded-[32px] shadow-sm">
          
          {sizes.length > 0 ? (
            <div className="flex-1">
              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-lightYellow text-black font-extrabold flex items-center justify-center text-xs">1</span>
                  Choose Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.size_id}
                      onClick={() => {
                        setSelectedSize(size);
                        setSelectedCrust(null);
                      }}
                      className={`px-6 py-3 rounded-full border-2 font-bold text-sm transition-all duration-200 transform active:scale-95 ${
                        selectedSize?.size_id === size.size_id
                          ? "border-black bg-black text-white shadow-md"
                          : "border-gray-200 bg-white text-gray-700 hover:border-black hover:bg-gray-50"
                      }`}
                    >
                      {size.size_name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crust Selection */}
              {selectedSize && currentVariants.length > 0 && (
                <div className="mb-8 animate-fadeIn">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-lightYellow text-black font-extrabold flex items-center justify-center text-xs">2</span>
                    Choose Crust
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentVariants.map((variant) => (
                      <button
                        key={variant.variant_id}
                        onClick={() => setSelectedCrust(variant)}
                        className={`p-5 rounded-2xl border-2 text-left flex justify-between items-center transition-all duration-300 transform active:scale-[0.98] ${
                          selectedCrust?.variant_id === variant.variant_id
                            ? "border-mainGreen bg-green-50/50 shadow-sm"
                            : "border-gray-100 bg-white hover:border-gray-300 shadow-sm"
                        }`}
                      >
                        <span className={`font-semibold transition-colors duration-200 ${
                          selectedCrust?.variant_id === variant.variant_id ? "text-mainGreen font-bold" : "text-gray-800"
                        }`}>
                          {variant.crust_name}
                        </span>
                        {variant.extra_price > 0 && (
                          <span className="text-sm font-extrabold text-mainGreen bg-green-100/60 px-3 py-1 rounded-full whitespace-nowrap">
                            +{variant.extra_price} EGP
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center items-center py-12 text-center">
              <p className="text-gray-500 mb-4 font-semibold text-lg">Standard product option only.</p>
              <div className="text-3xl font-extrabold text-mainGreen">{totalPrice} EGP</div>
            </div>
          )}

          {/* Pricing & Add to Cart Action */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Total Price</span>
              <span className="text-mainGreen font-extrabold text-3xl">
                {totalPrice} EGP
              </span>
            </div>

            <button
              disabled={sizes.length > 0 && (!selectedSize || !selectedCrust)}
              onClick={() => {
                dispatch(addToCart({
                  product,
                  size: selectedSize,
                  crust: selectedCrust,
                  quantity: 1
                }));
                router.push(`/${locale}/cart`);
              }}
              className="w-full sm:w-auto bg-lightYellow px-12 py-4 font-extrabold text-base rounded-full border border-black uppercase shadow-md transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
