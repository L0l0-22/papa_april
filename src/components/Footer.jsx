"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/signup");
  };

  return (
    <div className="bg-[#6A9D76] text-white text-base">
      <div className="max-w-[90%] mx-auto">
        <div className="px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Company</h4>
            <ul className="space-y-2 text-gray-100 text-sm font-normal">
              <li><Link href="/about">About Papa Johns</Link></li>
              <li><Link href="/contact-free-delivery">Contact Free Delivery</Link></li>
              <li><Link href="/rewards">Papa Rewards</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Pizza</h4>
            <ul className="space-y-2 text-gray-100 text-sm font-normal">
              <li><Link href="/about/ingredients">Ingredients</Link></li>
              <li><Link href="/about/nutrition">Nutrition</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-gray-100 text-sm font-normal">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about/faq">FAQ</Link></li>
              <li><Link href="/offers">Offer Sign Up</Link></li>
              <li><Link href="/about/store">Store Locator</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-lg mb-2 text-center">
              Want more pizza offers?<br />Of course you do!
            </h4>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-2 px-4 py-2 rounded text-black"
            />

            <div className="flex justify-end">
              <button
                className="bg-[#3D3C3C] text-white px-8 py-2 mt-3 rounded w-fit"
                onClick={handleSignInClick}
              >
                sign up
              </button>
            </div>

            <p className="mt-2 font-normal text-gray-100 max-w-72">
              By signing up, I agree to receive marketing communication from Papa Johns via email and/or SMS/Text.
            </p>
          </div>
        </div>

        {/* Logo Row */}
        <div className="flex justify-between w-full items-center">
          <p>
            <span className="font-bold text-lg text-white">
              Better Ingredients. Better Pizza.
            </span>
          </p>

          <div className="relative w-36.5 h-15">
            <Image src="/logo.png" alt="Papa John's" fill className="object-contain" />
          </div>
        </div>

        <div className="border-t border-white/30 mt-6 py-4 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-100 gap-3">
            <div className="flex gap-8 mt-2 md:mt-0">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/cookies">Cookie</Link>
              <Link href="/site-map">Site Map</Link>
            </div>

            <div className="flex gap-4 text-white text-2xl">
              <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start text-gray-100 gap-6">
            <div>
              <p className="mb-4">Payment Methods Available:</p>

              <div className="flex gap-2">
                <Image src="/Visa.png" alt="Visa" width={40} height={24} />
                <Image src="/Mastercard.png" alt="Mastercard" width={40} height={24} />
                <Image src="/PayPal.png" alt="PayPal" width={40} height={24} />
                <Image src="/cash.png" alt="Cash" width={40} height={24} />
              </div>
            </div>
          </div>

          <p className="leading-relaxed max-w-340 mt-4">
            Offers good for a limited time at participating Papa Johns restaurants...
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-100">
              ©2025 Papa Johns International, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}