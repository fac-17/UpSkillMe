import React from "react";

import { FilterActivitiesButtonStyle, H3 } from './FilterActivitiesButton.style'

export default function FilterActivitiesButton({filterProject, setFilterProject}) {
    return (
        <FilterActivitiesButtonStyle
            onClick={() => setFilterProject(filterProject)}>
            <H3>{ filterProject === 'FALSE' ? "My activities" : "My projects" }</H3>
        </FilterActivitiesButtonStyle>
    )
}
