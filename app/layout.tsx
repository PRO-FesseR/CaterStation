import type { Metadata } from "next";


import "./globals.css";
import { NavbarMenu} from "@/components/header/navBar/nav-bar-main";
import {lexend} from "@/fonts/googleFonts";


export const metadata: Metadata = {
    title: "Cater Station - Event Catering Platform",
    icons: {
        icon: "/favicon.png", // Path to your favicon
        shortcut: "/favicon.png",
        apple: "/favicon.png", // Optional: for Apple devices
    },
    description: "Discover and Book packages on Cater Station platform from many different vendors. Seamlessly Book Packages, chat with organizers, and Make your Event management experience next-level.",
    keywords: ["events", "Event Package","Catering","Qawali","Decor","Photography","Wedding Venues","Food","event booking", "Cater Station", ""],
    authors: [{ name: "Dawood"}],
    openGraph: {
        title: "Cater Station - Event Catering Platform",
        description: "Discover and Book packages on Cater Station platform from many different vendors. Seamlessly Book Packages, chat with organizers, and Make your Event management experience next-level.",
        type: "website",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-caterstation-url.com",
        siteName: "Cater Station",
        images: [
            {
                url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-caterstation-url.com",
                width: 1200,
                height: 630,
                alt: "Cater Station - Event Ticketing Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cater Station - Event Catering Platform",
        description: "Discover and book Packages to make your events loveable",
        images: ["https://your-caterstation-url.com/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light ">
    <body
        className={`${lexend.className} overflow-x-hidden antialiased`}

    >

    <header className="z-10000 w-screen">

        <NavbarMenu/>
    </header>

    {children}

    </body>

    </html>
  );
}
