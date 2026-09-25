import { Exercise } from "@/type/Type";
import { CiCalendarDate } from "react-icons/ci";
interface AddtoDayPlanProps {
    exercise: Exercise
}
const AddToDayPlan = ({ exercise }: AddtoDayPlanProps) => {
    return (
        <button className="cursor-pointer rounded-md border border-transparent bg-primary px-5 py-2.5 text-[12px] leading-[20px] font-bold uppercase text-black transition-all duration-400 ease-in-out hover:border-primary hover:bg-transparent hover:text-white flex items-center justify-center gap-1">
            <CiCalendarDate className="text-lg pb-1" /> Add to today&nbsp; plan
        </button>
    );
};

export default AddToDayPlan;