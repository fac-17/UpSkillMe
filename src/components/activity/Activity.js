import React from 'react';
import Badges from '../../components/badges/Badges';
import "./Activity.css"

export default function Activity({ activity, index }) {
    React.useEffect(() => {
    }, activity

    )

    return (<ul className="list">
        <h4> Activity #{index + 1} </h4>
        <li>{activity.fields.nameOfActivity}</li>
        <li>{activity.fields.daysAgo} days ago</li>
        <li>{activity.fields.durationHours} Hours</li>
        <li><Badges selectedBadges={activity.fields.skills} />
        </li>
        <li>{activity.fields['totalPoints (Activity points x duration)']} points</li>
        {activity.fields.link ? <li>{activity.fields.link}</li> : ''}
    </ul>)
}
