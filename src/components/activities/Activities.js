import React from "react";
import Activity from "../activity/Activity";
import {
    H2, H3
} from "./Activities.style"
import {ButtonDiv} from "../filter-opportunity-button/FilterOpportunityButton.style";
import FilterActivitiesButton from "../filter-activities-button/FilterActivitiesButton";
import EventForm from "../add-event-form/EventForm";

export default function Activities({
                                       activities,
                                       filterProject,
                                       setFilterProject,
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
    if (!activities) {
        return <h3> Activities not loaded...</h3>;
    }

    if (filterProject === '') {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying {activities.length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        filterProject={'FALSE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        filterProject={'TRUE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities.map((activity, index) => {
                    return (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            index={index}
                            activities={activities}
                            isFormDisplayed={isFormDisplayed}
                            setFormDisplayed={setFormDisplayed}
                            activityButtonDisplay={activityButtonDisplay}
                            setActivityButtonDisplay={setActivityButtonDisplay}
                            closeButtonDisplay={closeButtonDisplay}
                            setCloseButtonDisplay={setCloseButtonDisplay}
                            activityName={activityName}
                            setActivityName={setActivityName}
                            date={date}
                            setDate={setDate}
                            duration={duration}
                            setDuration={setDuration}
                            supportingInfo={supportingInfo}
                            setSupportingInfo={setSupportingInfo}
                            activityType={activityType}
                            setActivityType={setActivityType}
                            badgeValues={badgeValues}
                            setBadgeValues={setBadgeValues}
                            setCopyActivity={setCopyActivity}
                        />
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying {activities.filter((x) => x.fields.Project === filterProject).length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        filterProject={'FALSE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        filterProject={'TRUE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities
                    .filter((x) => x.fields.Project === filterProject)
                    .map((activity, index) => {
                        return (
                            <Activity
                                key={activity.id}
                                activity={activity}
                                index={index}
                                activities={activities}
                                isFormDisplayed={isFormDisplayed}
                                setFormDisplayed={setFormDisplayed}
                                activityButtonDisplay={activityButtonDisplay}
                                setActivityButtonDisplay={setActivityButtonDisplay}
                                closeButtonDisplay={closeButtonDisplay}
                                setCloseButtonDisplay={setCloseButtonDisplay}
                                activityName={activityName}
                                setActivityName={setActivityName}
                                date={date}
                                setDate={setDate}
                                duration={duration}
                                setDuration={setDuration}
                                supportingInfo={supportingInfo}
                                setSupportingInfo={setSupportingInfo}
                                activityType={activityType}
                                setActivityType={setActivityType}
                                badgeValues={badgeValues}
                                setBadgeValues={setBadgeValues}
                                setCopyActivity={setCopyActivity}
                            />
                        );
                    })}
            </div>
        );
    }
}
