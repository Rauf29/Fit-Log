import HeroImage from "@/assets/banner.png";
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
    return (
        <section className="container mx-auto mt-12 mb-12 px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex min-h-[380px] items-center justify-between rounded-2xl border border-[#25282e] bg-[#15171c] px-6 py-10 sm:px-10 lg:px-14">

                <div className=" space-y-2">
                    <p className="mb-5 text-[13px] font-bold uppercase text-primary">
                        Workout Library
                    </p>

                    <h1 className=" text-[40px] font-extrabold uppercase leading-12 text-white sm:text-[50px] lg:text-[56px]">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    <p className="mt-5 max-w-[500px] leading-5 text-secondary text-[16px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <Link href="/">
                        <button
                            className="mt-6 cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white"
                        >
                            Browse Workouts
                        </button>
                    </Link>
                </div>

                <div className="hidden md:block md:w-[40%] lg:w-[38%]">
                    <Image
                        src={HeroImage}
                        alt="Workout illustration"
                        className="h-auto w-full object-contain"
                    />
                </div>

            </div>

        </section>
    );
};

export default Hero;