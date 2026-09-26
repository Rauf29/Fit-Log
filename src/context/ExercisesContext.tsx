"use client";

import { Exercise } from "@/type/Type";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";

interface IExercisesContext {
    plan: Exercise[];
    setPlan: Dispatch<SetStateAction<Exercise[]>>;
    saved: Exercise[];
    setSaved: Dispatch<SetStateAction<Exercise[]>>;
    sortBy: string;
    setSortBy: Dispatch<SetStateAction<string>>;
}

export const ExercisesContext = createContext<IExercisesContext>({
    plan: [],
    setPlan: () => { },
    saved: [],
    setSaved: () => { },
    sortBy: "",
    setSortBy: () => { },
});

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Exercise[]>([]);
    const [saved, setSaved] = useState<Exercise[]>([]);
    const [sortBy, setSortBy] = useState<string>("duration");

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [plan, saved, isLoaded]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved,
        sortBy,
        setSortBy,
    };

    return (
        <ExercisesContext.Provider value={sharedData}>
            {children}
        </ExercisesContext.Provider>
    );
};

export default ExercisesProvider;