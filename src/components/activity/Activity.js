import React from 'react';
import Badges from '../../components/badges/Badges';

export default function Activity({ activity }) {
    return (<ul>
        <li>{activity.name}</li>
        <li>{activity.date}</li>
        <li>{activity.duration}</li>
        <li><Badges selectedBadges={activity.badges} />
        </li>
        <li>{activity.activityScore}</li>
        <li>{activity.link}</li>
    </ul>)
}
