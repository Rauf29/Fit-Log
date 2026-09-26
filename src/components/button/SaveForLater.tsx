"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { Exercise } from "@/type/Type";
import { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
interface SaveForLaterProps {
    exercise: Exercise
}

const SaveForLater = ({ exercise }: SaveForLaterProps) => {
    const { saved, setSaved } = useContext(ExercisesContext);
    const handleSaveForLater = () => {
        if (!saved.some((item) => item.id === exercise.id)) {
            setSaved([...saved, exercise]);
            toast.success(`${exercise.name} saved for later`, { autoClose: 2000 });
        } else {
            toast.error(`${exercise.name} already saved for later`, { autoClose: 2000 });
        }
    }
    const isSaved = saved.some((item) => item.id === exercise.id);
    return (
        <button
            onClick={handleSaveForLater}
            className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
            <FaBookmark className="text-lg pb-1" /> {isSaved ? "Already saved" : "Save for later"}
        </button>
    );
};

export default SaveForLater;