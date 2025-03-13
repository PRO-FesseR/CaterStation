"use client";
import React, { useState } from "react";

import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import LogoImage from '@/public/logo/cater-station-nav-logo.png'
import Image from "next/image";
import { cn } from "@/utils/tailwindConfig/utils";
import {Sidebar, SidebarBody, SidebarLink} from "@/components/header/navBar/navBar-menu";
import {navItems} from "@/components/header/navBar/navBarConfig";
import {InteractiveHoverButton} from "@/components/button/button";
import {Magnetic} from "@/components/animations/Magnetic-motion";

import { LoadingCarousel } from "../../body/carousel/Carousel-cult"


export function SideBar(){

    const [open, setOpen] = useState(false);

    return(
        <div className=" sm:hidden block">
        <Sidebar  open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {open ? <Logo/> : <LogoIcon/>}
                    <div className="mt-8 flex flex-col gap-2">
                        {navItems.map((menuItem, idx) => {
                            if (menuItem.menuId !== 2) {
                                return <SidebarLink key={idx} menuItem={menuItem.menuItems}/>
                            } else {
                                return ''
                            }
                        })}
                    </div>
                    {/*<div className="mt-8 flex flex-col gap-2">*/}
                    {/*    {links.map((link, idx) => (*/}
                    {/*        <SidebarLink key={idx} link={link}/>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
                <div className="w-full">
                        <LoadingCarousel
                            aspectRatio="wide"
                            backgroundTips={true}
                            backgroundGradient={true}
                            showNavigation={true}
                            showProgress={true}
                            promoItem={navItems[1].menuItems}
                        />
                </div>
                <Magnetic>
                    <InteractiveHoverButton className="w-full! " text="Sign up"/>
                </Magnetic>
                {/*<SidebarLink*/}
                {/*    link={{*/}
                {/*        label: "Manu Arora",*/}
                {/*        href: "#",*/}
                {/*        icon: (*/}
                {/*            <Image*/}
                {/*                src="https://assets.aceternity.com/manu.png"*/}
                {/*                className="h-7 w-7 shrink-0 rounded-full"*/}
                {/*                width={50}*/}
                {/*                height={50}*/}
                {/*                alt="Avatar"*/}
                {/*            />*/}
                {/*        ),*/}
                {/*    }}*/}
                {/*/>*/}
            </SidebarBody>
        </Sidebar>
        </div>
    )

}


export function SidebarDemo() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0"/>
            ),
        },
        {
            label: "Profile",
            href: "#",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md lg:hidden fixed top-0 flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-[60vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <Image
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 contrast-0 relative z-20"
        >
            <Image className="w-[6rem]" src={LogoImage} alt="logo"/>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
