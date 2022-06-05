import React from 'react'
import Navbar from './components/Navbar';

const Depances = () => {
    let depences = [
        {
            nom : "Fix et wifi",
            montant : 250.00,
            periode : "mensuel"
        },
        {
            nom : "Eau et electricity",
            montant : 550.00,
            periode : "mensuel"
        }

    ]
    const ListDepences = depences.map((depence) => <li className="flex justify-between p-3 hover:bg-orange-200">
    <p>{depence.nom} | {depence.montant} DH | {depence.periode} </p>
    <button><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg></button> 
    <button className="text-orange" >Supprimer</button></li>);

    function addtoList(){
        let obj = {nom: "food & water", montant: 800.00, perdiode: "mensuel"};
        depences = depences + obj;
    }

    return (
        <div >
            <Navbar />
            <ul className='divide-y-2 divide-orange-500'>
                {ListDepences}
            </ul>
            <button onClick={addtoList} className="bg-orange-500 text-white">add</button>
        </div>
    );
}

export default Depances