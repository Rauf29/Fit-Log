import HeroImage from "@/assets/banner.png";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const page = () => {
    return (
        <>
            <main className="container mx-auto px-4 py-9 pt-14 pb-14 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">


                    <div>
                        <Image
                            src={HeroImage}
                            alt="Barbell Bench Press"
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="flex flex-col">

                        <h1 className="text-4xl font-bold text-white sm:text-5xl uppercase">
                            BARBELL BENCH PRESS
                        </h1>

                        <p className="mt-2 max-w-2xl text-base leading-6 text-text">
                            A compound press that builds chest thickness, triceps, and pressing
                            power from a stable bench.
                        </p>


                        <div className="mt-3 flex gap-2">
                            <span className="rounded-full bg-primary px-3 py-1 text-[13px] font-medium text-black">
                                Chest
                            </span>

                            <span className="rounded-full bg-primary px-3 py-1 text-[13px] font-medium text-black">
                                Arms
                            </span>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-xl border border-[#252a32] bg-[#15181f]">

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    EQUIPMENT
                                </span>
                                <span className="text-[13px] text-secondary">
                                    Barbell, Bench
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    DIFFICULTY
                                </span>
                                <span className="text-[13px] text-secondary">
                                    Intermediate
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    SETS
                                </span>
                                <span className="text-[13px] text-secondary">
                                    4
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    REPS
                                </span>
                                <span className="text-[13px] text-secondary">
                                    6-8
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    DURATION
                                </span>
                                <span className="text-[13px] text-secondary">
                                    25 min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    CALORIES
                                </span>
                                <span className="text-[13px] text-secondary">
                                    180 kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[13px] font-semibold text-secondary">
                                    RATING
                                </span>
                                <span className="text-[13px] text-secondary">
                                    4.8
                                </span>
                            </div>

                        </div>


                        <div className="mt-6">
                            <h2 className="text-xl font-bold text-white">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-3 space-y-3 text-base leading-5 text-text">
                                <li>
                                    1. &nbsp; Lie on the bench with eyes under the bar and feet
                                    planted.
                                </li>

                                <li>
                                    2. &nbsp; Unrack with locked elbows and lower the bar to
                                    mid-chest.
                                </li>

                                <li>
                                    3. &nbsp; Press up in a slight arc until elbows lock without
                                    bouncing.
                                </li>

                                <li>
                                    4. &nbsp; Keep shoulder blades pinched and a natural arch in
                                    the back.
                                </li>
                            </ol>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
                                <CiCalendarDate className="text-lg pb-1" /> Add to today&nbsp; plan
                            </button>

                            <button className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
                                <FaBookmark className="text-lg pb-1" /> Save for later
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default page;