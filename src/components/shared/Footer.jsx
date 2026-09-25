import Logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-12 w-full border-t border-[#1c1d20]">
            <div className="container mx-auto flex min-h-[88px] flex-col items-center justify-center gap-3 px-4 py-5 text-center sm:flex-row sm:justify-between sm:px-6 sm:py-0 sm:text-left lg:px-8">
                <div className="flex items-center gap-2">
                    <Image src={Logo} alt="Logo" />

                    <span className="text-[16px] font-bold text-white">
                        FITLOG
                    </span>
                </div>

                <p className="text-[13px] leading-5 text-secondary ">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;