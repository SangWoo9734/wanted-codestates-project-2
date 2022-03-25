import styled from "styled-components";

export const LoadingBackground = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    margin: auto;
  }
  p {
    font-size: 2rem;
    margin-top: 15px;
  }
`;
