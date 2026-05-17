'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVariants, resetVariants } from '@/redux/slices/variantsSlice';
import { addToCart } from '@/redux/slices/cartSlice';
import { useLocale } from 'next-intl';

export default function AddToCartModal({ isOpen, onClose, product }) {
  const locale = useLocale();
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const router = useRouter();

  const { productData, loading, error } = useSelector((state) => state.variants);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCrust, setSelectedCrust] = useState(null);

  const sizes = productData?.sizes || [];

  // Fetch variants when modal opens with a product
  useEffect(() => {
    if (isOpen && product?.id) {
      dispatch(fetchVariants(product.id));
    }
  }, [isOpen, product, dispatch]);

  // Handle default selection when data loads
  useEffect(() => {
    if (productData?.sizes?.length > 0) {
      setSelectedSize(productData.sizes[0]);
    }
  }, [productData]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      dispatch(resetVariants());
      setSelectedSize(null);
      setSelectedCrust(null);
    }
  }, [isOpen, dispatch]);

  // Lock body scroll
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const currentVariants = selectedSize ? selectedSize.variants : [];
  const basePrice = selectedSize ? selectedSize.base_price : product.price;
  const extraPrice = selectedCrust ? selectedCrust.extra_price : 0;
  const totalPrice = basePrice + extraPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-3xl w-full max-w-xs md:max-w-2xl lg:max-w-6xl lg:max-h-[85vh] relative overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black">
          ✕
        </button>

        <div className="overflow-y-auto max-h-[85vh] px-6 py-10 lg:px-12 custom-scroll flex flex-col lg:flex-row justify-between gap-8">
          
          {/* Left side: Product Info */}
          <div className="w-full lg:w-[30%] flex justify-center items-center flex-col text-center">
            <div className="relative w-60 sm:w-72 md:w-80 lg:max-w-96 h-60 sm:h-72 md:h-80">
              <Image
                src={product.image || "/pizzaCircle.png"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-5 lg:mt-7">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {product.name}
              </h3>
              <p className="text-sm md:text-lg font-normal text-gray-600">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right side: Variants */}
          <div className="w-full lg:w-[70%] flex flex-col">
            {loading ? (
              <div className="flex-1 flex justify-center items-center">
                <div className="w-12 h-12 border-b-2 border-red-700 rounded-full animate-spin"></div>
              </div>
            ) : sizes.length > 0 ? (
              <div className="flex-1">
                {/* Size Selection */}
                <h3 className="text-xl font-bold mb-4">1. Choose Size</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {sizes.map((size) => (
                    <button
                      key={size.size_id}
                      onClick={() => {
                        setSelectedSize(size);
                        setSelectedCrust(null);
                      }}
                      className={`px-6 py-2 rounded-full border-2 font-semibold transition ${
                        selectedSize?.size_id === size.size_id
                          ? "border-black bg-black text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-black"
                      }`}
                    >
                      {size.size_name}
                    </button>
                  ))}
                </div>

                {/* Crust Selection */}
                {selectedSize && currentVariants.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">2. Choose Crust</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {currentVariants.map((variant) => (
                        <button
                          key={variant.variant_id}
                          onClick={() => setSelectedCrust(variant)}
                          className={`p-4 rounded-xl border-2 text-left flex justify-between items-center transition ${
                            selectedCrust?.variant_id === variant.variant_id
                              ? "border-mainGreen bg-green-50"
                              : "border-gray-200 bg-white hover:border-gray-400"
                          }`}
                        >
                          <span className="font-medium text-gray-800 pr-2">
                            {variant.crust_name}
                          </span>
                          {variant.extra_price > 0 && (
                            <span className="text-sm font-bold text-mainGreen whitespace-nowrap">
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
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <p className="text-gray-500 mb-2">No variants available.</p>
                <p className="text-lg font-bold">{totalPrice} EGP</p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-auto pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-mainGreen font-bold text-2xl">
                {totalPrice} EGP
              </p>

              <button
                disabled={sizes.length > 0 && (!selectedSize || !selectedCrust)}
                onClick={() => {
                  dispatch(addToCart({
                    product,
                    size: selectedSize,
                    crust: selectedCrust,
                    quantity: 1
                  }));
                  onClose();
                  router.push(`/${locale}/cart`);
                }}
                className="bg-lightYellow px-10 py-3 font-extrabold text-base rounded-full border border-black uppercase transition hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}