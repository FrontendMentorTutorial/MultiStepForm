import React, { createContext, ReactNode, useContext, useState } from 'react';
import TrackerContext from './stepTracker';

interface FormInterface {
    updateInfo: (name: string, email: string, phone: string) => void;
    updatePlan: (type: string, period: 'Y' | 'M', price: number) => void;
    updateAdds: (type: string, price: number) => void;
}

export const FormContext = createContext<FormInterface>({
    updateInfo: () => {},
    updatePlan: () => {},
    updateAdds: () => {},
});

export const FormProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const {tracking} = useContext(TrackerContext);
    const [formData, setFormData] = useState({
        1: { name: '', email: '', phone: '' },
        2: { type: '', period: '', price: 0 },
        3: { type: '', price: 0 },
    });

    const updateInfo = (name: string, email: string, phone: string) => {
        setFormData(prevData => ({
            ...prevData,
            1: { name, email, phone }
        }));
    };

    const updatePlan = (type: string, period: string, price: number) => {
        setFormData(prevData => ({
            ...prevData,
            2: {type, period, price}
        }))
    }

    const updateAdds = (type: string, price: number) => {
        setFormData(prevData => ({
            ...prevData,
            3: {type, price}
        }))
    }

    return (
        <FormContext.Provider value={{updateInfo, updatePlan, updateAdds}}>
            {children}
        </FormContext.Provider>
    )

}