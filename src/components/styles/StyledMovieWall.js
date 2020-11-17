import styled from "styled-components";

export const StyledMovieWall = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  > h1 {
    font-family: 'Arial', sans-serif;
    color: white;
    filter: invert();
    font-size: 32px;
    font-weight: 100;
    text-align: center;
    padding: 1rem 1rem;
    background: rgba(0,0,0,0.15);
    box-shadow: 0 5px 5px rgba(255,255,255,0.25);
    border-radius: 9px;
    opacity: 0.33;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
`;

export const StyledMovieWallContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
