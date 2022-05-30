import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export default function LoginhtmlForm(){
    const getEmailValue = (event) =>{
        let emailValue = event.target.value;
        console.log(emailValue);
    };
    const getPasswordValue = (event) => {
        let passwordValue = event.target.value;
        console.log(passwordValue);
    }
  
    // const users = useTracker(() => {
    //     return data = UsersCollection.find({email : email, password : password}).fetch();});
    //     <ul>{users.map(
    //         user => <li key={user.email}>
    //             <p>{user.userName+ ' '+' '+user.email+' '+ user.createAt}</p>
    //         </li>
            
    //       )}</ul>
    // // if(data){
    // //     return <h1>welcome user</h1>
    // // }
    
    return (
       
        <div className="min-h-screen bg-gray-50 text-gray-900 antialiased m p py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:w-100 m-5 sm:mx-auto text-center">
            <span className="text-2xl font-semibold">Se connecter</span>
            <div className="mt-4 bg-white shadow-md rounded-lg">
                <div className="h-2 bg-orange-500 rounded-t-md"></div>
                <div className="px-8 py-6">
                <label className="block font-semibold text-left">Email</label>
                <input type="text" placeholder="Adresse Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-orange-400" onChange={getEmailValue}/>
                <label className="block mt-3 font-semibold text-left">Mot de passe</label>
                <input type="password" placeholder="Mot de passe" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-orange-400" onChange={getPasswordValue}/>
                <div className="flex justify-between">
                    <button onClick={() => doSomeThing()} type="submit" className="mt-4 bg-gradient-to-tr bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-500 ml-20">Se connecter</button>
                </div>
                <label className="block text-left mt-8 text-teal-600 hover:text-teal-800 cursor-pointer">Vous n'avez pas de compte ? <u>Créer un compte</u></label>
                </div>
            </div>
            </div>
      </div>
    );
}