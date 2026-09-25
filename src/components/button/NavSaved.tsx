"use client";
import { ExercisesContext } from '@/context/ExercisesContext';
import Link from 'next/link';
import { useContext } from 'react';

const NavSaved = () => {
    const { saved } = useContext(ExercisesContext);
    return (
        <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[13px] text-[#b0b1b5]">
                Saved
            </span>
            <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-[#303136] text-[11px] leading-0 text-secondary font-bold">
                {saved.length}
            </span>
        </Link>
    );
};

export default NavSaved;