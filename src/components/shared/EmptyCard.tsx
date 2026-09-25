import Link from 'next/link';

const EmptyCard = () => {
    return (
        <div className="mt-5 flex min-h-[350px] items-center justify-center rounded-xl border border-dashed border-[#252a32] bg-[#0f1115] px-5">
            <div className="text-center">

                <h2 className="text-[26px] font-bold uppercase text-white">
                    Nothing Here Yet
                </h2>

                <p className="mt-2 text-[16px] text-secondary">
                    Browse the library and add a lift to get today moving.
                </p>

                <Link
                    href="/"
                    className="mt-5 inline-block rounded-full bg-primary px-5 py-2.5 text-[14px] font-bold text-black"
                >
                    Go to workouts
                </Link>

            </div>
        </div>
    );
};

export default EmptyCard;