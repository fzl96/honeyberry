import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <h1>Projects</h1>
    </MaxWidthWrapper>
  );
}
