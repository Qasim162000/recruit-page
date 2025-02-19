import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
// import { BiSearch, BiUserCircle } from "react-icons/bi";
// import { BsBarChartFill } from "react-icons/bs";
// import { IoMail } from "react-icons/io5";
import { IoMdNotificationsOutline } from 'react-icons/io';
import profileImage from '../../../images/people.png'
import { AiTwotoneCloud } from 'react-icons/ai';

const DashboardRightbar = ({ rightbarOpen, setRightbarOpen, }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const rightbar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('rightbar-expanded');
    console.log("check", storedSidebarExpanded)

    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!rightbarOpen || keyCode !== 27) return;
            setRightbarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        let check = localStorage.setItem('rightbar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('rightbar-expanded');
        } else {
            document.querySelector('body').classList.remove('rightbar-expanded');
        }
    }, [sidebarExpanded]);
    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${rightbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"  ></div>

            {/* Sidebar */}
            <div id="rightbar" ref={rightbar} className={`flex flex-col absolute z-40 right-0 top-0 lg:static lg:right-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:rightbar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${rightbarOpen ? '-translate-x-0' : 'translate-x-64'}`}  >
                {/* Sidebar header */}
                <div className="flex justify-between mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setRightbarOpen(!rightbarOpen)} aria-controls="rightbar" aria-expanded={rightbarOpen} >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" /> </svg>
                    </button>
                    {/* Logo */}
                    <NavLink end to="/" className="block">
                        <img className='m-auto w-full h-auto max-w-[90px]' src={logo} alt="logo" loading="lazy" />
                    </NavLink>
                </div>

                {/* Links */}
                <div className="space-y-8">
                    {/* Pages group */}
                    <div>

                        <ul className="mt-3 ">

                            {/* Messages */}
                            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 `}>
                                <div className='flex items-center  p-2 '>
                                    <IoMdNotificationsOutline className='text-[20px]' />
                                    <img src={profileImage} className=" ml-3 w-6" alt="profile" />
                                    <select className='focus:outline-none'>
                                        <option>Islamabad</option>
                                    </select>
                                </div>
                            </li>
                            <li className={`pl-[36px] py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex items-center  p-2 '>
                                    <img src={profileImage} className=" ml-3 w-6" alt="profile" />
                                    <select className='focus:outline-none'>
                                        <option>Islamabad</option>
                                    </select>
                                </div>
                            </li>
                            <li className={`pl-[4rem] py-2 rounded-sm mb-0.5 last:mb-0' }`}>
                                <div className='flex items-center p-2  '>
                                    <select className='focus:outline-none'>
                                        <option>Islamabad</option>
                                    </select>
                                </div>
                            </li>
                            <li className={`pl-[4rem] py-2 rounded-sm mb-0.5 last:mb-0'}`}>
                                <div className='flex items-center  '>
                                    <AiTwotoneCloud className='text-[20px]' />
                                    <span className='ml-2 text-sm'>Rain-1'C</span>
                                </div>
                            </li>


                        </ul>
                    </div>
                    {/* More group */}

                </div>

                {/* Expand / collapse button */}
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                    <div className="px-3 py-2">
                        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <svg className="w-6 h-6 fill-current rightbar-expanded:rotate-180" viewBox="0 0 24 24">
                                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                                <path className="text-slate-600" d="M3 23H1V1h2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardRightbar