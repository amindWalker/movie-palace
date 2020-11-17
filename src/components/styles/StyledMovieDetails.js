import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../API";

export const StyledMovieDetails = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "rgba(0,0,0,.5)"};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  animation: animateMovieinfo 1s;

  .moviedetails-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.8);
    border-radius: 20px;
    position: relative;
  }

  .moviedetails-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .moviedetails-text {
    padding: 40px;
    color: rgba(239, 235, 231, 0.9);
    overflow: hidden;

    h1 {
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: "Arial", sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(
      rgba(128, 128, 128, 0.25),
      rgba(220, 220, 220, 0.25)
    );
    color: whitesmoke;
    font-weight: 800;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 0, 1);
    margin: 0 0 0 0;
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
