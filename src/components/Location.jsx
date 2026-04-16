"use client";

import dynamic from "next/dynamic";

// disable SSR for map
const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

export default function Location({ showHeading = true }) {
  return (
    <div className="text-center">
      
      {showHeading && (
        <h2 className="font-potta text-2xl md:text-4xl leading-relaxed mb-16">
          We’re here for you <br />
          <span className="text-mainGreen">
            no matter where you are
          </span>
        </h2>
      )}

      <InteractiveMap />
    </div>
  );
}