import React from "react";
import { Link } from "react-router-dom";
import { OpportunitiesButtonStyle } from './OpportunitiesButton.style'
export default function OpportunitiesButton() {
  return (
    <div>
      <Link to="/opportunities">
        <OpportunitiesButtonStyle>Opportunities</OpportunitiesButtonStyle>
      </Link>
    </div>
  );
}
