"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CopyTextProps {
  children: React.ReactNode;
  value: string;
}

export function CopyText({ children, value }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="secondary"
      className="w-28"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied && <CopiedTextContent />}
      {!copied && <CopyTextContent>{children}</CopyTextContent>}
    </Button>
  );
}

function CopiedTextContent() {
  return (
    <div className="flex animate-reveal-from-right items-center space-x-2 duration-200">
      <span>Copied</span>
      <Check size={16} className="text-icon" />
    </div>
  );
}

function CopyTextContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex animate-reveal-from-left items-center space-x-2 duration-200">
      <span>{children}</span>
      <Copy size={16} className="text-icon" />
    </div>
  );
}
