import React, { createContext, ReactNode, useContext, useState } from 'react';
import TrackerContext from './StepTracker';
import {Prices} from "../assets/data/Data.json";

interface FormInterface {
    getInfo: () => {name: string, email: string, phone: string};
    getPlan: () => {type: string};
    getAdds: () => {adds: {type: string}[]};
    getTotal: () => {year: number, monthly: number};
    updateInfo: (name: string, email: string, phone: string) => void;
    updatePlan: (type: string) => void;
    updateAdds: (adds: {type: string}[]) => void;
}

export const FormContext = createContext<FormInterface>({
    getInfo: () => ({ name: '', email: '', phone: '' }),
    getPlan: () => ({ type: ''}),
    getAdds: () => ({ adds: [] }),
    getTotal: () => ({year: 0, monthly: 0}),
    updateInfo: () => {},
    updatePlan: () => {},
    updateAdds: () => {},
});

export const FormProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const {tracking} = useContext(TrackerContext);
    const [formData, setFormData] = useState({
        1: { name: '', email: '', phone: '' },
        2: { type: '',},
        3: [{type: ''}],
    });

    const updateInfo = (name: string, email: string, phone: string) => {
        setFormData(prevData => ({
            ...prevData,
            1: { name, email, phone }
        }));
    };

    const updatePlan = (type: string) => {
        setFormData(prevData => ({
            ...prevData,
            2: {type}
        }))
    }

    const updateAdds = (adds: { type: string }[]) => {
        setFormData(prevData => ({
            ...prevData,
            3: adds
        }))
    }

    const getInfo = () => {
        return formData[1]
    }
    
    const getPlan = () => {
        return formData[2]
    }

    const getAdds = () => {
        return {adds: formData[3]}
    }

    const getTotal = () => {

        const plan = Prices.Plan[getPlan().type as 'Arcade' | 'Advance' | 'Pro'] 

        const adds = getAdds().adds.map(data => {
            const type = Prices.Adds[data.type as 'Online Service' | 'Large Storage' | 'Customizable Profile']
            if(type){
                return {
                    month: type?.monthly, 
                    year: type?.yearly
                }
            }
            return {
                month: 0, 
                year: 0
            }
        })
        const addsTotal = adds.reduce((total, data) => {
            return {month : data.month + total.month, year: data.year + total.year}
        })

        if(plan && addsTotal){
            return {
                year: plan?.yearly + addsTotal.year,
                monthly: plan?.monthly  + addsTotal.month
            }
        }
        return { 
            year: 0,
            monthly: 0
        }
    }
    
    return (
        <FormContext.Provider value={{getInfo, getPlan, getAdds, getTotal, updateInfo, updatePlan, updateAdds}}>
            {children}
        </FormContext.Provider>
    )

}