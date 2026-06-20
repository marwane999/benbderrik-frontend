"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function AccordionCard({
  icon: Icon,
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: AccordionCardProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer rounded-xl border transition-all",
        isOpen
          ? "border-primary/20 bg-white shadow-lg"
          : "border-neutral-200 bg-white hover:border-primary/10 hover:shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-6 text-left"
      >
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors",
            isOpen ? "bg-primary text-white" : "bg-primary/5 text-primary"
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold text-primary">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-400">{subtitle}</p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-neutral-400 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-100 px-6 pb-6 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
