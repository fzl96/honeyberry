"use client";

import Script from "next/script";

export function Analytics() {
  return (
    <Script
      async
      src="https://us.umami.is/script.js"
      data-website-id="3ddd1de2-aa7f-465b-8436-2f455bc3eea7"
    />
  );
}
