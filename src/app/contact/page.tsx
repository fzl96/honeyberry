import { ContactForm } from "@/components/contact/form";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiMessageSquare } from "react-icons/bi";
import { RiWhatsappLine } from "react-icons/ri";
import { CopyText } from "@/components/copy-text";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <MaxWidthWrapper className="px-10 md:px-0">
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight duration-500 animate-in fade-in slide-in-from-bottom-3">
            Contact
          </h1>
          <div className="relative z-10 h-6 overflow-hidden">
            <h2 className="scroll-m20 translate-y-3 animate-reveal-from-bottom text-lg tracking-tight text-foreground-soft opacity-0 delay-150 duration-300">
              Get in touch for any inquiries
            </h2>
          </div>
        </div>
        <div className="flex translate-y-3 animate-reveal-from-bottom items-center gap-3 opacity-0 duration-300 delay-400">
          <CopyText value="fpsdragon111@gmail.com">Email</CopyText>
          <a
            className={cn(buttonVariants({ variant: "secondary" }), "w-28")}
            href="https://wa.me/6285155255898"
            target="_blank"
          >
            WA me
            <span className="ml-2">
              <BiMessageSquare size={16} className="text-icon" />
            </span>
          </a>
        </div>
        <p className="translate-y-3 animate-reveal-from-bottom text-muted-foreground opacity-0 delay-500 duration-300">
          or
        </p>
        <div className="translate-y-3 animate-reveal-from-bottom space-y-3 opacity-0 delay-700 duration-300">
          <p className="scroll-m-20 text-lg tracking-tight">Send Message</p>
          <ContactForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
