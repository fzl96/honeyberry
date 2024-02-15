import { ContactForm } from "@/components/contact/form";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <MaxWidthWrapper className="px-10 md:px-0">
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight duration-700 animate-in fade-in slide-in-from-bottom-3">
            Contact
          </h1>
          <div className="relative z-10 h-6 overflow-hidden">
            <h2 className="scroll-m20 translate-y-3 animate-reveal-from-bottom text-lg tracking-tight text-foreground-soft opacity-0 delay-200 duration-300">
              Get in touch for any inquiries
            </h2>
          </div>
        </div>
        <div className="translate-y-3 animate-reveal-from-bottom opacity-0 delay-500 duration-500">
          <ContactForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
