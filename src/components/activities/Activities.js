import React from "react";
import Activity from "../activity/Activity";
import {
   H2, H3
} from "./Activities.style"
import {ButtonDiv} from "../filter-opportunity-button/FilterOpportunityButton.style";
import FilterActivitiesButton from "../filter-activities-button/FilterActivitiesButton";

export default function Activities({ activities, project, setProject }) {
  if (!activities) {
    return <h3> Activities not loaded...</h3>;
  }

    if (project === '')
    {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying {activities.length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        project={'FALSE'}
                        setProject={setProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        project={'TRUE'}
                        setProject={setProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities.map((activity, index) => {
                    console.log(activity)
                    return (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            index={index}
                            activities={activities}
                        />
                    );
                })}
            </div>
        );
    }
    else {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying { activities.filter((x) => x.fields.Project === project).length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        project={'FALSE'}
                        setProject={setProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        project={'TRUE'}
                        setProject={setProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities
                    .filter((x) => x.fields.Project === project)
                    .map((activity, index) => {
                        console.log(activity)
                    return (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            index={index}
                            activities={activities}
                        />
                    );
                })}
            </div>
        );
    }
}
