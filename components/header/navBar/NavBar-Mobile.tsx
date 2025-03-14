"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogoImage from '@/public/logo/cater-station-nav-logo.png'
import Image from "next/image";
import {Sidebar, SidebarBody, SidebarLink} from "@/components/header/navBar/navBar-menu";
import {navItems} from "@/components/config/navBarConfig";
import {InteractiveHoverButton} from "@/components/Static-components/button/button";
import {Magnetic} from "@/components/animations/Magnetic-motion";

import { LoadingCarousel } from "@/components/animations/carousel/Carousel-cult"


export function SideBar(){

    const [open, setOpen] = useState(false);

    return(
        <div className=" sm:hidden block">
        <Sidebar  open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col   overflow-x-hidden">
                    {open ? <Logo/> : <LogoIcon/>}
                    <div className=" grid grid-cols-2 gap-4 mt-7">
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

                <div className="w-full  ">
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

