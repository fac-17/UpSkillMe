import React from 'react';
import Badges from '../../components/badges/Badges';

export default function Activity({ activity }) {
React.useEffect (()=>{
},activity

)

    return (<ul>
        <h2> New Activity </h2>
        <li>{activity.fields.nameOfActivity}</li>
              <li>{activity.fields.date}</li>
<li>{activity.fields.durationHours} Hours</li>
        <li><Badges selectedBadges={activity.fields.skills} />
        </li>
            <li>{activity.fields['totalPoints (sActivity points x duration)']}</li>
        {activity.fields.link ? <li>{activity.fields.link}</li> : ''}
    </ul>)
}
