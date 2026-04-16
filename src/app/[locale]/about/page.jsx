'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Meeting from '@/components/Meeting';
import Find from '@/components/Find';
import Location from '@/components/Location';
import DownloadApp from '@/components/DownloadApp';
import Feedback from '@/components/Feedback';
import { feedbackData } from '@/components/feedbackData';


export default function Page() {
  const pathname = usePathname();

  const customFindArray = [
    {
      image: "/find2.png",
      name: "Always Try Harder",
      description: "...",
    },
    {
      image: "/find3.png",
      name: "Not Just Pizza",
      description: "...",
    },
    {
      image: "/delivery1.jpg",
      name: "Quality Above All",
      description: "...",
    },
    {
      image: "/menu3.jpg",
      name: "Always Try Harder",
      description: "...",
    },
  ];

  const isBaseAbout = pathname === "/about";

  return (
    <>
      {/* {isBaseAbout && ( */}
        <>
          <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32 ">
            <div className="mb-20">
              <Meeting />
            </div>
            <Find findList={customFindArray} title="The Secret To Our Success" />
            <Location showHeading={true} />
          </div>

          <div className="w-full flex flex-col gap-48 mt-12 mb-32 ">
            <DownloadApp />
          </div>

          <div className="w-full max-w-[90%] mx-auto flex flex-col gap-44 mt-12 mb-32 ">
            <Feedback data={feedbackData[1]} />
          </div>
        </>
      {/* )} */}
    </>
  );
}
