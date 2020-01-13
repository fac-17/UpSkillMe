import React from "react";

import { FilterActivitiesButtonStyle, H3 } from './FilterActivitiesButton.style'

export default function FilterActivitiesButton({project, setProject}) {
    return (
        <FilterActivitiesButtonStyle
            onClick={() => setProject(project)}>
            <H3>{ project === 'FALSE' ? "My activities" : "My projects" }</H3>
        </FilterActivitiesButtonStyle>
    )
}
