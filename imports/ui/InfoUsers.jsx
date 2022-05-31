import React from "react";
import { UsersCollection } from "../api/users";
import { useTracker } from 'meteor/react-meteor-data';

export const InfoUsers = () => {
    const users = useTracker(() => {
        return data = UsersCollection.find().fetch();
});

return (
    <div>
      <h1>Users</h1>
      <ul>{users.map(
        user => <li key={user._id}>
            <p>{user.nom+ ' '+user.prenom+ ' '+' '+user.email+' '+ user.password}</p>
        </li>
        
      )}</ul>
    </div>
  );
};