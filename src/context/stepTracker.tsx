import React, { createContext, ReactNode, useState } from 'react';

interface TrackerInterface {
    tracking: number;
    updateTracker: (value: number) => void;
}

const TrackerContext = createContext<TrackerInterface>({
    tracking: 1,
    updateTracker: () => {}, // Default to a no-op function
});


export const TrackerProvider: React.FC<{ children: ReactNode}> = ({children}) =>{
    const [tracking, setTrackerValue] = useState<number>(1);

    const updateTracker = (tracker: number) => {
        setTrackerValue(tracker);
    };

    return (
        <TrackerContext.Provider value = {{tracking, updateTracker}}>
            {children}
        </TrackerContext.Provider>
    )

}

export default TrackerContext;