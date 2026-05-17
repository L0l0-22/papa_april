"use client";

import Image from "next/image";

export default function PrivacyContent({ image }) {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col gap-16 mt-12 mb-32">
      
      {/* Hero Image */}
      <div className="relative w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[670px]">
          <Image
            src={image}
            alt="Privacy"
            fill
            className="rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[6rem] 
                       rounded-bl-[3rem] sm:rounded-bl-[4rem] md:rounded-bl-[6rem] 
                       object-cover"
          />
        </div>

        {/* Overlay Card */}
        <div className="absolute bottom-6 sm:bottom-10 md:bottom-20 left-3 sm:left-6 md:left-20 right-3 sm:right-6 md:right-auto 
                        bg-[#D9D9D933]/70 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg text-center 
                        space-y-4 sm:space-y-5 max-w-full sm:max-w-[90%] md:max-w-[70%] mx-auto">
          
          <h2 className="font-potta text-mainGreen text-lg sm:text-xl md:text-2xl">
            PAPA JOHNS - Privacy Center
          </h2>

          <p className="text-base sm:text-lg md:text-2xl font-bold max-w-lg mx-auto">
            We care about your privacy and want to help you understand how we collect, use, and share your personal information.
          </p>

          <button className="bg-lightYellow px-8 sm:px-12 py-2 font-semibold text-sm sm:text-base rounded-full hover:bg-transparent border border-black uppercase">
            KNOW ABOUT US
          </button>
        </div>
      </div>

      {/* Section 1 */}
      <div className="bg-biege rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[6rem] p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8 md:space-y-9">
        <h2 className="font-bold text-lg sm:text-xl">
          Effective Date 16 August 2021 (last updated 16 August 2021)
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-loose font-medium">
          Papa John’s Saudi Arabia is committed to complying with the highest possible data protection regulations. 
          If you have any questions or comments about this Privacy Policy, they can be directed to <br />
          <span className="font-bold">Info.pjps@pjprestaurants.com</span><br />
          or in writing to the address supplied at the bottom of this page.
          This Privacy Policy applies to the sites and apps where it appears, and any location or interaction where we collect personal information from you.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-loose font-medium">
          This Policy describes how we treat personal information. This includes papajohns.sa. It also applies to our mobile sites and apps, all ordering channels, our social media pages, and your interactions with us offline. By interacting with us on our sites, platforms, and locations, you agree to the terms in this Policy.
        </p>
      </div>

      {/* Section 2 */}
      <div className="bg-biege rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[6rem] p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8 md:space-y-9">
        <h2 className="font-bold text-lg sm:text-xl">
          We collect information from and about you
        </h2>

        <p className="max-w-[90rem] text-sm sm:text-base md:text-lg leading-loose font-medium">
          We collect contact and profile information <br />
          For example, we might collect your name, address, profile preferences and favourites if you register on our site. 
          We might also collect your phone number or email address.<br /><br />

          We collect login credentials<br />
          For example, we will collect passwords and other information for user authentication and account login.<br /><br />

          We collect transaction data<br />
          For example, we may collect items purchased, amount purchased, transaction date/time and whether you used a discount or promo code.<br /><br />

          We collect payment information<br />
          For example, we collect your credit/debit card number, expiration date and security code.<br /><br />

          We collect information you submit or post<br />
          For example, we may collect the information you post in a public space or surveys.<br /><br />

          We collect information about your device's location<br />
          For example, we may approximate your location based on your IP address or GPS.<br /><br />

          We collect information about your interactions<br />
          For example, pages visited, timestamps, and interaction data.<br /><br />

          We collect device configuration information<br />
          For example, device type, OS, browser, IP, and settings.<br /><br />

          We collect information from partners<br />
          For example, franchisees and business partners to improve services.<br /><br />

          We collect information from social media platforms<br />
          For example, interactions like likes or follows depending on your privacy settings.
        </p>
      </div>

    </div>
  );
}