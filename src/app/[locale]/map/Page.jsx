'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32">

      <div className="bg-biege p-6 sm:p-10 lg:px-24 lg:py-12 rounded-[2rem] mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="Papa John's Logo"
            width={200}
            height={80}
            className="w-40 sm:w-48 md:w-64 h-auto"
          />
        </div>

        <h2 className="font-normal font-potta text-3xl mb-12 text-center sm:text-left">
          Sitemap
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-32 text-sm sm:text-base">

          {/* Order */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Order</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/promotions">Promotions</Link></li>
              <li><Link href="/rewards">Papa Rewards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Our Company</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact-free-delivery">Contact Free Delivery</Link></li>
            </ul>
          </div>

          {/* Food */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Our Food</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li><Link href="/ingredients">Ingredients</Link></li>
              <li><Link href="/nutrition">Nutrition</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Help</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/offers">Offer Sign Up</Link></li>
              <li><Link href="/store-locator">Store Locator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Legal</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookies">Cookies</Link></li>
              <li><Link href="/terms">Terms And Conditions</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-mainGreen font-potta text-2xl mb-2">Social</h3>
            <ul className="space-y-1 list-disc ml-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}