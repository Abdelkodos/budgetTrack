import React from 'react';



export function Navbar() {
  
  

return (
  <div className='bg-orange-500 text-white font-black m-0 p-0 '>


{/* <!-- Tailwind-css Navbar  --> */}
<nav className="bg-orange-500 shadow-lg">
  <div className="container m ">
    <div className="sm:flex justify-around m-auto">
      {/* <!-- Site-title  --> */}
      <a href="#" className="text-white text-3xl font-bold p-3 ">BUDGET TRACK</a>

      {/* <!-- Menus  --> */}
      <ul className="text-white-400 sm:self-center text-xl border-t sm:border-none">
        <li className="sm:inline-block">
          <a href="#" className="p-3 hover:text-white">Depences  |</a>
        </li>
        <li className="sm:inline-block">
          <a href="#" className="p-3 hover:text-white">Revenues  |</a>
        </li>
        <li className="sm:inline-block">
          <a href="#" className="p-3 hover:text-white">Profil</a>
          
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>







    {/* <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-orange-600 text-white shadow-lg navbar navbar-expand-lg navbar-light">
    <nav >
      <ul className='flex flex-wrap items-center justify-between relative p-6 '>
        <div>
          <li>Depences</li>
          

        </div>
        <div className='text-right mr-20'>
          <li>Revenue</li>

        </div>
        <div className='text-right mr-6'>
          
          <li>Profil</li>
        </div>
      </ul>

    </nav> */}


  </div>
  );
}