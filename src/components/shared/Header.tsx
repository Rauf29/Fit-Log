import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from 'next/link';
import NavPlan from "../button/NavPlan";
import NavSaved from "../button/NavSaved";
import NavLinks from "./NavLinks";


const Header = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#1c1d20] bg-black">
            <div className="container mx-auto grid h-[74px] grid-cols-3 items-center px-4 sm:px-6 lg:px-8">


                <div >
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={Logo} alt="Logo" />
                        <span className="text-[18px] font-bold text-white">
                            FITLOG
                        </span>
                    </Link>


                </div>


                <div className="flex justify-center">
                    <NavLinks href="/">
                        Workouts
                    </NavLinks>

                    <NavLinks href="/my-plan">
                        My Plan
                    </NavLinks>
                </div>


                <div className="flex justify-end gap-5">

                    <div>
                        <NavPlan />
                    </div>

                    <div>
                        <NavSaved />
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Header;