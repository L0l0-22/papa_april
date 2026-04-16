"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl"; // Import useLocale hook
import { FaBars, FaTimes } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const locale = useLocale(); // Get current locale
  const pathname = usePathname();
  const cleanPath = pathname.replace(`/${locale}`, "");
  const router = useRouter();
  const dropdownRef = useRef();

  const menuSubLinks = [
    { name: "Rewards", id: "Rewards" },
    { name: "Legands meal", id: "Legands meal" },
    { name: "Star pizza", id: "Star pizza" },
    { name: "Every day offer", id: "Every day offer" },
    { name: "pizzas", id: "pizzas" },
    { name: "craissant pizza", id: "craissant pizza" },
    { name: "pastas", id: "pastas" },
    { name: "salads", id: "salads" },
    { name: "Desserts", id: "Desserts" },
    { name: "Beverages", id: "Beverages" },
    { name: "Extras", id: "Extras" },
  ];

  const aboutSubLinks = [
    { name: "Ingredients", path: "/about/ingredients" },
    { name: "Nutrition", path: "/about/nutrition" },
    { name: "Store Locator", path: "/about/branches" },
    { name: "FAQ", path: "/about/faq" },
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

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
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
    router.push(isMenuPage ? `/${locale}/signup` : `/${locale}/menu`);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto max-w-[90%]">
        {/* Top Bar */}
        <div className="px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/RedLogo.png" alt="Logo" width={120} height={40} />
          </Link>

          {/* Language */}
          <div
            className="hidden xl:flex items-center gap-2 text-base font-bold relative"
            ref={dropdownRef}
          >
            <TfiWorld size={23} />

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>{selectedLang}</span>
              <MdOutlineKeyboardArrowDown size={23} />
            </div>

            {isOpen && (
              <div className="absolute top-full mt-2 left-0 w-full bg-white rounded shadow-lg z-50 text-sm">
                {["English", "Arabic"].map((lang) => (
                  <div
                    key={lang}
                    onClick={() => handleLangSelect(lang)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

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
              { name: "MENU", path: "/menu" },
              { name: "Special Offers", path: "/offers" },
              { name: "Contact Free Delivery", path: "/delivery" },
              { name: "PAPA Rewards", path: "/rewards" },
              { name: "About Us", path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                href={`/${locale}${link.path}`}  // Add locale to path
                className={`${
                  pathname === link.path
                    ? "text-white bg-black rounded-full px-4 py-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={handleClick}
            className="bg-lightYellow px-8 py-2 rounded-full border border-black uppercase"
          >
            {isMenuPage ? "Sign Up" : "Start My Order"}
          </button>
        </div>

        {/* Sub Links */}
        {getSubLinks().length > 0 && (
          <div className="hidden xl:flex px-6 py-2 gap-4 text-sm">
            {getSubLinks().map((link) => (
              <button
                key={link.path || link.id}
                onClick={() =>
                  pathname.startsWith("/menu")
                    ? handleScrollTo(link.id)
                    : router.push(`/${locale}${link.path}`)  // Add locale to sub-link path
                }
                className="hover:text-mainGreen"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 font-bold pt-5">
            {["/menu", "/offers", "/delivery", "/rewards", "/about"].map(
              (path) => (
                <Link key={path} href={`/${locale}${path}`} onClick={() => setMenuOpen(false)}>
                  {path.replace("/", "").toUpperCase() || "HOME"}
                </Link>
              )
            )}
          </div>

          <button
            onClick={handleClick}
            className="mt-4 bg-lightYellow px-8 py-2 rounded-full border border-black uppercase"
          >
            {isMenuPage ? "Sign In" : "Start My Order"}
          </button>
        </div>
      )}
    </div>
  );
}