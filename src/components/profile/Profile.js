import React from "react";
import "./Profile.css";


export default function Profile({ name, avatar, data }) {
    const [totalScore, setTotalScore] = React.useState(10);
    const [email, setEmail] = React.useState('tbd');

    React.useEffect(() => {
        if (data) {
            let tempTotalPoints = 0
            data.forEach(activity => {
                tempTotalPoints += activity.fields['totalPoints (Activity points x duration)']
            })
            setTotalScore(tempTotalPoints)
            if (data[0]) {
                setEmail(data[0].fields.schoolEmail)
            }
        }

    }, [data])
    if (!data) {
        return (<p>Loading</p>)
    }
    return (
        <section className = "profile">
            <h1>{email}</h1>
            <img className = "avatar" src={avatar} alt="this is our avatar pic" width="200px" />
            <h2>{totalScore} total points</h2>
            {/* <img src="../../../public/assets/Alien_blob_avatar.svg"/> */}
        </section>
    )
}

