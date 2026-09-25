import HeroImage from "@/assets/banner.png";
import Image from 'next/image';
import Link from 'next/link';

const TodayPlan = () => {
    return (
        <div className="mt-5 space-y-4">

            <div className="rounded-2xl border border-[#252a32] bg-[#15181f] p-3 sm:flex sm:min-h-[104px] sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                    <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
                        <Image
                            src={HeroImage}
                            alt="Russian Twist"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>

                        <h3 className="text-[18px] font-bold uppercase text-white">
                            Russian Twist
                        </h3>

                        <p className="mt-0.5 text-[15px] text-secondary">
                            Medicine Ball
                        </p>

                        <div className="mt-1.5 flex items-center gap-3 text-[13px] text-secondary">

                            <span className="text-primary">
                                ◷ 8 min
                            </span>

                            <span>
                                ● 70 kcal
                            </span>

                            <span className="text-primary">
                                ☆ 4.1
                            </span>

                        </div>

                    </div>

                </div>


                <div className="mt-3 flex items-center gap-2 sm:mt-0">

                    <Link
                        href="/workouts/russian-twist"
                        className="rounded-full border border-[#343b48] px-4 py-2 text-[13px] text-white"
                    >
                        View Details
                    </Link>

                    <button className="rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-black cursor-pointer">
                        ✓ Mark as Done
                    </button>

                    <button className="px-2 text-[25px] text-red-600 cursor-pointer">
                        ×
                    </button>

                </div>

            </div>

        </div>
    );
};

export default TodayPlan;