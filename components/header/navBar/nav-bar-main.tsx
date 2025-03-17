"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import caterStationLogo from '@/public/logo/cater-station-nav-logo.png';
import { Menu, MenuItem, ProductItem } from "@/components/header/navBar/navBar-menu";
import { cn } from "@/utils/tailwindConfig/utils";
import Image from "next/image";
import { navItems } from "@/config/main-website-config/navBarConfig";
import { LinkPreview } from "@/components/Static-components/link-Preview/link-preview";
import { InteractiveHoverButton } from "@/components/Static-components/button/signUpButton";
import { Magnetic } from "@/components/animations/Magnetic-motion";
import { SideBar } from "@/components/header/navBar/NavBar-Mobile";
import Link from "next/link";

export function NavbarMenu() {
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        // Check if the navbar has already animated before
        if (sessionStorage.getItem("navbarAnimated")) {
            setInitialLoad(false);
        } else {
            sessionStorage.setItem("navbarAnimated", "true");
            setInitialLoad(true);
        }
    }, []);

    return (
        <motion.div
            // Only use the initial animation if it's the very first load.
            initial={initialLoad ? { y: "-100%" } : false}
            animate={{ y: 0 }}
            transition={initialLoad ? { duration: 0.8, ease: "easeOut" } : {}}
            className="w-screen fixed top-0 z-10000 bg-white flex border-b-2 border-blue py-3 items-center px-3 lg:px-0 justify-between lg:justify-around"
        >
            <Link href="/">
            <Image src={caterStationLogo} alt="Cater Station Logo" />
            </Link>
            <Navbar className="top-2" />
            <div className="flex gap-3">
                <Magnetic>
                    <InteractiveHoverButton className="lg:w-[17rem]! md:w-[16rem] sm:block hidden" text="Sign up" />
                </Magnetic>
            </div>
            <SideBar />
        </motion.div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("top-10 hidden sm:block z-50", className)}>
            <Menu setActive={setActive}>
                {navItems.map((tab) => (
                    <MenuItem key={tab.menuId} setActive={setActive} active={active} item={tab.menuName}>
                        {tab.menuItemsType ? (
                            <div className="h-[60vh] overflow-y-scroll" data-lenis-prevent={true}>
                                {tab.menuItems.map((menu) => {
                                    const truncatedDescription =
                                        menu.description.length > 100 ? menu.description.substring(0, 100) + " ..." : menu.description;
                                    return (
                                        <ProductItem
                                            key={menu.name}
                                            title={menu.name}
                                            href={menu.href}
                                            src={menu.src}
                                            description={truncatedDescription}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 text-sm">
                                {tab.menuItems.map((menu) => (
                                    <LinkPreview
                                        className="text-neutral-700! flex items-center hover:text-[#223454]! gap-2 hover:scale-105 transition"
                                        key={menu.name}
                                        url={menu.href}
                                     isHome={true}>

                                        {menu.logo && <menu.logo />}
                                        {menu.name}

                                    </LinkPreview>
                                ))}
                            </div>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
