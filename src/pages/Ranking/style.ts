import styled from "styled-components";

export const WaringWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);

  svg {
    font-size: 12rem;
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  color: lightgray;
`;
