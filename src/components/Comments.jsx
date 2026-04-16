"use client";

import Image from "next/image";
import papaLogo from "/public/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

export default function Comments() {
  return (
    <div className="mx-auto">
      <h2 className="text-center mb-12 font-normal text-4xl font-potta">
        We Welcome Your Comments And Suggestions
      </h2>

      <div className="relative">
        {/* Background Image */}
        <div className="relative w-full max-h-[1121px] h-[1121px]">
          <Image
            src="/comments.png"
            alt="comments Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-between p-20 gap-20 mt-12 flex-col lg:flex-row">
            
            {/* Form */}
            <div className="w-full lg:w-1/2">
              <form className="p-6 space-y-6">
                <div className="flex flex-col">
                  <label className="mb-1 font-bold text-xl text-black">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="border-2 border-lightGreen bg-transparent rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightGreen"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-bold text-xl text-black">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="border-2 border-lightGreen bg-transparent rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightGreen"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-bold text-xl text-black">
                    Message:
                  </label>
                  <textarea
                    rows="4"
                    className="border-2 border-lightGreen bg-transparent rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightGreen resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-mainRed text-white font-bold text-2xl py-3 px-24 rounded-full transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-[146px] h-[60px] lg:w-[200px] lg:h-[125px]">
                <Image
                  src="/logo.png"
                  alt="Papa John's Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-12 lg:space-y-9">
                <h2 className="text-2xl lg:text-4xl font-normal mb-2 font-potta">
                  Lets Get in <span className="text-mainRed">Touch!</span>
                </h2>

                <p className="text-[#4C4C4C] text-lg font-normal max-w-md leading-relaxed">
                  Have a question or need assistance? Reach out to us via email,
                  phone, or the contact form below. We're eager to assist you.
                </p>

                <p className="text-mainRed font-potta font-normal text-xl">
                  Nice hearing from you!
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center p-32 flex-col lg:flex-row gap-10">
            
            {/* Social Icons */}
            <div className="flex gap-4 text-white text-xl">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, TfiYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="border border-white rounded-full p-2"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>

            {/* Contact Info */}
            <div className="flex gap-20 text-white flex-col lg:flex-row">
              
              {/* Head Office */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Head Office:</h2>
                <div className="flex items-center gap-3 mb-2">
                  <FaPhoneAlt className="text-lightGreen" />
                  <span>011145451252</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-lightGreen" />
                  <span>ffzgbzfdbz@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-lightGreen" />
                  <span>2068 maadi dndnf</span>
                </div>
              </div>

              {/* Branch Office */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Branch Office:</h2>
                <div className="flex items-center gap-3 mb-2">
                  <FaPhoneAlt className="text-lightGreen" />
                  <span>011145451252</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="text-lightGreen" />
                  <span>ufhgdffff@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-lightGreen" />
                  <span>2068 maadi dndnf</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}