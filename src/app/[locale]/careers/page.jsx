'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TfiYoutube } from 'react-icons/tfi';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Page() {
  const JOBS = [
    {
      id: 1,
      category: 'Hospitality',
      title: 'Restaurant Supervisor',
      type: 'Full time',
      location: 'Dubai, United Arab Emirates',
      jobs: 2,
    },
    {
      id: 2,
      category: 'Restaurant/Food Services',
      title: 'Crew member',
      type: 'Full time',
      location: 'Dubai, United Arab Emirates',
      jobs: 1,
    },
  ];

  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Hospitality', 'Restaurant/Food Services'];

  const filteredJobs = useMemo(() => {
    return filter === 'All'
      ? JOBS
      : JOBS.filter((job) => job.category === filter);
  }, [filter]);

  const socialIcons = [
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
    TfiYoutube,
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero */}
      <section className="relative h-[60vh] w-full md:h-screen">
        <Image
          src="/career.jpg"
          alt="Careers hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/30" />

        <div className="absolute inset-0 z-20 flex flex-col p-6 sm:p-10 md:p-20">
          {/* Top bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              <Image
                src="/RedLogo.png"
                alt="Papa John's Logo"
                width={288}
                height={120}
                className="w-36 sm:w-48 md:w-72 h-auto"
                priority
              />

              <Link
                href="/"
                className="text-base sm:text-lg md:text-2xl text-white font-medium mt-1 md:mt-5"
              >
                HOME
              </Link>

              <Link
                href="/careers"
                className="text-base sm:text-lg md:text-2xl text-white font-medium mt-1 md:mt-5"
              >
                JOBS
              </Link>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start text-white text-lg sm:text-xl">
              {socialIcons.map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="border border-white rounded-full p-2 transition hover:bg-white hover:text-black"
                  aria-label={`social-${index}`}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Hero text */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-9 max-w-3xl mx-auto text-center text-white px-4 md:px-0">
              <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
                GROW YOUR CAREER WITH PAPA JOHNS PIZZA
              </h1>

              <p className="font-medium text-sm sm:text-lg md:text-2xl leading-relaxed">
                BE PART OF A BRAND THAT IS DRIVEN TO BE THE BEST, DELIVERING
                BETTER INGREDIENTS, BETTER PIZZA EVERYDAY.
              </p>

              <button className="uppercase bg-lightGreen rounded-lg py-2 px-6 sm:py-3 sm:px-10 md:px-12">
                View Opening
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="text-center px-4">
          <h2 className="text-lightGreen font-extrabold text-2xl md:text-3xl">
            Join us
          </h2>
          <h3 className="text-base md:text-lg">Current Openings</h3>

          <div className="bg-white">
            <div className="mx-auto w-full max-w-7xl px-4">
              {/* Filter bar */}
              <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-end md:gap-3 md:py-6">
                <span className="text-sm md:text-base self-start md:self-auto">
                  Filter by
                </span>

                <div className="relative w-full md:w-auto">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full md:w-auto appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-sm shadow-sm outline-none transition-all hover:border-gray-300 focus:border-gray-400"
                  >
                    {filterOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-black" />

              {/* Jobs */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8 py-8 md:grid-cols-3">
                <div className="space-y-8 sm:space-y-10">
                  <section>
                    <div className="space-y-6 sm:space-y-8 md:space-y-12">
                      {filteredJobs.map((job) => (
                        <div
                          key={job.id}
                          className="max-w-full md:max-w-md space-y-3"
                        >
                          <div className="flex items-baseline gap-3">
                            <h2 className="text-xl sm:text-[22px] md:text-2xl font-medium tracking-tight text-[#1e1e1e]">
                              {job.category}
                            </h2>

                            <span className="text-sm text-gray-400">
                              {job.jobs} Job{job.jobs > 1 ? 's' : ''}
                            </span>
                          </div>

                          <div className="rounded-2xl border border-gray-300 p-3 sm:p-4 shadow-sm bg-white text-start">
                            <p className="text-xs sm:text-sm text-gray-500">
                              {job.type}
                            </p>

                            <Link
                              href="#"
                              className="mt-1 block w-fit text-sm sm:text-[15px] font-semibold text-mainGreen underline-offset-4 hover:underline"
                            >
                              {job.title}
                            </Link>

                            <p className="mt-1 text-xs sm:text-sm text-gray-600">
                              {job.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="hidden md:block" />
              </div>

              {/* Footer */}
              <div className="flex flex-col items-center gap-5 py-5">
                <Link
                  href="/"
                  className="text-sm md:text-base font-normal text-mainGreen underline-offset-4 hover:underline"
                >
                  View website
                </Link>

                <div className="h-px w-full bg-black" />

                <div className="flex items-center gap-2 text-sm md:text-base text-gray-500">
                  <p>Powered by</p>
                  <Image
                    src="/zoho.png"
                    alt="Zoho"
                    width={128}
                    height={40}
                    className="w-24 md:w-32 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}