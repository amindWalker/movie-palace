import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  font-family: "Montserrat", sans-serif;
  background: rgba(187, 0, 17, 1);
  width: 15%;
  min-width: 200px;
  height: 4rem;
  color: rgba(239, 235, 231, 0.9);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 2rem;
  font-size: 24px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  border: none;
  opacity: 0.9;
  transform: scale(0.95);
  transition: all 0.3s;

  :hover {
    opacity: 1;
    transform: scale(1);
    font-size: 25px;
  }
`;
