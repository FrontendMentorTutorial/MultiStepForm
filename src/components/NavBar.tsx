import SideBarImage from '../assets/images/bg-sidebar-desktop.svg'

function NavBar() {
    return (
        <div id="sidebar" className='hidden sm:flex h-full'>
            <img src={SideBarImage} alt="desktop" className='m-3'/>
            <ul className='absolute m-3 p-8 text-white align-middle justify-center'>
                <li className="flex items-center my-4">
                    <div>
                        <button type="button" className="circle-list-item">
                            <b>1</b>
                        </button>
                    </div>
                    <div className='flex flex-col mx-3 items-start align-middle'>
                        <span className='text-[0.75rem] text-neutral-400 font-ubuntu font-extralight'>STEP 1</span>
                        <span className='text-[0.875rem] tracking-widest font-ubuntu font-bold'>YOUR INFO</span>
                    </div>
                </li>

                <li className="flex items-center my-4">
                    <div>
                        <button type="button" className="circle-list-item">
                            <b>2</b>
                        </button>
                    </div>
                    <div className='flex flex-col mx-3 items-start align-middle'>
                        <span className='text-[0.75rem] text-neutral-400 font-ubuntu font-extralight'>STEP 2</span>
                        <span className='text-[0.875rem] tracking-widest font-ubuntu font-bold'>SELECT PLAN</span>
                    </div>
                </li>

                <li className="flex items-center my-4">
                    <div>
                        <button type="button" className="circle-list-item">
                            <b>3</b>
                        </button>
                    </div>
                    <div className='flex flex-col mx-3 items-start align-middle'>
                        <span className='text-[0.75rem] text-neutral-400 font-ubuntu font-extralight'>STEP 3</span>
                        <span className='text-[0.875rem] tracking-widest font-ubuntu font-bold'>ADD-ONS</span>
                    </div>
                </li>

                <li className="flex items-center my-4">
                    <div>
                        <button type="button" className="circle-list-item">
                            <b>4</b>
                        </button>
                    </div>
                    <div className='flex flex-col mx-3 items-start align-middle'>
                        <span className='text-[0.75rem] text-neutral-400 font-ubuntu font-extralight'>STEP 4</span>
                        <span className='text-[0.875rem] tracking-widest font-ubuntu font-bold'>SUMMARY</span>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default NavBar;