import React from "react";

export default function LogOutButton({ setLoggedOut }) {
    function logout(e) {
        console.log('we are in the button click event')
        setLoggedOut(true)
    }

    return <button onClick={logout}> Log Out</ button>;
}