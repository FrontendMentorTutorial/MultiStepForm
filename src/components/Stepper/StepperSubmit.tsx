import React, { useContext } from "react"
import TrackerContext from "../../context/StepTracker";


const StepperSubmit: React.FC<{ save: () => void }> = ({ save }) => {
    const { tracking, updateTracker } = useContext(TrackerContext);

    const handleNavigation = (direction: 'back' | 'next') => {
        save();
        updateTracker(tracking + (direction === 'next' ? 1 : -1));
    };

    return (
        <div className="flex align-middle h-full sm:w-full sm:mx-0 mx-5 text-xs ">
            {tracking > 1 && (
                <button 
                    type="button" 
                    className="text-gray-400" 
                    onClick={() => handleNavigation('back')}
                >
                    <span>Go Back</span>
                </button>
            )}
            <div className="flex ml-auto">
                {tracking < 4 ? (
                    <button 
                        type="button" 
                        className="flex justify-center items-center align-middle rounded my-5 px-6 bg-blue-900 text-white" 
                        onClick={() => handleNavigation('next')}
                    >
                        Next Step
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className="flex justify-center items-center align-middle rounded my-5 px-6 bg-indigo-500 text-white" 
                        onClick={() => handleNavigation('next')}
                    >
                        Confirm
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepperSubmit