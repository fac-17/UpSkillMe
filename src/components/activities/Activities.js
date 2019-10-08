import React from 'react';
import Activity from '../activity/Activity';

export default function Activities({ activities }) {
    return (
        <div>
            <h2>Your activities</h2>
            {activities.map(activity => {
                return (
                    <Activity activity={activity} />
                )
            })}
        </div>
    )
}