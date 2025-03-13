"use client";
import React, { useState } from "react";
import caterStationLogo from '@/public/logo/cater-station-nav-logo.png'
import {  Menu, MenuItem, ProductItem } from "@/components/header/navBar/navBar-menu";
import { cn } from "@/utils/tailwindConfig/utils";
import Image from "next/image";
import {navItems} from "@/components/header/navBar/navBarConfig";
import {LinkPreview} from "@/components/header/navBar/link-Preview/link-preview";
import {InteractiveHoverButton} from "@/components/button/button";


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

        <div className=" w-full flex   py-6 items-center justify-around">
            <Image src={caterStationLogo} alt="Cater Station Logo"/>
            <Navbar className="top-2 " />
            <div className="flex gap-3">
            <InteractiveHoverButton className="w-[17rem]!" text="Sign up" />
            </div>

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
                        {tab.menuItemsType? tab.menuItems.map((menu)=>{
                                const truncatedDescription =
                                    menu.description.length > 100 ? menu.description.substring(0, 100) + " ..." : menu.description;


                                return <ProductItem key={menu.name}
                                title={menu.name}
                                href={menu.href}
                                src={menu.src}
                                description={truncatedDescription}
                            />
                        })

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
