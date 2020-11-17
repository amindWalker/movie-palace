import styled from "styled-components";

export const StyledHeroImage = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.95)
      100%
    ),
    url('${props.image}'), rgba(24,24,24,1)`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, .5);
    box-shadow: 9px 9px 0 rgba(255,255,255,.1);
    padding: 1rem
    color: rgba(239,235,231,.9);

    h1 {
      font-size: 48px;
      color: rgba(239,235,231,.9);

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: rgba(239,235,231,.9);
      }
    }

    p {
      font-size: 22px;
      line-height: 26px;
      color: rgba(239,235,231,.9);

      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: rgba(239,235,231,.9);
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
