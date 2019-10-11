import React from "react";
import styled from "styled-components";

    // Styled components
    const ProfileStyle = styled.section`
        flex-direction: column;
        text-align: center;
        background-color: #ecebe4; 
    `;

    const EmailStyle = styled.h1`
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0;
    `;

export default function Profile({ data }) {
    const [avatar, setAvatar] = React.useState("assets/avatarAlien.svg");
    const [totalScore, setTotalScore] = React.useState(10);
    const [email, setEmail] = React.useState('tbd');

    // Runs every time the data changes/page loads, update the total score
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
        <ProfileStyle>
            <EmailStyle>{email}</EmailStyle>
            <img src={avatar} alt="this is our avatar pic" width="200px" />
            <h2>{totalScore} total points</h2>
        </ProfileStyle>
    )
}
