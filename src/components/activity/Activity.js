import React from 'react';

export default function Activity({ activity }) {
    return (<ul>
        <li>{activity.name}</li>
        <li>{activity.date}</li>
        <li>{activity.duration}</li>
        <li>{activity.badges}</li>
        <li>{activity.activityScore}</li>
        <li>{activity.link}</li>
    </ul>)
}