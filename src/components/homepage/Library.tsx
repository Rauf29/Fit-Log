import { Exercise } from "@/type/Type";
import Image from 'next/image';
import Link from 'next/link';

const getExercises = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
};

const Library = async () => {
    const exercises = await getExercises();
    return (
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
                {exercises.map((exercise: Exercise) => {
                    return (

                        <Link
                            key={exercise.id}
                            href={`/exercise/${exercise.id}`}
                            className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c] transition-all duration-[400ms] hover:border-primary"
                        >
                            <div className="h-[250px] w-full overflow-hidden">
                                <Image
                                    src={exercise.image}
                                    width={500}
                                    height={500}
                                    alt="Barbell Bench Press"
                                    className="h-full w-full object-cover object-top transition-all duration-[400ms] group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <div className="mb-4 flex gap-2">
                                    {exercise.muscleGroups.map((muscleGroup) => {
                                        return (
                                            <span
                                                key={muscleGroup}
                                                className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase text-black"
                                            >
                                                {muscleGroup}
                                            </span>
                                        );
                                    })}
                                </div>

                                <h3 className="text-[18px] font-bold uppercase text-white">
                                    {exercise.name}
                                </h3>

                                <p className="mt-2 text-[13px] text-secondary">
                                    {exercise.equipment}
                                </p>

                                <div className="my-4 border-t border-[#25282e]" />

                                <div className="flex items-center gap-4 text-[13px] text-secondary">
                                    <span>◷ {exercise.duration} min</span>
                                    <span>● {exercise.caloriesBurned} kcal</span>
                                    <span>☆ {exercise.rating}</span>
                                </div>
                            </div>
                        </Link>

                    )
                })}

            </div>
        </section>
    );
};

export default Library;