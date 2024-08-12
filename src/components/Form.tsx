import React, {useState, useContext} from "react";
import TrackerContext from "../context/stepTracker";
import { FormContext } from "../context/FormData";
import StepperSubmit from "./Stepper/StepperSubmit";



function Form(){
    
    const {tracking} = useContext(TrackerContext);
    const {updateInfo, updatePlan, updateAdds} = useContext(FormContext)

    switch (true) {
        case tracking === 1:
            return <Info/>
    
        case tracking === 2: 
            return <Plan/>
        
        case tracking === 3:
            return <Adds/>

        case tracking === 4:
            return <Summary/>
        
    }
}
const Info = () => {
    return (
        <div>
            <header>
                <h1 className="form-header">Personal Info</h1>
                <p className="form-header-p">Please provide your name, email address, and phone number.</p>
            </header>
            <main>

            </main>
            <footer className="hidden sm:flex bottom-0 h-20 w-full border border-black">
                <StepperSubmit></StepperSubmit>
            </footer>
        </div>
    );
};

const Plan = () => {
    return (
        <div>
            <header>
                <h1 className="form-header">Select your plan</h1>
                <p className="form-header-p">You have an option of monthly or yearly billing.</p>
            </header>

            <footer className="hidden sm:flex">
                <StepperSubmit></StepperSubmit>
            </footer>
        </div>
    );
}

const Adds = () => {
    return (
        <div>
            <header>
                <h1 className="form-header">Pick adds-on</h1>
                <p className="form-header-p">Adds-ons help enhance your gaming experience.</p>
            </header>
        </div>
    );
}

const Summary = () => {
    return (
        <div>
            <header>
                <h1 className="form-header">Finishing up</h1>
                <p className="form-header-p">Double-check everything looks OK before confirming.</p>
            </header>
        </div>
    );
}
export default Form;