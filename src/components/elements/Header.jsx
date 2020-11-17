import React from "react";

// Styled Components
import { StyledHeader } from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <a className="link-to" href="/">
        <strong>THE MOVIE</strong>
        <p>PALACE</p>
      </a>
    </div>
  </StyledHeader>
);

export default Header;
