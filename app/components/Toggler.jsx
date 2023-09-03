"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Toggler = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="w-28 h-12 border border-[#121212] dark:border-white rounded-full p-1 cursor-pointer relative"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsToggled((prev) => !prev);
            }}>
            <div
                className={
                    isToggled
                        ? "w-10 h-full rounded-full dark:bg-white bg-[#121212] transition-all translate-x-[3.95rem]"
                        : "w-10 h-full rounded-full dark:bg-white bg-[#121212] transition-all"
                }></div>
        </div>
    );
};

export default Toggler;
