import { Exercise } from "@/type/Type";
import { FaBookmark } from "react-icons/fa";
interface SaveForLaterProps {
    exercise: Exercise
}
const SaveForLater = ({ exercise }: SaveForLaterProps) => {
    return (
        <button className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
            <FaBookmark className="text-lg pb-1" /> Save for later
        </button>
    );
};

export default SaveForLater;