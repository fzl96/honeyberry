import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ToolTipWrapper({
  children,
  content,
  className,
  side = "bottom",
}: {
  children: React.ReactNode;
  content: string;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className={className} align="center">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
