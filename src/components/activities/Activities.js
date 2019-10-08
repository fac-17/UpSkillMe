import React from 'react';
import Activity from '../activity/Activity';

export default function Activities({ activities }) {
    return (
        <div>
            <h2>Activity log</h2>
            {activities.map(activity => {
                return (
                    <Activity activity={activity} />
                )
            })}
        </div>
    )
}