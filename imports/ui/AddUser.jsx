import React from 'react';
import { UsersCollection } from "../api/users";
import insertUser from '../api/users'


export default function AddUser() {
    const [userName, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const saveUser = () => {
        UsersCollection.insert({ userName, email, password });
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div>

            <h1 className='text-center'>Sign in</h1>
            <input type="text" id="username" value={userName} onChange={(e) => setName(e.target.value)} placeholder='username'/>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            <button onClick={saveUser}>add user</button>
        </div>
    );
};