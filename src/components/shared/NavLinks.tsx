"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const NavLinks = ({ href, children }: { href: string, children: ReactNode }) => {
    const pathName = usePathname();
    const active = pathName === href;
    return (
        <Link href={href} className={`flex h-[35px] items-center px-4 text-[13px] leading-6 ${active ? "rounded-full bg-[#182400] text-primary" : "text-text"}`}>
            {children}
        </Link>
    );
};

export default NavLinks;