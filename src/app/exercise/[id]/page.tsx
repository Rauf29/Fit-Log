import AddToDayPlan from "@/components/button/AddToDayPlan";
import SaveForLater from "@/components/button/SaveForLater";
import { Exercise } from "@/type/Type";
import Image from "next/image";

interface ExerciseDetails {
    params: Promise<{
        id: string;
    }>;
}

const getExerciseDetails = async (id: string) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data;
}

const page = async ({ params }: ExerciseDetails) => {
    const { id } = await params;
    const exercise: Exercise | null = await getExerciseDetails(id);
    if (!exercise) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-white">
                    Exercise Not Found
                </h1>

                <p className="mt-2 text-secondary">
                    The exercise you are looking for does not exist.
                </p>
            </div>
        )
    }
    return (
        <main className="container mx-auto px-4 py-9 pt-14 pb-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">

                <div>
                    <Image
                        src={exercise.image}
                        width={500}
                        height={500}
                        alt="Barbell Bench Press"
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>

                <div className="flex flex-col">

                    <h1 className="text-4xl font-bold text-white sm:text-5xl uppercase">
                        {exercise.name}
                    </h1>

                    <p className="mt-2 max-w-2xl text-base leading-6 text-text">
                        {exercise.description}
                    </p>


                    <div className="mt-3 flex gap-2">

                        {exercise.muscleGroups.map((group: string) => {
                            return (
                                <span
                                    key={group}
                                    className="rounded-full bg-primary px-3 py-1 text-[13px] font-medium text-black">
                                    {group}
                                </span>
                            )
                        })}

                    </div>

                    <div className="mt-5 overflow-hidden rounded-xl border border-[#252a32] bg-[#15181f]">

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                EQUIPMENT
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                DIFFICULTY
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                SETS
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                REPS
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                DURATION
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                CALORIES
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[13px] font-semibold text-secondary">
                                RATING
                            </span>
                            <span className="text-[13px] text-secondary">
                                {exercise.rating}
                            </span>
                        </div>

                    </div>


                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-3 space-y-3 text-base leading-5 text-text">
                            {exercise.instructions.map((instruction: string, ind: number) => {
                                return (
                                    <li key={ind}>
                                        {`${ind + 1}. ${instruction}`}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <AddToDayPlan exercise={exercise} />

                        <SaveForLater exercise={exercise} />
                    </div>

                </div>
            </div>
        </main>
    );
};

export default page;