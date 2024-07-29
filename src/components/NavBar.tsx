import SideBarImage from '../assets/images/bg-sidebar-desktop.svg'

function NavBar() {
    return (
        <div id="sidebar" className='hidden sm:flex h-full'>
            <div className='sm:flex h-full'>
            <img src={SideBarImage} alt="desktop" className='m-3'/>
            </div>
            <ul className='absolute m-3'>
                <li className="flex">1</li>
                <li className="flex">2</li>
                <li className="flex">3</li>
                <li className="flex">4</li>
            </ul>
        </div>
    )
}

export default NavBar;