"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Footer() {
  return (
    <div className="relative w-full overflow-hidden">
      <WavyBackground className="mx-auto max-w-4xl pt-10 pb-20">
        <div className="relative z-10 px-4 text-center text-white">
          <p className="inter-var mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
            NOT because of ego
          </p>
          <p className="inter-var mt-4 text-base font-normal md:text-lg">
            Check out the repo @{" "}
            <a
              href="https://github.com/jeremywachiradev/whatsapp-shinanigans"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-gray-200"
            >
              github.com/jeremywachiradev/whatsapp-shinanigans
            </a>
          </p>
          <p className="mt-4 text-sm font-light text-gray-200 md:text-base">
            This site will be taken down next week or during this next weekend.
            Enjoy it while it lasts
          </p>
          <p className="mt-4 text-sm font-light text-gray-200 md:text-base">
            If anyone has any questions they should google it first then
            ikikulemea text in that whatsapp group.
          </p>
        </div>
      </WavyBackground>
    </div>
  );
}
