"use client";

import Logo from "@/assets/logo.png";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

import NavPlan from "../button/NavPlan";
import NavSaved from "../button/NavSaved";
import NavLinks from "./NavLinks";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#1c1d20] bg-black">

            <div className="container mx-auto flex h-[74px] items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:px-8">

                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={Logo}
                            alt="Logo"
                        />

                        <span className="text-[18px] font-bold text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>


                <div className="hidden justify-center lg:flex">

                    <NavLinks href="/">
                        Workouts
                    </NavLinks>

                    <NavLinks href="/my-plan">
                        My Plan
                    </NavLinks>

                </div>


                <div className="hidden justify-end gap-5 lg:flex">

                    <NavPlan />

                    <NavSaved />

                </div>


                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center text-white lg:hidden"
                >
                    {menuOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>

            </div>


            {menuOpen && (
                <div className="border-t border-[#1c1d20] px-4 py-4 lg:hidden">

                    <div className="flex flex-col gap-1">

                        <NavLinks href="/">
                            Workouts
                        </NavLinks>

                        <NavLinks href="/my-plan">
                            My Plan
                        </NavLinks>

                    </div>

                    <div className="mt-4 flex items-center gap-5 border-t border-[#1c1d20] pt-4">

                        <NavPlan />

                        <NavSaved />

                    </div>

                </div>
            )}

        </nav>
    );
};

export default Header;