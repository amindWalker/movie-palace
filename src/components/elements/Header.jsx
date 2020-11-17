import React from "react";

// Styled Components
import { StyledHeader } from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <a className="link-to" href="/">
        <h1>
          THE
          <br /> MOVIE
        </h1>
        <h2>PALACE</h2>
      </a>
    </div>
  </StyledHeader>
);

export default Header;
