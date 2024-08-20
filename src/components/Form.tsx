import React, {useState, useContext} from "react";
import TrackerContext from "../context/StepTracker";
import { FormContext } from "../context/FormData";
import StepperSubmit from "./Stepper/StepperSubmit";
import ArcadeImage from "../assets/images/icon-arcade.svg";
import AdvanceImage from "../assets/images/icon-advanced.svg";
import ProImage from "../assets/images/icon-pro.svg";
import AppreciationImage from "../assets/images/icon-thank-you.svg";
import {Prices} from "../assets/data/Data.json";

function Form(){
    
    const {tracking} = useContext(TrackerContext);
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
            return <Adds isYear = {isYearly}/>

        case tracking === 4:
            return <Summary handlePeriodChange={handlePeriodChange} isYear={isYearly}/>
        
        default:
            return <Compliment/>;
    }
}
const Info = () => {
    const {getInfo, updateInfo} = useContext(FormContext);
    const [name, setName] = useState(getInfo().name);
    const [email, setEmail] = useState(getInfo().email);
    const [phone, setPhone] = useState(getInfo().phone);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const save = () => {
        updateInfo(name, email, phone);
    }

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
                            value={name}
                            onChange={handleNameChange}
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
                            value={email}
                            onChange={handleEmailChange}
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
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder=" e.g. +1 234 567 890" /> 
                        </div>
                    </div>  
                </section>
            </main>
            <div className="w-full h-full flex flex-col-reverse">
                <Footer save={save}/>
            </div>
        </div>
    );
};

