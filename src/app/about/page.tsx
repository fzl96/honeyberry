import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <MaxWidthWrapper>
      <div>About</div>
    </MaxWidthWrapper>
  );
}
