import React, {useState, useContext} from "react";
import TrackerContext from "../context/StepTracker";
import { FormContext } from "../context/FormData";
import StepperSubmit from "./Stepper/StepperSubmit";
import ArcadeImage from "../assets/images/icon-arcade.svg";
import AdvanceImage from "../assets/images/icon-advanced.svg";
import ProImage from "../assets/images/icon-pro.svg";



function Form(){
    
    const {tracking} = useContext(TrackerContext);
    const {updateInfo, updatePlan, updateAdds} = useContext(FormContext)

    const [isYearly, setIsYearly] = useState(false);
    const handlePeriodChange = (value:boolean) => {
        setIsYearly(value);
    };

    switch (true) {
        case tracking === 1:
            return <Info/>
    
        case tracking === 2: 
            return <Plan handlePeriodChange={handlePeriodChange} isYear={isYearly}/>
        
        case tracking === 3:
            return <Adds/>

        case tracking === 4:
            return <Summary/>
        
    }
}
const Info = () => {
    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Personal Info</h1>
                <p className="form-header-p">Please provide your name, email address, and phone number.</p>
            </header>
            <main className="max-w-96 w-full">
                <section className="my-4">
                    <div className="w-full">
                        <div className="relative w-full h-10">
                            <p className="text-xs text-sky-800 font-medium">Name</p>
                            <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder=" e.g. Stephen King" /> 
                        </div>
                    </div>  
                </section>
                <section className="my-8">
                    <div className="w-full">
                        <div className="relative w-full h-10">
                            <p className="text-xs text-sky-800 font-medium">Email Address</p>
                            <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder=" e.g. stephenking@lorem.com" /> 
                        </div>
                    </div>  
                </section>
                <section className="my-8">
                    <div className="w-full">
                        <div className="relative w-full h-10">
                            <p className="text-xs text-sky-800 font-medium">Phone Number</p>
                            <input
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder=" e.g. +1 234 567 890" /> 
                        </div>
                    </div>  
                </section>
            </main>
            <div className="w-full h-full hidden sm:flex flex-col-reverse">
                <Footer/>
            </div>
        </div>
    );
};

const Plan: React.FC<{ handlePeriodChange: (isYearly: boolean) => void, isYear: boolean }> = ({ handlePeriodChange, isYear })=> {
    
    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Select your plan</h1>
                <p className="form-header-p">You have an option of monthly or yearly billing.</p>
            </header>
            <main className="my-4 max-w-96 w-full">
                <section className="md:flex  grid gap-2">
                    <div className="plan-card sm:col-span-1">
                        <div className="mt-1 md:mb-8">
                            <img src={ArcadeImage}/>
                        </div>
                        <div className="mx-4 p-1 sm:mx-0">
                            <h3 className="text-s font-medium">Arcade</h3>
                            <p className="text-xs text-neutral-400">$9/mo</p>
                        </div>
                    </div>
                    <div className="plan-card sm:col-span-1">
                        <div className="mt-1 md:mb-8">
                            <img src={AdvanceImage}/>
                        </div>
                        <div className="mx-4 p-1 sm:mx-0">
                            <h3 className="text-s font-medium">Advance</h3>
                            <p className="text-xs text-neutral-400">$12/mo</p>
                        </div>
                    </div>
                    <div className="plan-card sm:col-span-2 ">
                        <div className="mt-1 md:mb-8">
                            <img src={ProImage}/>
                        </div>
                        <div className="mx-4 p-1 sm:mx-0">
                            <h3 className="text-s font-medium">Pro</h3>
                            <p className="text-xs text-neutral-400">$15/mo</p>
                        </div>
                    </div>
                </section>
                <Period onPeriodChange={handlePeriodChange} isYear={isYear}/>
            </main>
            <div className="w-full h-full hidden sm:flex flex-col-reverse">
                <Footer/>
            </div>
        </div>
    );
}

const Adds = () => {
    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Pick adds-on</h1>
                <p className="form-header-p">Adds-ons help enhance your gaming experience.</p>
            </header>
            <main className="my-4 max-w-96 w-full">
                <section className="grid gap-2">
                    <div className="adds-card">
                        <AddsCheckbox/>
                        <section>
                            <h3 className="font-medium">Online Service</h3>
                            <p className="text-xs text-neutral-400">Access to multiplayer games</p>
                        </section>
                        <section className="ml-auto mx-3 text-purple-700">
                            <span className="text-xs"> +$1/mo </span>
                        </section>
                    </div>
                    <div className="adds-card">
                        <AddsCheckbox/>
                        <section>
                            <h3 className="font-medium">Large Storage</h3>
                            <p className="text-xs text-neutral-400">Extra 1TB of cloud save</p>
                        </section>
                        <section className="ml-auto mx-3 text-purple-700">
                            <span className="text-xs"> +$2/mo </span>
                        </section>
                    </div>
                    <div className="adds-card">
                        <AddsCheckbox/>
                        <section>
                            <h3 className="font-medium">Customizable Profile</h3>
                            <p className="text-xs text-neutral-400">Custom theme on your profile</p>
                        </section>
                        <section className="ml-auto mx-3 text-purple-700">
                            <span className="text-xs"> +$2/mo </span>
                        </section>
                    </div>
                </section>
            </main>
            <div className="w-full h-full hidden sm:flex flex-col-reverse">
                <Footer/>
            </div>
        </div>
    );
}

const Summary = () => {
    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Finishing up</h1>
                <p className="form-header-p">Double-check everything looks OK before confirming.</p>
            </header>
            <main></main>
            <div className="w-full h-full hidden sm:flex flex-col-reverse">
                <Footer/>
            </div>
        </div>
    );
}

const AddsCheckbox = () => {
    return (
        <label className="relative flex items-center mx-1 p-3 rounded-full cursor-pointer" htmlFor="ripple-off">
            <input id="ripple-off" type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 
                before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-gray-900 " />
            <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
            </span>
        </label>
    )
}

const Period: React.FC<{ onPeriodChange: (isYearly: boolean) => void, isYear: boolean }> = ({ onPeriodChange, isYear }) =>{
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isYearly:boolean = event.target.checked;
        console.log(isYearly)
        onPeriodChange(isYearly)
    };   

    return (
        <section className="bg-blue-50 text-neutral-400 bg-opacity-50 mt-10 flex items-center justify-center h-10 text-xs">
            <p className={`${!isYear ? 'text-cyan-900' : ''}`}>Monthly</p>
            <label className="relative mx-4 inline-flex cursor-pointer items-center">
                <input id="switch" 
                    type="checkbox" 
                    className="peer sr-only" 
                    defaultChecked={isYear}
                    onChange={handleCheckboxChange} 
                />
                <label className="hidden"></label>
                <div className="slide-toggle peer"></div>
            </label>
            <p className={`${isYear ? 'text-cyan-900' : ''}`}>Yearly</p>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="hidden sm:flex h-20 max-w-96 w-full">
            <StepperSubmit></StepperSubmit>
        </footer>
    )
}
export default Form;