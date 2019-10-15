import React from "react";
import { Link } from "react-router-dom";

export default function OpportunitiesButton() {
  return (
    <div>
      <Link to="/opportunities">
        <button>Opportunities</button>
      </Link>
    </div>
  );
}
