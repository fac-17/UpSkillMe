import React from "react";

export default function Profile({ name, avatar, totalScore }){
    return(
        <div>
        <h1>{name}</h1>
        <img src={avatar} alt="this is our avatar pic" width="200px"/>
        <h2>{totalScore}</h2>
        </div>
    )
}