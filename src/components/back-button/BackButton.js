import React from "react";
import { Link } from "react-router-dom";
import { BackButtonStyle } from './BackButton.style'
export default function BackButton() {
    return (
        <div>
            <Link to="/profile">
                <BackButtonStyle>Back</BackButtonStyle>
            </Link>
        </div>
    );
}
