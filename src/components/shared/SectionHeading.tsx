import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="mb-3 inline-block font-accent text-lg tracking-wider text-secondary">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl leading-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
