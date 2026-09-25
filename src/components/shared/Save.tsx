import { ExercisesContext } from "@/context/ExercisesContext";
import { Exercise } from "@/type/Type";
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from "react";
import { toast } from "react-toastify";

const Save = () => {
    const { saved, setSaved } = useContext(ExercisesContext);

    return (
        <div className="mt-5 space-y-4">
            {saved.map((exercise: Exercise) => (

                <div
                    key={exercise.id}
                    className="rounded-2xl border border-[#252a32] bg-[#15181f] p-3 sm:flex sm:min-h-[104px] sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
                            <Image
                                src={exercise.image}
                                width={100}
                                height={100}
                                alt="Russian Twist"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div>

                            <h3 className="text-[18px] font-bold uppercase text-white">
                                {exercise.name}
                            </h3>

                            <p className="mt-0.5 text-[15px] text-secondary">
                                {exercise.equipment}
                            </p>

                            <div className="mt-1.5 flex items-center gap-3 text-[13px] text-secondary">

                                <span className="text-primary">
                                    ◷ {exercise.duration} min
                                </span>

                                <span>
                                    ● {exercise.caloriesBurned} kcal
                                </span>

                                <span className="text-primary">
                                    ☆ {exercise.rating}
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="mt-3 flex items-center gap-2 sm:mt-0">

                        <Link
                            href={`/exercise/${exercise.id}`}
                            className="rounded-full border border-[#343b48] px-4 py-2 text-[13px] text-white"
                        >
                            View Details
                        </Link>

                        <button
                            onClick={() => {
                                const updatedSaved = saved.filter((item: Exercise) => item.id !== exercise.id);
                                setSaved(updatedSaved);
                                toast.error(`${exercise.name} removed from your saved`, { autoClose: 2000 });
                            }}
                            className="px-2 text-[25px] text-red-600 cursor-pointer">
                            ×
                        </button>

                    </div>

                </div>
            ))}

        </div>
    );
};

export default Save;