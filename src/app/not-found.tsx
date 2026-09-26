import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex w-full flex-1 items-center justify-center">
            <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
                <div className="mx-auto flex min-h-[60vh] w-full max-w-[640px] items-center justify-center rounded-xl border border-dashed border-[#252a32] bg-[#0f1115] px-6 py-16">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold uppercase leading-none text-white">
                            404 — Nothing here
                        </h1>

                        <p className="mt-2 text-[16px] text-secondary">
                            Could not find requested resource. Browse the library and add
                            a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-5 inline-block rounded-full bg-primary px-5 py-2.5 text-[14px] font-bold text-black"
                        >
                            Go to workouts
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}