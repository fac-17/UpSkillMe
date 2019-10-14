import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function SignUpForm({ emailInput, setEmailInput }) {
    const [currSubmittedEmail, setCurrSubmittedEmail] = React.useState("")
    const [newUser, setNewUser] = React.useState(false);

    const handleSignUpSubmit = e => {
        e.preventDefault();
        setNewUser(true)
        setEmailInput(currSubmittedEmail)
    };

    React.useEffect(() => {
        // console.log('use effect called on submmiteted email', submittedEmail)
        if (emailInput && newUser) {
            const today = new Date()
            const submittedData = JSON.stringify({
                records: [
                    {
                        fields: {
                            nameOfActivity: "My first activity",
                            activityType: ["recbt3yRDLY9GjPc2"],
                            // fix this - not sure why it's a month behind!
                            date: `${(today.getMonth() + 1) % 12}-${today.getDate()}-${today.getFullYear()}`,
                            durationHours: 0,
                            link: "",
                            schoolEmail: emailInput,
                            skills: ["rec1aXpu34QFpVnDc"]
                        }
                    }
                ]
            });
            fetch(
                `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
            )
                .then(res => res.json())
                .then(res => {
                    console.log("came into refresh");
                    console.log(submittedData)
                    setNewUser(false);
                });


        }
    }, [emailInput])

    if (emailInput) {
        return (
            <Route>
                <Redirect to={{ pathname: "/profile" }} />
            </Route>
        );
    }

    return (
        <section>
            <h3> Sign Up</h3>
            <form onSubmit={handleSignUpSubmit} >
                <label>  Enter email:
            <input required
                        type="email"
                        value={currSubmittedEmail}
                        onChange={e => setCurrSubmittedEmail(e.target.value)}
                    />
                </label>
                <label> Sign Up
            <input type="submit" />
                </label>
            </form>
        </section>
    )

}