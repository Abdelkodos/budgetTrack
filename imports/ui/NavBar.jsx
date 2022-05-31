import React from 'react';

export default function NavBar() {
//     const button = document.querySelector('#menu-button');
// const menu = document.querySelector('#menu');


// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
  
// });

    function hiddenMenu(){
        let menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
        // NavBar
        <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                <span className="font-bold text-2xl tracking-tight">Budget Track</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-neutral-900 border-zinc-50 hover:text-black hover:border-white" onClick={() => hiddenMenu()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow text-amber-900 font-semibold">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 space-x-6"><input type="radio" name="budget"/>Dépences</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 space-x-6"><input type="radio" name="budget"/>Revenus</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">Profil</a>
                </div>
            </div>
        </nav>
    );
}