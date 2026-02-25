import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TagProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outline" | "accent";
}

export default function Tag({ children, className, variant = "default" }: TagProps) {
    const baseStyles = "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors";

    const variants = {
        default: "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]",
        outline: "text-[var(--color-text-primary)] border border-[var(--color-bg-secondary)]",
        accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20",
    };

    return (
        <div className={cn(baseStyles, variants[variant], className)}>
            {children}
        </div>
    );
}
