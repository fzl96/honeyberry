import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";
import { Icons } from "@/components/icons";
import { ToolTipWrapper } from "@/components/tooltip-wrapper";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { HomeSection } from "@/components/home/home-section";
import { ProjectCard } from "@/components/home/project-card";
import { Metadata } from "next";
import { ViewAll } from "@/components/home/view-all-button";
import { ExperienceEducationCard } from "@/components/home/experience-education-card";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Homepage | Honeyberry",
};

export default function Home() {
  return (
    <MaxWidthWrapper className="max-w-[768px]">
      <div className="flex flex-col items-center justify-center md:my-20">
        <h1
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight duration-700 animate-in fade-in slide-in-from-bottom-2 md:text-3xl",
          )}
        >
          M. Fazlie
        </h1>
        <div className="relative z-10 h-6 overflow-hidden">
          <h2 className="scroll-m20 translate-y-3 animate-reveal-from-bottom text-base tracking-tight text-foreground-soft opacity-0 delay-200 duration-300 md:text-lg">
            Front End Web Developer
          </h2>
        </div>
        <div className="mt-3 flex translate-y-3 animate-reveal-from-bottom items-center gap-5 text-center opacity-0 duration-300 delay-400">
          {siteConfig.links.map((link) => {
            const Icon = Icons[link.icon || "arrowRight"];
            return (
              <ToolTipWrapper
                key={link.name}
                content={link.name}
                className="border-none"
                side="bottom"
              >
                <a href={link.url} target="_blank">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-200 hover:text-foreground-soft" />
                </a>
              </ToolTipWrapper>
            );
          })}
        </div>
      </div>
      <div className="translate-y-3 animate-reveal-from-bottom opacity-0 duration-300 delay-800 md:delay-700">
        {/* About Section*/}
        <HomeSection
          title="About"
          containerClassName="mt-8"
          contentContainerClassName="text-md leading-6 text-foreground-soft md:text-base space-y-5"
        >
          <p>
            Hi, I&apos;m Fazlie, a frontend web developer based in Indonesia
          </p>
          <p>
            I specialize in frontend web development while also possessing
            substantial expertise in backend development. This dual proficiency
            allows me to craft immersive and user-friendly experiences on the
            frontend while ensuring robust functionality on the backend
          </p>
          <p></p>
        </HomeSection>

        {/* Projects Section */}
        <HomeSection
          title="Projects"
          containerClassName="mt-7"
          contentContainerClassName="flex flex-col gap-5"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              title={project.name}
              href="/#"
              image={project.img}
            />
          ))}
          <ViewAll href="/projects" />
        </HomeSection>

        {/* Experience Section */}
        <HomeSection
          containerClassName="mt-7"
          title="Experience"
          contentContainerClassName="space-y-3"
        >
          <ExperienceEducationCard
            title="Oceanid"
            date="1000 - 1150"
            location="Fontaine"
            description="One of the oceanid creatures in the world of Teyvat and served as the Hydro Archon's familiar"
          />
          <ExperienceEducationCard
            title="Hydro Archon"
            date="1150 - 1650"
            location="Fontaine"
            description="Leading the region of Fontaine as one of the 7 archons, the Hydro Archon"
          />
          <ExperienceEducationCard
            title="Art Director"
            date="1650 - Now"
            location="Fontaine"
            description="Retired from her position as Hydro Archon and pursued her career as a director"
          />
        </HomeSection>

        {/* Education Section */}
        <HomeSection containerClassName="mt-7" title="Education">
          <ExperienceEducationCard
            title="Bachelor of Engineering"
            date="2019 - 2023"
            location="University of Riau"
            description="Graduated with a Bachelor of Engineering degree in Informatics Engineering"
          />
        </HomeSection>

        {/* Contact */}
        <HomeSection
          id="contact"
          containerClassName="mt-7"
          title="Contact"
          contentContainerClassName="space-y-3"
        >
          <ul>
            <li className="text-md">
              Email: {` `}
              <a
                href="mailto:fpsdragon111@gmail.com"
                className="border-b text-icon transition-colors duration-300 hover:text-foreground"
              >
                mfzl3927@gmail.com
              </a>
            </li>
            <li className="text-md">
              LinkedIn:{` `}
              <a
                href="https://www.linkedin.com/in/muhammad-fazlie-a52469233/"
                className="border-b text-icon transition-colors duration-300 hover:text-foreground"
              >
                connect
              </a>
            </li>
          </ul>
        </HomeSection>
      </div>
    </MaxWidthWrapper>
  );
}
