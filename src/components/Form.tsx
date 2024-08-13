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
        <div className="flex flex-col w-full items-start xs:items-center sm:items-start">
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
            <Footer/>
            </main>
        </div>
    );
};

const Plan = () => {
    return (
        <div className="flex flex-col w-full items-start xs:items-center sm:items-start">
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
                <section className="bg-blue-50 bg-opacity-50 mt-10 flex items-center justify-center h-10">
                    <label className="relative inline-flex cursor-pointer items-center">
                        <input id="switch" type="checkbox" className="peer sr-only" />
                        <label className="hidden"></label>
                        <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                    </label>
                </section>
            <Footer/> 
            </main>
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

            <Footer/>
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
            <Footer/>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="hidden sm:flex bottom-0 h-20 ">
            <StepperSubmit></StepperSubmit>
        </footer>
    )
}
export default Form;