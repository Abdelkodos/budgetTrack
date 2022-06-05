import Navbar from "./components/Navbar";

const Revenue = () => {
     let revenues = [
        {
            nom : "Salaire",
            montant : 5189.00,
            periode : "mensuel"
        },
        {
            nom : "FreeLance",
            montant : 1890.00,
            periode : "mensuel"
        }
    ]
    let ListRevenues = revenues.map((revenue) => <li className="flex justify-between p-3 hover:bg-orange-200">
        <p>{revenue.nom} | {revenue.montant} DH | {revenue.periode} </p>
        <button ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg></button> 
        <button className="text-orange" >Supprimer</button></li>);
    const deleteIt = () => {
        
    } 
    return (
        <div >
            <Navbar />
            <ul className="divide-y-2 divide-orange-500">
                {ListRevenues}
            </ul>
        </div> );
}
 
export default Revenue;