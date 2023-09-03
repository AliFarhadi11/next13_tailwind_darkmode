"use client";
import { useTheme } from "next-themes";
import Toggler from "./components/Toggler";
import { useState, useEffect } from "react";

export default function Home() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col gap-12 justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-center">Next.js 13 {theme === "dark" ? "DarkMode" : "LightMode"}</h1>

            {/* toggler */}
            <Toggler />
        </div>
    );
}
