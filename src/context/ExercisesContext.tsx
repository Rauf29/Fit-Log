"use client"
import { Exercise } from '@/type/Type';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IExercisesContext {
    plan: Exercise[],
    setPlan: Dispatch<SetStateAction<Exercise[]>>,
    saved: Exercise[],
    setSaved: Dispatch<SetStateAction<Exercise[]>>
}

export const ExercisesContext = createContext<IExercisesContext>({
    plan: [],
    setPlan: () => { },
    saved: [],
    setSaved: () => { }
})

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Exercise[]>([]);
    const [saved, setSaved] = useState<Exercise[]>([]);
    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    return (
        <div>
            <ExercisesContext.Provider value={sharedData}>{children}</ExercisesContext.Provider>
        </div>
    );
};

export default ExercisesProvider;