import './App.css'
import NavBar from './NavBar'
import TopBarImage from '../assets/images/bg-sidebar-mobile.svg';
import StepperButton from './Stepper/StepperButton';
import StepperSubmit from './Stepper/StepperSubmit';


function App() {
    return (
      <div className="flex justify-center sm:items-center bg-blue-50 w-screen h-screen min-w-xs">
        <div className='w-full h-full sm:hidden'>
          <img src={TopBarImage} alt="Mobile display" className='sm:hidden min-w-80 xs:w-full flex absolute'/>
          <section className='absolute flex justify-center items-center my-6 w-full'> 
            <StepperButton></StepperButton>
          </section>
        </div>
        <div className="sm:relative absolute bg-white border my-20 rounded-xl shadow-sm w-11/12 md:w-2/3 h-3/6 sm:h-3/4">
          <NavBar></NavBar>
        </div>
        <footer className='absolute bottom-0 p-6 bg-white w-full'>
          <StepperSubmit></StepperSubmit>
        </footer>
      </div>

    )
}

export default App
    