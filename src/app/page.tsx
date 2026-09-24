import HeroImage from "@/assets/banner.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#1c1d20]">
        <div className="container mx-auto grid h-[74px] grid-cols-3 items-center px-4 sm:px-6 lg:px-8">


          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>

            <span className="text-[18px] font-bold text-white">
              FITLOG
            </span>
          </div>


          <div className="flex justify-center">
            <Link
              href="/"
              className="flex h-[35px] items-center rounded-full bg-[#182400] px-4 text-[14px] leading-6 text-primary"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="flex h-[35px] items-center px-4 text-[13px] leading-6 text-text"
            >
              My Plan
            </Link>
          </div>


          <div className="flex justify-end gap-5">

            <div className="flex items-center gap-2">
              <span className="text-[13px] text-secondary">
                Plan
              </span>

              <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-[11px] leading-0 text-black">
                0
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#b0b1b5]">
                Saved
              </span>

              <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-[#303136] text-[11px] leading-0 text-secondary">
                0
              </span>
            </div>

          </div>

        </div>
      </nav>

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
                className="mt-6 cursor-pointer rounded-md border border-transparent bg-primary px-5 py-3 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white"
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


    </>
  );
}