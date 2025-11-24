"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Footer() {
  return (
    <div className="relative w-full overflow-hidden">
      <WavyBackground className="mx-auto max-w-4xl pt-10 pb-20">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-neutral-900 dark:text-white">
          <p className="inter-var mb-4 text-2xl font-bold md:text-4xl lg:text-5xl">
            NOT because of ego
          </p>
          <p className="inter-var mt-4 text-base font-normal md:text-lg text-neutral-600 dark:text-neutral-200">
            Check out the repo @{" "}
            <a
              href="https://github.com/jeremywachiradev/whatsapp-shinanigans"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
            >
              github 
            </a>
          </p>
          <p className="mt-4 text-sm font-light text-neutral-500 dark:text-neutral-300 md:text-base">
            This site will be taken down next week or during this next weekend.
            Enjoy it while it lasts
          </p>
          <p className="mt-4 text-sm font-light text-neutral-500 dark:text-neutral-300 md:text-base">
            If anyone has any questions they should google it first then
            ikikulemea text in that whatsapp group.
          </p>
          <p className="mt-4 text-sm font-light text-neutral-500 dark:text-neutral-300 md:text-base">
  Go check out this footer in a bigger screen, trust me 😂
          </p>
        </div>
      </WavyBackground>
    </div>
  );
}
