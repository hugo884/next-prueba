import { FC, PropsWithChildren } from "react";
import "@/app/ui/globals.css";
import { roboto } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Hugo Dashboard",
        default: "Hugo  Dev"
    },
    description: "Tutorial del Next js"
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html>
            <body className={`${roboto.className} antialiased`}>{children}</body>
        </html>
    );
};

export default RootLayout;