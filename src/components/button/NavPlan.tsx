"use client";
import { ExercisesContext } from '@/context/ExercisesContext';
import Link from 'next/link';
import { useContext } from 'react';

const NavPlan = () => {
    const { plan } = useContext(ExercisesContext);
    return (
        <Link className="flex items-center gap-2" href="/my-plan">
            <span className="text-[13px] text-secondary">
                Plan
            </span>

            <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-[11px] leading-0 text-black font-bold">
                {plan.length}
            </span>
        </Link>
    );
};

export default NavPlan;