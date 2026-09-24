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

      <section className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex min-h-[380px]">

        </div>
      </section>
    </>
  );
}