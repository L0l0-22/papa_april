"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const cleanPath = pathname;
  const router = useRouter();
  const dropdownRef = useRef();
  
  const { categories } = useSelector((state) => state.menu);

  const menuSubLinks = categories?.map((cat, index) => ({
    name: cat.name,
    id: cat.uuid || `category-${index}`,
  })) || [];

  // const menuSubLinks = [
  //   { name: t("rewards"), id: "rewards" },
  //   { name: t("legandsMeal"), id: "papas-deals" },
  //   { name: t("starPizza"), id: "pizzas" },
  //   { name: t("everyDayOffer"), id: "Every day offer" },
  //   { name: t("pizzas"), id: "pizzas" },
  //   { name: t("craissantPizza"), id: "craissant pizza" },
  //   { name: t("pastas"), id: "pastas" },
  //   { name: t("salads"), id: "salads" },
  //   { name: t("desserts"), id: "Desserts" },
  //   { name: t("beverages"), id: "beverages" },
  //   { name: t("extras"), id: "Extras" },
  // ];
  const aboutSubLinks = [
    { name: t("ingredients"), path: "/about/ingredients" },
    { name: t("nutrition"), path: "/about/nutrition" },
    { name: t("storeLocator"), path: "/about/branches" },
    { name: t("faq"), path: "/about/faq" },
  ];
  const isMenuPage = cleanPath.startsWith("/menu");
  const getSubLinks = () => {
    if (cleanPath.startsWith("/menu")) return menuSubLinks;
    if (cleanPath.startsWith("/about")) return aboutSubLinks;
    return [];
  };
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLangSelect = (nextLocale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    router.push(isMenuPage ? "/signup" : "/menu");
  };

  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto max-w-[90%]">
        {/* Top Bar */}
        <div className="px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/RedLogo.png" alt="Logo" width={120} height={40} />
          </Link>

          {/* {token && ( */}
          <div className="flex items-center justify-center gap-5">
            <div className="relative">
              <Link href="/cart" className="text-xl md:text-2xl text-gray-500">
                <MdOutlineShoppingCart />
              </Link>

              {/* {cartCount > 0 && ( */}
              <span
                className="
                      absolute -top-1 -right-1 sm:-top-2 sm:-right-2
                      bg-tangyTomato text-white font-semibold
                      text-[10px] sm:text-xs
                      w-4 h-4 
                      rounded-full
                      flex items-center justify-center
                    "
              >
                {/* {cartCount} */} 1
              </span>
              {/* )} */}
            </div>

            <Link href="/profile" className="text-xl md:text-2xl text-gray-500">
              <FaRegUser />
            </Link>
            {/* Language */}
            <div
              className="hidden xl:flex items-center gap-2 text-base font-medium relative"
              ref={dropdownRef}
            >
              <TfiWorld className="text-xl md:text-2xl" />

              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={toggleDropdown}
              >
                <span>{locale === "en" ? t("english") : t("arabic")}</span>
                <MdOutlineKeyboardArrowDown className="text-xl md:text-2xl" />
              </div>

              {isOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-lg shadow-gray-200 rounded z-50 text-sm">
                  <div
                    onClick={() => handleLangSelect("en")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {t("english")}
                  </div>
                  <div
                    onClick={() => handleLangSelect("ar")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {t("arabic")}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* )} */}

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <hr className="border-t-2 border-gray-100" />

        {/* Desktop Nav */}
        <div className="hidden xl:flex px-6 py-2 justify-between items-center">
          <div className="flex gap-6 font-bold">
            {[
              { name: t("menu"), path: "/menu" },
              { name: t("specialOffers"), path: "/offers" },
              { name: t("contactFreeDelivery"), path: "/delivery" },
              { name: t("papaRewards"), path: "/rewards" },
              { name: t("aboutUs"), path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path} // Add locale to path
                className={`${
                  pathname.endsWith(link.path)
                    ? "text-white bg-black rounded-full px-4 py-1 font-medium"
                    : "font-medium py-1"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button onClick={handleClick} className="btn-primary">
            {isMenuPage ? "Sign Up" : t("startMyOrder")}
          </button>
        </div>

        {/* Sub Links */}
        {getSubLinks().length > 0 && (
          <div className="hidden xl:flex px-6 py-2 gap-4 text-sm">
            {getSubLinks().map((link, index) => {
              const isActive = pathname.startsWith("/menu")
                ? typeof window !== "undefined" &&
                  window.location.hash === `#${link.id}`
                : pathname === link.path;

              return (
                <button
                  key={`${link.path || link.id}-${index}`}
                  onClick={() =>
                    pathname.startsWith("/menu")
                      ? handleScrollTo(link.id)
                      : router.push(link.path)
                  }
                  className={`cursor-pointer ${
                    isActive ? "text-mainGreen" : "hover:text-mainGreen"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 font-bold pt-5">
            {["/menu", "/offers", "/delivery", "/rewards", "/about"].map(
              (path) => (
                <Link
                  key={path}
                  href={`/${locale}${path}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {path.replace("/", "").toUpperCase() || "HOME"}
                </Link>
              ),
            )}
          </div>

          <button onClick={handleClick} className="btn-primary">
            {isMenuPage ? "Sign In" : t("startMyOrder")}
          </button>
        </div>
      )}
    </div>
  );
}
