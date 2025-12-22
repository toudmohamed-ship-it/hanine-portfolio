"use client";

// import { motion } from 'framer-motion';

export function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = "up"
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}) {
    // Temporarily disabled animations to fix Vercel MutationObserver error
    return (
        <div className={className}>
            {children}
        </div>
    );
}
