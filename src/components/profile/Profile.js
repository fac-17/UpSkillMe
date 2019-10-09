import React from "react";


export default function Profile({ name, avatar, data }){
    const [totalScore, setTotalScore] = React.useState(10);
    React.useEffect(()=>{
        if (data) {
    let tempTotalPoints = 0
    data.forEach(activity=>{
        console.log(activity.fields)
        tempTotalPoints+=activity.fields['totalPoints (Activity points x duration)']
    }) 
    setTotalScore(tempTotalPoints)
}

    },[data])
    return(
        <div>
        <h1>{name}</h1>
        <img src={avatar} alt="this is our avatar pic" width="200px"/>
        <h2>{totalScore}</h2>
        </div>
    )
}
