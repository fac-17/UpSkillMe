import React from "react";

export default function LogOutButton({ setLoggedOut, setEmailInput }) {
  function logout(e) {
    setEmailInput("");
    setLoggedOut(true);
  }

  return <button onClick={logout}> Log Out</button>;
}
