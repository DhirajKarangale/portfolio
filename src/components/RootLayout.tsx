import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import ScrollToTop from "../helper/ScrollToTop.tsx";
import Navbar from "./Navbar";
import "../css/card.css";
import "../css/globals.css";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            <ToastContainer />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default RootLayout;