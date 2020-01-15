import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityConverter";
import ActivityButton from "../add-activity-button/ActivityButton";
import CloseButton from "../close-button/CloseButton";
import {FormStyle, Input, Label, Select, Submit, TextArea} from "./EventForm.style";
import Activites from "../activities/Activities";
import ProjectRadioButtons from "../project-radio-buttons/ProjectRadioButtons";

const hexColourNameMap = {
    '#37d67a': 'Green',
    '#2ccce4': 'Blue',
    '#555555': 'Black',
    '#dce775': 'Yellow',
    '#ff8a65': 'Orange',
    '#ba68c8': 'Pink'
};

export default function EventForm({
                                      setDataRefresh,
                                      emailInput,
                                      colour,
                                      isFormDisplayed,
                                      setFormDisplayed,
                                      activityButtonDisplay,
                                      setActivityButtonDisplay,
                                      closeButtonDisplay,
                                      setCloseButtonDisplay,
                                      passwordInput,
                                      activityName,
                                      setActivityName,
                                      date,
                                      setDate,
                                      duration,
                                      setDuration,
                                      supportingInfo,
                                      setSupportingInfo,
                                      activityType,
                                      setActivityType,
                                      badgeValues,
                                      setBadgeValues,
                                      setCopyActivity,
                                      copyActivity,
                                      Project,
                                      setProject
                                  }) {

    const [formDisplay, setFormDisplay] = React.useState(isFormDisplayed);

    const badgeOptions = [
        "Communication",
        "Creativity",
        "Innovation",
        "Leadership",
        "Media",
        "Problem solving",
        "Teamwork",
        "Technology"
    ];

    const skills = {
        Communication: "rec1aXpu34QFpVnDc",
        Creativity: "recilXHxEAlJqZFeu",
        Innovation: "recQtkW5IWh0z3tH5",
        Leadership: "reczDCLXfOC5iHLiQ",
        Media: "recSIsNHGiRbV8CR7",
        "Problem solving": "recOt8tI1ZLivhoZV",
        Teamwork: "recTHKDy3NJghbCrJ",
        Technology: "recVncOYn99qVNwir"
    };

    // const emptyBadgeOptions = React.useState(badgeOptions);
    // if(badgeOptions !== null && badgeOptions.length === 3) {

    // }

    //Initialising activity type with the an array containing
    //the id of after school club. Default value is legitimate value.

    const activityOptions = [
        "After school club",
        "Careers workshop",
        "Competition",
        "Employer event",
        "Mentoring",
        "Online course",
        "School project",
        "Skills workshop",
        "Sports club",
        "Summer school",
        "University event",
        "Volunteering",
        "Work experience",
        "Other"
    ];

    const activityDictionary = {
        "After school club": "recbt3yRDLY9GjPc2",
        "Careers workshop": "rec7lzaalxuMGOc1z",
        Competition: "recX0DSvfI0EkTWzP",
        "Employer event": "recO6WjBempBCwXPW",
        Mentoring: "recINqvhi14OEQ16V",
        "Online course": "recan6J6O1yDNNaum",
        "School project": "recKUogjAsEuiz7LZ",
        "Skills workshop": "recWvSVTJnacRMxGi",
        "Summer school": "recKKc2X7Rx40sy7T",
        "University event": "rec7KmKGVf7Bj2IrE",
        Volunteering: "recv1xg4hehyyybA4",
        "Work experience": "recFP2EcUV54UQiDB",
        "Sports club": "recUe5uzB4CJoT6Xk",
        Other: "reczhkJJNz2JsLvxW"
    };
    const durationOptions = [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 70, 105, 140];

    const updateBadges = e => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        value = value.slice(-3);
        setBadgeValues(value);
    };

    const updateActivityType = e => {
        const convertedActivity = activityConverter(e.target.value);
        setActivityType(convertedActivity);
    };

    const updateDuration = e => {
        setDuration(parseInt(e.target.value));
    };

    const handleSubmit = e => {

        // Drop submission if duration is longer than eight hours.
        if (duration <= 50) {
            let submittedData;
            if (copyActivity === false) {

                submittedData = JSON.stringify({
                    records: [
                        {
                            fields: {
                                nameOfActivity: activityName,
                                activityType: activityType,
                                date: date,
                                durationHours: duration,
                                supportingInfo: supportingInfo,
                                schoolEmail: emailInput,
                                skills: skillsConverter(badgeValues),
                                pass: passwordInput,
                                colour: colour,
                                Project: Project
                            }
                        }
                    ]
                });
            } else {
                submittedData = JSON.stringify({
                    records: [
                        {
                            fields: {
                                nameOfActivity: activityName,
                                activityType: [activityDictionary[activityType]],
                                date: date,
                                durationHours: duration,
                                supportingInfo: supportingInfo,
                                schoolEmail: emailInput,
                                skills: skillsConverter(badgeValues),
                                pass: passwordInput,
                                colour: colour,
                                Project: Project
                            }
                        }
                    ]
                });
            }
            console.log('submittedData', submittedData);
            fetch(
                `/.netlify/functions/CreateUserActivity?activityData=${submittedData}`
            )
                .then(res => res.json())
                .then(() => {
                    setDataRefresh(true);
                });
        }

        // Reset fields.
        setActivityName("");
        setActivityType(["recbt3yRDLY9GjPc2"]);
        setDate("");
        setDuration(1);
        setSupportingInfo("");
        setBadgeValues([]);
        setProject('FALSE');

         if(copyActivity === true) {
             setCopyActivity(false);
         }
        alert("Well done, you've added your skill block!");
        e.preventDefault();
    };

    React.useEffect(() => {
        setFormDisplay(isFormDisplayed);
    }, [isFormDisplayed]);
    if (copyActivity === false) {
        return (
            <FormStyle formDisplay={formDisplay} onSubmit={handleSubmit}>
                <CloseButton
                    closeButtonDisplay={closeButtonDisplay}
                    setCloseButtonDisplay={setCloseButtonDisplay}
                    setFormDisplayed={setFormDisplayed}
                    isFormDisplayed={isFormDisplayed}
                    activityButtonDisplay={activityButtonDisplay}
                    setActivityButtonDisplay={setActivityButtonDisplay}
                />
                <h2> Add new activity</h2>
                <Label>
                    Name of Activity:
                    <Input
                        required
                        type="text"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)}
                    />
                </Label>

                <Label>
                    Date:
                    <Input
                        required
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>

                <Label>
                    Activity type:
                    <Select
                        required
                        name="activityType"
                        value={activityDictionary[activityType]}
                        onChange={updateActivityType}
                    >
                        {activityOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    Duration (Hours):
                    <Select
                        required
                        name="duration"
                        value={duration}
                        onChange={updateDuration}
                    >
                        {durationOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    Select Skills (Max 3)
                    <Select
                        required
                        name="badgeValues"
                        multiple={true}
                        value={badgeValues}
                        onChange={updateBadges}
                    >
                        {badgeOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    What did you learn?
                    <TextArea
                        maxlength="480"
                        rows="5"
                        value={supportingInfo}
                        onChange={e => setSupportingInfo(e.target.value)}
                    />
                </Label>
                <Label style={{marginBottom: '0.5%'}}>
                    Is this activity part of a longer term project?
                    <br/>
                <ProjectRadioButtons
                    name="soundEnabled"
                    switches={[
                        {value: "TRUE",  label: '  YES  '},
                        {value: "FALSE", label: '  NO  '}
                    ]}
                    selected={Project}
                    onChange={(val)=>setProject(val)}
                />
                </Label>
                <Submit type="submit" value="Submit"/>
            </FormStyle>
        );
    } else {

        return (
            <FormStyle formDisplay={formDisplay} onSubmit={handleSubmit}>
                <CloseButton
                    closeButtonDisplay={closeButtonDisplay}
                    setCloseButtonDisplay={setCloseButtonDisplay}
                    setFormDisplayed={setFormDisplayed}
                    isFormDisplayed={isFormDisplayed}
                    activityButtonDisplay={activityButtonDisplay}
                    setActivityButtonDisplay={setActivityButtonDisplay}
                />
                <h2>Repeat activity</h2>
                <Label>
                    Name of Activity:
                    <Input
                        required
                        type="text"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)}
                    />
                </Label>

                <Label>
                    Date:
                    <Input
                        required
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>

                <Label>
                    Duration (Hours):
                    <Select
                        required
                        name="duration"
                        value={duration}
                        onChange={updateDuration}
                    >
                        {durationOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    What did you learn in this session?
                    <TextArea
                        maxlength="480"
                        rows="5"
                        value={supportingInfo}
                        onChange={e => setSupportingInfo(e.target.value)}
                    />
                </Label>
                <Submit type="submit" value="Submit"/>
            </FormStyle>
        );
    }
}
