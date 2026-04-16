"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function SignForm() {
  const router = useRouter();
  const locale = useLocale();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <form
      className="bg-white px-6 py-8 md:p-10 lg:p-20 w-full rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-semibold text-left w-full leading-relaxed ">
        <span className="text-darkRed font-bold">Sign Up</span> To Your Papa
        Johns Account For More Pizza Offers And Exclusive{" "}
        <br className="hidden sm:block" /> Rewards
      </h2>
      <div className="text-[13.36px] font-normal font-poppins text-[rgba(73,71,90,1)] flex flex-col gap-1 py-6">
        <span>Sign up now and get</span>
        <ul className="list-disc pl-5">
          <li>Exclusive pizza offers</li>
          <li>The latest pizza offers and promotions</li>
          <li>Pizza news</li>
        </ul>
      </div>
      <div className="space-y-8">
        {/* Name Field */}
        <div className="pt-3">
          <label
            htmlFor="name"
            className="block mb-1 font-poppins font-semibold text-[16px] leading-[100%] text-[rgba(49,48,57,1)]"
          >
            Name
          </label>
          <div className="w-full h-[44.63px] p-px rounded-lg bg-linear-to-b from-[#A6A6A6] to-mainGreen">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full h-full px-4 py-2 rounded-[7px] bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="email"
            className="block mb-1 font-poppins font-semibold text-[16px] leading-[100%] text-[rgba(49,48,57,1)]"
          >
            Email
          </label>
          <div className="w-full h-[44.63px] p-px rounded-lg bg-linear-to-b from-[#A6A6A6] to-mainGreen">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full h-full px-4 py-2 rounded-[7px] bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-poppins font-semibold text-[16px] leading-[100%] text-[rgba(49,48,57,1)]"
          >
            Password
          </label>
          <div className="w-full h-[44.63px] p-px rounded-lg bg-linear-to-b from-[#A6A6A6] to-mainGreen">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full h-full px-4 py-2 rounded-[7px] bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1 list-disc pl-1 font-poppins text-xs leading-[100%] text-[rgba(151,148,170,1)]"
        style={{ listStyleType: "disc", paddingTop: "18px" }}
      >
        <li className="list-item">Use 8 or more characters</li>
        <li className="list-item">One Uppercase character</li>
        <li className="list-item">One lowercase character</li>
        <li className="list-item">Special character</li>
        <li className="list-item">One number</li>
      </div>
      <label className="flex items-start gap-2 text-sm font-poppins text-gray-700 cursor-pointer pt-8">
        <input type="checkbox" className="w-4 h-4 mt-1 accent-mainGreen" />
        <span>
          I agree to the{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and acknowledge you've read our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <div className="pt-12">
        <button
          type="submit"
          className="w-full font-medium text-base sm:w-50 h-12.5 px-[22.53px] py-2.5 rounded-[29.65px] bg-[rgba(166,166,166,1)] text-white flex items-center justify-center gap-[11.86px] transition hover:opacity-90 uppercase"
        >
          Sign Up
        </button>
      </div>
      <p className="font-normal text-sm pt-5">
        Already have an account?{" "}
        <Link href={`/${locale}/signin`} className="font-bold text-base">
          sign in
        </Link>
      </p>
    </form>
  );
}
