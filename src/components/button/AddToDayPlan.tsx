"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { Exercise } from "@/type/Type";
import { useContext } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { toast } from "react-toastify";
interface AddtoDayPlanProps {
    exercise: Exercise
}
const AddToDayPlan = ({ exercise }: AddtoDayPlanProps) => {
    const { plan, setPlan } = useContext(ExercisesContext);
    const handleAddToDayPlan = () => {
        if (!plan.some((item) => item.id === exercise.id)) {
            setPlan([...plan, exercise]);
            toast.success(`${exercise.name} added to your plan`, { autoClose: 2000 });
        } else {
            toast.error(`${exercise.name} already added to your plan`, { autoClose: 2000 });
        }

    }
    const isSetToPlan = plan.some((item) => item.id === exercise.id);
    return (
        <button
            onClick={handleAddToDayPlan}
            className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
            <CiCalendarDate className="text-lg pb-1" /> {isSetToPlan ? "Already added" : "Add to today's plan"}
        </button>
    );
};

export default AddToDayPlan;