import styled from "styled-components";

export const StyledHeader = styled.div`
  background: rgba(187, 0, 17, 1);

  .header-content {
    max-width: max-content;
    padding: 1px 0;
    margin: 0 auto;
    text-align: center;

    strong {
      font-family: "Montserrat", sans-serif;
      text-decoration: none;
      font-size: 2.2rem;
      color: rgba(246, 244, 241, 0.95);
      filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
    }

    p {
      line-height: 0;
      margin-top: 1.5rem;
      color: rgba(246, 244, 241, 0.95);
      font-family: "Montserrat", sans-serif;
      font-size: 3rem;
      font-weight: 900;
      text-decoration: none;
      filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;
