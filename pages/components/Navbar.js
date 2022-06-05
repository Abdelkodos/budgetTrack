import React from 'react';
import Depences from '../Depances';
import Link from 'next/link'

const Navbar = () => {
    function hiddenMenu(){
        let menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
        // NavBar
      
        <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-bold text-2xl tracking-tight">Budget Track</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-neutral-900 border-zinc-50 hover:text-black hover:border-white" onClick={() => hiddenMenu()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow text-amber-900 font-semibold">
                    <Link href="/Depances" ><a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 space-x-6">Dépences</a></Link>
                    <Link href="/Revenue" ><a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 space-x-6">Revenus</a></Link>
                    <Link href="/profil"><a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">Profil</a></Link>
                </div>
            </div>
        </nav>
        
        
    );
}
export default Navbar;