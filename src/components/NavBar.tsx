import SideBarImage from '../assets/images/bg-sidebar-desktop.svg'
import StepperButton from './Stepper/StepperButton';

function NavBar() {
    return (
        <div id="sidebar" className='hidden sm:flex h-full'>
            <img src={SideBarImage} alt="desktop" className='m-2'/>
            <ul className='absolute m-3 p-8 text-white align-middle justify-center'>
                <StepperButton/>
            </ul>

        </div>
    )
}

export default NavBar; 