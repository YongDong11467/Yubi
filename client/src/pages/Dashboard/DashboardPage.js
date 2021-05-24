import React, {useState} from 'react';
import LoginPage from '../Login/LoginPage'

export default function Dashboard() {

    const [token, setToken] = useState();

    if(!token) {
      return <LoginPage setToken={setToken} />
    }

    return(
        <h2>Dashboard</h2>
    );
}