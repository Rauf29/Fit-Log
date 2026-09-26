"use client";
import EmptyCard from "@/components/shared/EmptyCard";
import Save from "@/components/shared/Save";
import TodayPlan from "@/components/shared/TodayPlan";
import { ExercisesContext } from "@/context/ExercisesContext";
import { Exercise } from "@/type/Type";
import { useContext, useState } from "react";


const myPlan = () => {
    const { plan, saved, sortBy, setSortBy } = useContext(ExercisesContext);
    const [tabOptions, setTabOptions] = useState("plan");

    const sortExercise = (Exercises: Exercise[]) => {
        const sortedExercises = [...Exercises];
        if (sortBy === "duration") {
            sortedExercises.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === "calories") {
            sortedExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === "rating") {
            sortedExercises.sort((a, b) => b.rating - a.rating);
        }
        return sortedExercises;
    }

    const sortedPlan = sortExercise(plan);
    const sortedSaved = sortExercise(saved);

    return (
        <section className="container mx-auto px-4 py-10 pt-14 pb-14 sm:px-6 lg:px-8">


            <div>
                <h1 className="text-5xl font-extrabold uppercase leading-none text-white ">
                    My Plan
                </h1>

                <p className="mt-2 text-[15px] text-secondary">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            <div className="mt-8 grid rounded-2xl border border-[#252a32] bg-[#15181f] grid-cols-3 p-[10px]">

                <div className="px-6 py-5">
                    <p className="text-[13px] text-secondary">
                        Exercises
                    </p>

                    <p className="mt-1 text-[48px] font-bold leading-none text-primary">
                        {(tabOptions === "plan") ? plan.length : saved.length}
                    </p>
                </div>

                <div className="border-t border-[#252a32] px-6 py-5 sm:border-l sm:border-t-0">
                    <p className="text-[13px] text-secondary">
                        Minutes
                    </p>

                    <p className="mt-1 text-[48px] font-bold leading-none text-white">
                        {(tabOptions === "plan") ? plan.reduce((acc, curr) => acc + curr.duration, 0) : saved.reduce((acc, curr) => acc + curr.duration, 0)}
                    </p>
                </div>

                <div className="border-t border-[#252a32] px-6 py-5 sm:border-l sm:border-t-0">
                    <p className="text-[13px] text-secondary">
                        Calories
                    </p>

                    <p className="mt-1 text-[48px] font-bold leading-none text-white">
                        {(tabOptions === "plan") ? plan.reduce((acc, curr) => acc + curr.caloriesBurned, 0) : saved.reduce((acc, curr) => acc + curr.caloriesBurned, 0)}
                    </p>
                </div>

            </div>


            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex rounded-lg border border-[#252a32] bg-[#15181f] p-0.5">

                    <button
                        onClick={() => setTabOptions("plan")}
                        className={`cursor-pointer px-4 py-2 text-[13px] ${tabOptions === "plan" ? "rounded-md bg-[#222630] text-white font-bold" : "text-text"}`}>
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setTabOptions("saved")}
                        className={`cursor-pointer px-4 py-2 text-[13px] ${tabOptions === "saved" ? "rounded-md bg-[#222630] text-white font-bold" : "text-text"}`}>
                        Saved
                    </button>

                </div>


                <div className="flex items-center gap-2">

                    <span className="text-[15px] text-secondary">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-3 cursor-pointer rounded-lg border border-[#252a32] bg-[#15181f] px-3 text-[13px] text-white outline-none">
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>

            </div>



            {tabOptions === "plan" ? (
                plan.length > 0 ? <TodayPlan exercises={sortedPlan} /> : <EmptyCard />
            ) : (
                saved.length > 0 ? <Save exercises={sortedSaved} /> : <EmptyCard />
            )}



        </section>
    );
};

export default myPlan;