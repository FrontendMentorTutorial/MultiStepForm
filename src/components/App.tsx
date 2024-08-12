import './App.css'
import NavBar from './NavBar'
import TopBarImage from '../assets/images/bg-sidebar-mobile.svg';
import StepperButton from './Stepper/StepperButton';
import StepperSubmit from './Stepper/StepperSubmit';
import Form from './Form';
import { TrackerProvider } from '../context/stepTracker';


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
          <div className="sm:relative flex absolute bg-white border my-20 rounded-xl shadow-sm w-11/12 lg:w-2/3 h-3/6 sm:h-3/4">
          <section className='flex-shrink-0 h-full'>
              <NavBar/>
          </section>
          <section className='flex-grow flex h-full'>
              <Form></Form>
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
    