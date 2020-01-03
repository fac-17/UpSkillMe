import React from "react";

import { FilterOpportunityButtonStyle, H3 } from './FilterOpportunityButton.style'

export default function FilterOpportunityButton({category, setCategory}) {
  return (
    <FilterOpportunityButtonStyle
      onClick={() => setCategory(category)}>
      <H3>{category}</H3>
    </FilterOpportunityButtonStyle>
  )
}
