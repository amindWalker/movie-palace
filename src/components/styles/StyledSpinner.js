import styled from "styled-components";

export const StyledSpinner = styled.div`
  border: 0.3rem solid rgba(221, 221, 221, 1);
  border-top: 5px solid rgba(200, 2, 8, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
