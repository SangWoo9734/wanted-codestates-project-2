import styled from "styled-components";

export const UserGraphWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 lightgray;

  & > * {
    margin: auto;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
  font-size: 1.3rem;

  p {
    span {
      color: #07f;
    }
  }
`;
