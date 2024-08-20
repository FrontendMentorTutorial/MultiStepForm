import { useContext } from "react";
import TrackerContext from "../../context/StepTracker";



const steps = [
    { number: 1, label: "YOUR INFO" },
    { number: 2, label: "SELECT PLAN" },
    { number: 3, label: "ADD-ONS" },
    { number: 4, label: "SUMMARY" }
]


function StepperButton(){
    
    const { tracking, updateTracker } = useContext(TrackerContext);
    
    // const update = (value: number) => {
    //     return () => {
    //         updateTracker(value)
    //     }
    // }

    return (
        <>
        {steps.map((step) => (
                <li key={step.number} className="flex text-white mx-2 sm:mx-0 sm:my-4">
                    <div>
                        <button type="button" className={tracking == step.number ? "circle-list-item-selected" :"circle-list-item"}>
                            <b>{step.number}</b>
                        </button>
                    </div>
                    <div className='hidden sm:flex flex-col mx-3 items-start align-middle'>
                        <span className='text-[0.75rem] text-neutral-400 font-ubuntu font-extralight'>STEP {step.number}</span>
                        <span className='text-[0.875rem] tracking-widest font-ubuntu font-bold'>{step.label}</span>
                    </div>
                </li>
            ))}
        </>
    )

}

export default StepperButton;