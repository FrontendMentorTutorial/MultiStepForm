import './App.css'
import NavBar from './NavBar'
import TopBarImage from '../assets/images/bg-sidebar-mobile.svg';
import StepperButton from './Stepper/StepperButton';
import StepperSubmit from './Stepper/StepperSubmit';
import Form from './Form';
import { TrackerProvider } from '../context/StepTracker';
import { FormProvider } from '../context/FormData';


function App() {
    return (
      <TrackerProvider>
        <div className="flex justify-center sm:items-center bg-blue-50 w-screen h-screen min-w-xs">
          <div className='w-full h-full sm:hidden'>
            <img src={TopBarImage} alt="Mobile display" className='sm:hidden min-w-80 xs:w-full flex absolute'/>
            <section className='absolute flex justify-center items-center my-6 w-full'> 
              <StepperButton></StepperButton>
            </section>
          </div>
          <div className="sm:relative flex absolute bg-white border my-20 rounded-xl shadow-sm w-11/12 md:max-w-[825px] sm:max-w-2xl sm:w-full sm:h-3/4">
            <section className='flex-shrink-0 h-full'>
                <NavBar/>
            </section>
            <section className='flex-grow m-5 sm:m-14 h-4/5 w-full'>
              <FormProvider>
                <Form/>
              </FormProvider>
            </section>
          </div>
          <footer className='sm:hidden absolute bottom-0 h-20 bg-white w-full'>
            <StepperSubmit></StepperSubmit>
          </footer>
        </div>
      </TrackerProvider>

    )
}

export default App
    