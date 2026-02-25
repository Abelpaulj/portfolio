import Link from "next/link";
import { Download, Cpu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)]/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[var(--color-bg-secondary)] p-2 rounded-lg group-hover:bg-[var(--color-accent)]/20 transition-colors">
                        <Cpu className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Abel Paul John</span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link href="/projects" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        About
                    </Link>

                    <a
                        href="/cv.pdf"
                        className="flex items-center gap-2 bg-[var(--color-bg-primary)] border border-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] px-4 py-2 rounded-md text-sm font-medium transition-all group"
                        download
                    >
                        <span>CV</span>
                        <Download className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
