import React from "react";

export default function LogOutButton({ setLoggedOut, setEmailInput }) {
    function logout(e) {
        console.log('we are in the button click event')
        setEmailInput('');
        setLoggedOut(true)
    }

    return <button onClick={logout}> Log Out</ button>;
}