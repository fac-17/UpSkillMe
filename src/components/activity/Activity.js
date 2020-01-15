import React from "react";
import ActivityBadges from "../../components/activity-badges/ActivityBadges";

import {
    Div,
    ListStyle,
    ActivityLinkButton,
    StyledImg,
    H3,
    Hr
} from "./Activity.style";
import RepeatActivityButton from "../repeat-activity-button/RepeatActivityButton";

export default function Activity({
                                     activity,
                                     index,
                                     activities,
                                     isFormDisplayed,
                                     setFormDisplayed,
                                     activityButtonDisplay,
                                     setActivityButtonDisplay,
                                     closeButtonDisplay,
                                     setCloseButtonDisplay,
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
                                     setCopyActivity
                                 }) {
    if (!activity) {
        return <h2> Activity not loaded..</h2>;
    }

    return (
        <Div>
            <RepeatActivityButton
                isFormDisplayed={isFormDisplayed}
                setFormDisplayed={setFormDisplayed}
                activityButtonDisplay={activityButtonDisplay}
                setActivityButtonDisplay={setActivityButtonDisplay}
                closeButtonDisplay={closeButtonDisplay}
                setCloseButtonDisplay={setCloseButtonDisplay}
                activityName={activity.fields.nameOfActivity}
                setActivityName={setActivityName}
                date={activity.fields.date}
                setDate={setDate}
                duration={activity.fields.durationHours}
                setDuration={setDuration}
                supportingInfo={activity.fields.supportingInfo}
                setSupportingInfo={setSupportingInfo}
                activityType={activity.fields.activityType}
                setActivityType={setActivityType}
                badgeValues={activity.fields.skills}
                setBadgeValues={setBadgeValues}
                setCopyActivity={setCopyActivity}
            >
            </RepeatActivityButton>

            <ListStyle>
                <H3> Activity name: {activity.fields.nameOfActivity} </H3>
                <br></br>
                <li>Completed {activity.fields.daysAgo} days ago</li>
                <br></br>
                <li>Total hours: {activity.fields.durationHours} </li>
                <Hr/>
                <li>
                    <ActivityBadges selectedBadges={activity.fields.skills} data={activities}/>
                </li>
                <li>
                    {activity.fields["totalPoints (Activity points x duration)"]} points
                </li>

                {activity.fields.supportingInfo ? (
                    <li style={{marginTop: 15}}>
                        {activity.fields.supportingInfo}
                    </li>
                ) : (
                    ""
                )}
            </ListStyle>
        </Div>
    );
}