const Plan: React.FC<{ handlePeriodChange: (isYearly: boolean) => void, isYear: boolean }> = ({ handlePeriodChange, isYear })=> {

    const price = Prices.Plan;
    const {getPlan, updatePlan} = useContext(FormContext);
    const [plan, setPlan] = useState(getPlan().type);
    const handlePlanChange = (planType: string) => {
        setPlan(planType)
        updatePlan(planType)
    };

    const PlanComponent: React.FC<{planType: 'Arcade' | 'Advance' | 'Pro', planImgSrc: string}> = ({planType, planImgSrc}) => {

        const planPrices = price[planType];
        const className = planType === 'Pro' ? 'plan-card sm:col-span-2' : 'plan-card sm:col-span-1';
        const planImage = 
        planType === 'Arcade' ? ArcadeImage :
        planType === 'Advance' ? AdvanceImage : ProImage;

        return (
            <div 
            className={plan === planType ? `${className} selected`: className}
            onClick={() => handlePlanChange(planType)}
            >
                <div className="mt-1 h-10 md:mb-8">
                    <img 
                        src={planImgSrc} 
                    />
                </div>
                <div className="mx-4 p-1 sm:mx-0">
                    <h3 className="text-s font-medium">{planType}</h3>
                    <p className="text-xs text-neutral-400">
                        {isYear ? `$${planPrices.yearly}/yr` : `$${planPrices.monthly}/mo`}
                    </p>
                    {isYear ? 
                    (
                    <p className="mt-2 text-xs text-slate-800">
                        2 months free
                    </p>
                    ) : ''}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Select your plan</h1>
                <p className="form-header-p">You have an option of monthly or yearly billing.</p>
            </header>
            <main className="my-4 max-w-96 w-full">
                <section className="md:flex grid gap-2">

                    <PlanComponent planType="Arcade" planImgSrc={ArcadeImage}/>
                    <PlanComponent planType="Advance" planImgSrc={AdvanceImage}/>
                    <PlanComponent planType="Pro" planImgSrc={ProImage}/>

                </section>
                <Period onPeriodChange={handlePeriodChange} isYear={isYear}/>
            </main>
            <div className="w-full h-full relative flex flex-col-reverse">
                <Footer save={() => {}}/>
            </div>
        </div>
    );
}

const Adds: React.FC<{isYear: boolean}> = ({isYear}) => {

    const price = Prices.Adds
    const {getAdds, updateAdds} = useContext(FormContext);
    const [adds, setAdds] =  useState<{ type: string }[]>(getAdds().adds || []);

    const handleAddsChange = (AddsType: string) => {
        setAdds(prevAdds => {
            const exists = prevAdds.find(add => add.type === AddsType);
    
            if (exists) {
                // Remove the item if it exists
                return prevAdds.filter(add => add.type !== AddsType);
            } else {
                // Add the item if it doesn't exist
                return [...prevAdds, { type: AddsType }];
            }
        });
    }

    const AddsComponent: React.FC<{addsType: 'Online Service' | 'Large Storage' | 'Customizable Profile'}> = ({addsType}) => {
        const addsDetails = price[addsType];
        const exist = adds.find(key => key.type === addsType)
        const className = exist ? "adds-card selected" : "adds-card";
        return (
            <div className={className} onClick={() => handleAddsChange(addsType)}>
                <AddsCheckbox checked={exist ? true : false}/>
                <section >
                    <h3 className="font-medium">{addsType}</h3>
                    <p className="text-xs text-neutral-400">{addsDetails.description}</p>
                </section>
                <section className="ml-auto mx-3 text-indigo-600">
                    <span className="text-xs"> +${isYear ? addsDetails.yearly+'/yr' : addsDetails.monthly+'/mo'}</span>
                </section>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Pick adds-on</h1>
                <p className="form-header-p">Adds-ons help enhance your gaming experience.</p>
            </header>
            <main className="my-4 max-w-96 w-full">
                <section className="grid gap-2">
                    <AddsComponent addsType="Online Service"/>
                    <AddsComponent addsType="Large Storage"/>
                    <AddsComponent addsType="Customizable Profile"/>
                </section>
            </main>
            <div className="w-full h-full relative flex flex-col-reverse">
                <Footer save={() => {updateAdds(adds)}}/>
            </div>
        </div>
    );
}

const Summary: React.FC<{ handlePeriodChange: (isYearly: boolean) => void, isYear: boolean }> = ({ handlePeriodChange, isYear }) => {

    const {getPlan, getAdds, getTotal} = useContext(FormContext);
    const planPrice = Prices.Plan[getPlan().type as 'Arcade' | 'Advance' | 'Pro']
    
    return (
        <div className="flex flex-col w-full h-full items-start xs:items-center sm:items-start">
            <header>
                <h1 className="form-header">Finishing up</h1>
                <p className="form-header-p">Double-check everything looks OK before confirming.</p>
            </header>
            <main className="my-4 max-w-96 w-full">
                <section className="w-full sm:px-6 px-4 pt-4 rounded-lg bg-indigo-50 bg-opacity-40 divide-solid divide-black divide-opacity-10 divide-y">
                    <div className="inline-flex items-center md:pb-4 pb-2 w-full h-full">
                        <header>
                            <h3 className="text-md font-normal text-sky-950">{getPlan()?.type || '-'}</h3>
                            <span 
                            className="text-sm underline cursor-pointer text-neutral-400"
                            onClick={() => handlePeriodChange(!isYear)}
                            >Change</span>
                        </header>
                        <span className="ml-auto text-sm text-sky-950 font-medium">
                            {isYear ? `$${planPrice?.yearly || 0}/yr` : `$${planPrice?.monthly || 0}/mo`}
                        </span>
                    </div>
                    <div className="flex-col w-full">
                        {getAdds().adds.map(type => 
                            <Summarize isYear={isYear} addType={type.type}/>
                        )}
                    </div>
                </section>

                <section className="inline-flex items-center w-full sm:px-6 px-4 py-6">
                    <header>
                        <h3 className="text-md text-neutral-400">Total (per {isYear ? 'year' : 'month'})</h3>
                    </header>
                    <span
                    className="ml-auto text-sm text-indigo-600 font-medium"
                    >{isYear ? `+$${getTotal()?.year}/yr` : `+$${getTotal().monthly}/mo`}</span>
                </section>
            </main>
            <div className="w-full h-full relative flex flex-col-reverse">
                <Footer save={() => {}}/>
            </div>
        </div>
    );
}

const Compliment = () => {
    return (
        <div className="flex flex-col w-full h-96 sm:pt-12 items-center align-middle justify-center">
            <img src={AppreciationImage}/>
            <h1 className="text-2xl text-blue-950 m-4 font-medium">Thank you!</h1>
            <p className="flex align-middle text-sm text-neutral-400 text-center max-w-96">Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel to email us at support@loremgaming.com.</p>
        </div>
    )
}


const AddsCheckbox:React.FC<{checked:boolean}> = ({checked}) => {
    return (
        <label className="relative flex items-center mx-1 p-3 rounded-full cursor-pointer" htmlFor="ripple-off">
            <input id="ripple-off" type="checkbox"
                defaultChecked={checked}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 
                before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-gray-900 " />
            <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
            </span>
        </label>
    )
}

const Summarize: React.FC<{isYear: boolean, addType: string}> = ({isYear, addType}) => {
    const AddPrice = Prices.Adds[addType as 'Online Service' | 'Large Storage' | 'Customizable Profile']

    if(AddPrice){
        return (
            <section className="md:py-4 py-2 items-center inline-flex w-full">
                <header>
                    <span className="text-md text-neutral-400">{addType}</span>
                </header>
                <span className="ml-auto text-xs text-sky-950 font-light">
                {isYear ? `+$${AddPrice?.yearly}/yr` : `+$${AddPrice?.monthly}/mo`}
                </span>
            </section>
        )
    }
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


const Footer: React.FC<{save: () => void}> = ({ save }) => {
    return (
        <footer className=" sm:relative sm:w-full sm:max-w-96 fixed w-screen bottom-0 left-0 bg-white h-20">
            <StepperSubmit save={save} />
        </footer>
    );
};
export default Form;