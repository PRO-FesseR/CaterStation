"use client";
import React, { useState } from "react";
import caterStationLogo from '@/public/logo/cater-station-nav-logo.png'
import {  Menu, MenuItem, ProductItem } from "@/components/header/navBar/navBar-menu";
import { cn } from "@/utils/tailwindConfig/utils";
import Image from "next/image";
import {navItems} from "@/components/header/navBar/navBarConfig";
import {LinkPreview} from "@/components/header/navBar/link-Preview/link-preview";
import {InteractiveHoverButton} from "@/components/button/button";
import {Magnetic} from "@/components/animations/Magnetic-motion";
import {SideBar, SidebarDemo} from "@/components/header/navBar/NavBar-Mobile";
import {ReactLenis} from "lenis/react";


// export function NavbarDemo() {
//     return (
//         <div className="relative w-full flex items-center justify-center">
//             <Navbar className="top-2" />
//
//         </div>
//     );
// }

export function NavbarMenu() {
    return (
        <>

        <div className=" w-full flex  border-b-2 border-blue py-3  items-center px-3 lg:px-0 justify-between lg:justify-around">

            <Image src={caterStationLogo} alt="Cater Station Logo"/>
            <Navbar className="top-2 " />
            <div className="flex gap-3">
                <Magnetic>
            <InteractiveHoverButton className="w-[17rem]! lg:block hidden" text="Sign up" />
                </Magnetic>
            </div>
            <SideBar/>
        </div>
        </>
    );
}
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(" top-10  hidden sm:block z-50", className)}
        >
            <Menu setActive={setActive}>
                {navItems.map(tab=>{
                    return <MenuItem key={tab.menuId} setActive={setActive} active={active} item={tab.menuName}>
                        {tab.menuItemsType?

                            <div className="h-[60vh] overflow-y-scroll" data-lenis-prevent>
                                {tab.menuItems.map((menu) => {
                                    const truncatedDescription =
                                        menu.description.length > 100 ? menu.description.substring(0, 100) + " ..." : menu.description;


                                    return <ProductItem key={menu.name}
                                                        title={menu.name}
                                                        href={menu.href}
                                                        src={menu.src}
                                                        description={truncatedDescription}
                                    />
                                })}
                            </div>

                            :
                            <div className="flex flex-col gap-3 text-sm">
                                {tab.menuItems.map((menu) => {
                                    return <LinkPreview className="text-neutral-700! flex items-center  hover:text-[#223454]! gap-2 hover:scale-105  transition  " key={menu.name} url={menu.href}>{menu.logo && <menu.logo/>}{menu.name}</LinkPreview>
                                })
                                }
                            </div>



                        }
                    </MenuItem>
                })}



            </Menu>
        </div>
    );
}
