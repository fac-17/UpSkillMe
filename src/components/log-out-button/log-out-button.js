import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
/* margin-left: 1%
margin-top: 1%;
position: relative;
font-family: "Roboto", sans-serif;
color: #fff;
text-decoration: none;
background: #342e37;
color: white;
padding: 1%;
border-radius: 5px;
display: block;
transition: all 0.4s ease 0s;
cursor: pointer;
box-shadow: 5px 40px -10px rgba(0,0,0,0.57); */

color: white;
/* :hover {
  
  background: #434343;
 letter-spacing: 1px;
 -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
 -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
} */
`;

export default function LogOutButton({ setLoggedOut, setEmailInput }) {
  function logout(e) {
    window.sessionStorage.clear();
    setEmailInput("");
    setLoggedOut(true);
  }

  return <ButtonStyle onClick={logout}> Log Out</ButtonStyle>;
}
