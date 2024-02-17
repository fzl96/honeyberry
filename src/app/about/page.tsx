import { HomeSection } from "@/components/home/home-section";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <MaxWidthWrapper>
      <div className="container space-y-7">
        <div>
          <h1 className="text-xl font-medium duration-700 animate-in fade-in slide-in-from-bottom-2">
            About
          </h1>
          <div className="relative z-10 h-6 overflow-hidden">
            <h2 className="translate-y-3 animate-reveal-from-bottom text-foreground-soft opacity-0 delay-200 duration-300">
              Get to know me better
            </h2>
          </div>
        </div>
        <div className="translate-y-3 animate-reveal-from-bottom opacity-0 duration-300 delay-400">
          <div className="relative aspect-[16/10]">
            <Image
              src="/furina.png"
              alt="furina"
              sizes="33vw"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <p className="text-md leading-6 text-foreground [&:not(:first-child)]:mt-5">
            Furina has fair skin and heterochromic eyes with her right eye
            having a light blue iris and deep blue droplet-shaped pupil, while
            her left reverses the color scheme. She has mostly grayish-white
            hair with light blue undersections sectioned into two parts: a short
            neck-length bell-shaped bob, and waist-length locks that are tied
            into twin tails with several seemingly glowing blue streaks. A
            single lock of hair also sticks up and outward to her right,
            opposite her hat which tips to the left.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
