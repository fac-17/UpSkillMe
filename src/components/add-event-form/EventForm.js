import React from 'react';

export default function EventForm(){
    const [activityName, setActivityName] = React.useState("");
    const [date, setDate] = React.useState("");

    return (
        <form>
            <label>
                Name of Activity: 
                <input
                    type="text"
                    value={activityName}
                    onChange={e => setActivityName(e.target.value)}
                />
            </label>
            <label>
                Date: 
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </label>
            <label>
                Activity type:
                <select name="activityType">
                    <option>After school club</option>
                    <option>Careers workshop</option>
                    <option>Competition</option>
                    <option>Employer event</option>
                    <option>Mentoring</option>
                    <option>Online course</option>
                    <option>Other</option>
                    <option>School project</option>
                    <option>Skills workshop</option>
                    <option>Sports club</option>
                    <option>Summer school</option>
                    <option>University event</option>
                    <option>Volunteering</option>
                    <option>Work experience</option>
                </select>
            </label>
            <label>
                

            </label>

        
        </form>


    )
}