import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 10%;
  background: rgba(30, 30, 30, 1);
  padding: 25px 20px 25px 20px;
  box-sizing: border-box;
  color: rgba(239, 235, 231, 0.9);
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: rgba(54, 54, 54, 0.35);
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: rgba(239, 235, 231, 0.9);

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: rgba(187, 0, 17, 1);
    z-index: 1000;
  }

  input {
    font-size: 1.5rem;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: rgba(239, 235, 231, 0.9);
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: rgba(239, 235, 231, 0.19);
    }

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;
