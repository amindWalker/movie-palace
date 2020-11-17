import styled from "styled-components";

export const StyledMovieCard = styled.div`
  .card-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: sticky;
    transform: translateX(5%) translateY(-125%);
    background: rgba(64, 64, 64, 0.66);
    color: whitesmoke;
    font-weight: 800;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 0, 1);
    margin: 0 0 0 0;
  }
  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 6px;
    animation: animateMovieCard 0.5s;
    transform: scale(0.9);
    border: none;
    filter: drop-shadow(0 6px 3px rgba(0, 0, 0, 0.5));
    opacity: 0.9;
    transition: all ease 0.3s;
    cursor: pointer;

    :hover {
      transform: scale(0.95);
      filter: drop-shadow(0 0 9px rgba(255, 0, 0, 0.95));
      opacity: 1;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieCard {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
