"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { Exercise } from "@/type/Type";
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { toast } from "react-toastify";

const TodayPlan = ({ exercises }: { exercises: Exercise[] }) => {

    const { plan, setPlan } = useContext(ExercisesContext);

    return (

        <div className="mt-5 space-y-4">

            {exercises.map((exercise: Exercise) => (

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

                                <span className="text-primary flex items-center justify-center gap-1">
                                    <MdOutlineAccessTimeFilled className="text-primary mb-1" /> {exercise.duration} min
                                </span>

                                <span className="flex items-center justify-center gap-1">
                                    <SlEnergy className="text-primary mb-1" /> {exercise.caloriesBurned} kcal
                                </span>

                                <span className="text-primary flex items-center justify-center gap-1">
                                    <FaRegStar className="text-primary mb-1" /> {exercise.rating}
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
                                const updatedPlan = plan.filter((item: Exercise) => item.id !== exercise.id);
                                setPlan(updatedPlan);
                                toast.success(`${exercise.name} is done. Good job!`, { autoClose: 2000 });
                            }}
                            className="rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-black cursor-pointer">
                            ✓ Mark as Done
                        </button>

                        <button
                            onClick={() => {
                                const updatedPlan = plan.filter((item: Exercise) => item.id !== exercise.id);
                                setPlan(updatedPlan);
                                toast.error(`${exercise.name} removed from your plan`, { autoClose: 2000 });
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

export default TodayPlan;