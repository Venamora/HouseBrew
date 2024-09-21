import React from 'react';
import Logo from '../../assets/logo_coffee.png';


const Menus = [
    {
        id : 1,
        name : 'Home',
        link : '/#',
    },
    {
        id : 2,
        name : 'Menu',
        link : '/#menu',
    },
    {
        id : 1,
        name : 'About Us',
        link : '/#aboutus',
    },
];
const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary/90 text-white">
            <div className="container py-4">
                <div className="flex justify-between items-center gap-4">
                    {/* Logo section */}
                    <div className=''> 
                        <a href="#" className='font-bold text-xl md:text-xl sm:text-xs flex justify-center items-center gap-2 tracking-wider font-sans-serif'>
                            <img src={Logo} alt="Logo" className='w-10' />
                            BrewHouse &emsp; </a>
                    </div>

                    {/* Links section */}
                    <div className='flex justify-between items-center gap-10' >
                        <ul className='hidden sm:flex items-center gap-7'>
                            {
                                Menus.map((data, index) => 
                                (
                                    <li key= {index}>
                                        <a href={data.link} className='inline-block text-l py-2 px-2 text-white/80 hover:text-black duration-200'>{data.name}</a>
                                    </li>
                                    ))
                                }
                        </ul>
                        <div className='search-bar'>
                        <input type="text" placeholder="Search" className='w-[100px] md:w-[200px] sm:w-[100px] p-1 rounded-xl ' />
                        </div>
                        <button className='bg-primary/70 px-6 py-2 rounded-3xl hover:scale-105 duration-200' > Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;