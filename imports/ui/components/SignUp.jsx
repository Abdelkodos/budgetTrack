import React from "react";
import { UsersCollection } from "../../api/users";

export default function SignUp() {
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  

  const saveUser = () => {
      UsersCollection.insert({ nom, prenom, email, password });
      setNom("");
      setPrenom("");
      setEmail("");
      setPassword("");
      console.log(prenom+ ' ' + ' ' +password);
  }
  return (
    <div className="min-h-screen m bg-gray-50 text-gray-900 antialiased py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 m-3 sm:w-100 sm:mx-auto text-center">
        <span className="text-2xl font-semibold">S'inscrire</span>
        <div className="mt-4 bg-white shadow-md rounded-lg">
          <div className="h-2 bg-orange-500 rounded-t-md"></div>
          <div className="px-8 py-6">
            <label className="block font-semibold text-left mt-4">Nom</label>
            <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-orange-400"></input>
            <label className="block font-semibold text-left mt-4">Prénom</label>
            <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom" className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-orange-400"></input>
            <label className="block font-semibold text-left mt-4">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse Email" className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-orange-400"></input>
            <label className="block mt-3 font-semibold text-left">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" className="border w-full h-5 px-3 py-5 hover:outline-none focus:outline-none focus:ring-orange-400"></input>
            <div className="flex justify-between">
              <button type="submit" className="mt-4 bg-gradient-to-tr bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-500 ml-20" onClick={saveUser}>Créer un compte</button>
            </div>
            <label className="block text-left mt-8 text-teal-600 hover:text-teal-800 cursor-pointer">Vous avez déjà un compte ? <u>Se connecter</u></label>
          </div>
        </div>
      </div>
    </div>
  );
}