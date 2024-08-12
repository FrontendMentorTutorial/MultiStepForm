import React, { useContext } from "react"
import TrackerContext from "../../context/stepTracker";

const StepperSubmit: React.FC = () => {
    const { tracking, updateTracker } = useContext(TrackerContext);

    const handleGoBack = () => {
        // Logic for "Go Back" (e.g., decrement the tracker value)
        updateTracker(tracking - 1);
    };

    return (
        <div className="flex align-middle h-full text-xs mx-5 mr-auto">
            {tracking !== 1 && tracking <= 4 && (
                <button type="button" className="text-gray-400" onClick={handleGoBack}>
                    <span>Go Back</span>
                </button>  
            )}
            <StepButton />
        </div>
    );
}

const StepButton: React.FC = () => {
    const { tracking, updateTracker } = useContext(TrackerContext);

    const handleNextStep = () => {
        // Logic for "Next Step" (e.g., increment the tracker value)
        updateTracker(tracking + 1);
    };

    switch (true) {
        case tracking < 4:
            return (
                <div className="flex ml-auto">
                    <button type="button" className="flex justify-center items-center align-middle rounded px-4 m-5 bg-blue-900 text-white" onClick={handleNextStep}>
                        Next Step
                    </button>
                </div>
            )
        
        case tracking == 4: 
            return (
                <div className="flex ml-auto">
                    <button type="button" className="flex justify-center items-center align-middle rounded px-4 m-5 bg-blue-900 text-white" onClick={handleNextStep}>
                        Confirm
                    </button>
                </div>
            )
    
        default:
            break;
    }

}

export default StepperSubmit