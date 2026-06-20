"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 lg:left-1/2 lg:-translate-x-px" />
      <div className="space-y-12">
        {entries.map((entry, index) => (
          <TimelineItem
            key={entry.year}
            entry={entry}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex flex-col pl-12 lg:flex-row lg:pl-0"
    >
      <div
        className={`lg:w-1/2 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:order-2 lg:pl-12"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-heading text-3xl font-bold text-secondary">
            {entry.year}
          </span>
          <h3 className="mt-2 font-heading text-xl font-bold text-primary">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {entry.description}
          </p>
        </motion.div>
      </div>

      <div className="absolute left-4 top-0 flex items-start lg:left-1/2 lg:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative z-10 mt-1.5 h-3 w-3 rounded-full border-2 border-secondary bg-white"
        />
      </div>

      <div className="hidden lg:block lg:w-1/2" />
    </div>
  );
}
