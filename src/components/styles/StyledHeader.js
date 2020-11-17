import styled from "styled-components";

export const StyledHeader = styled.div`
  background: rgba(187,0,17,1);

  .header-content {
    max-width: max-content;
    padding: 1px 0;
    margin: 0 auto;
    text-align: center;

    h1 {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-size: 2rem
    font-weight: 900;
    line-height: 0;
    color: rgba(246,244,241,.95);
    filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.25))
    }

    p {
      font-size: 2.6rem;
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;
