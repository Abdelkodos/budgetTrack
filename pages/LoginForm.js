import React from 'react';

const LoginForm = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const userConnect = () => {
        if(email===null || password===null)
            return console.log("veuiller connectee")
        console.log("vous etes connectee")
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 antialiased m p py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:w-100 m-5 sm:mx-auto text-center">
            <span className="text-2xl font-semibold">Se connecter</span>
            <div className="mt-4 bg-white shadow-md rounded-lg">
                <div className="h-2 bg-orange-500 rounded-t-md"></div>
                <div className="px-8 py-6">
                <label className="block font-semibold text-left">Email</label>
                <input type="text" value={email} placeholder="Adresse Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-orange-400" onChange={(e) => setEmail(e.target.value)}/>
                <label className="block mt-3 font-semibold text-left">Mot de passe</label>
                <input type="password" value={password} placeholder="Mot de passe" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-orange-400" onChange={(e) => setPassword(e.target.value)}/>
                <div className="flex justify-between">
                    <button type="submit" onClick={userConnect} className="mt-4 bg-gradient-to-tr bg-orange-400 text-white py-2 px-6 rounded-md hover:bg-orange-500 ml-20"><Link href="">Se connecter</Link></button>
                </div>
                <label className="block text-left mt-8 text-teal-600 hover:text-teal-800 cursor-pointer">Vous n'avez pas de compte ? <u><Link href="/">Créer un compte</Link></u></label>
                </div>
            </div>
            </div>
      </div>
    );
}

export default LoginForm