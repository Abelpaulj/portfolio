import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CTAProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    icon?: React.ReactNode;
    className?: string;
    external?: boolean;
}

export function CTAButton({ href, children, variant = "primary", icon, className, external = false }: CTAProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

    const variants = {
        primary: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm",
        secondary: "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]/80",
        outline: "border border-[var(--color-bg-secondary)] bg-transparent hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]",
    };

    const content = (
        <>
            {children}
            {icon}
        </>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cn(baseStyles, variants[variant], className)}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={cn(baseStyles, variants[variant], className)}>
            {content}
        </Link>
    );
}

export function HomeHeroCTAs() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <CTAButton href="/projects" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                View Case Studies
            </CTAButton>
            <CTAButton href="mailto:abelpaulj@gmail.com" variant="outline" icon={<Mail className="w-4 h-4" />} external>
                Contact Me
            </CTAButton>
        </div>
    );
}
