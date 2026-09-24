import HeroImage from "@/assets/banner.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#1c1d20] bg-black">
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

      <section className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-[36px] font-extrabold uppercase leading-none text-white">
            The Library
          </h2>

          <p className="mt-2 text-[16px] text-secondary">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

          <Link
            href="/workouts/barbell-bench-press"
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={HeroImage}
                alt="Barbell Bench Press"
                className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  CHEST
                </span>

                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-black uppercase">
                  ARMS
                </span>
              </div>

              <h3 className="text-[18px] font-bold uppercase text-white">
                Barbell Bench Press
              </h3>

              <p className="mt-2 text-[13px] text-secondary">
                Barbell, Bench
              </p>

              <div className="my-4 border-t border-[#25282e]" />

              <div className="flex items-center gap-4 text-[13px] text-secondary">
                <span>◷ 25 min</span>
                <span>● 180 kcal</span>
                <span>☆ 4.8</span>
              </div>
            </div>
          </Link>

        </div>
      </section>

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
    </>
  );
}