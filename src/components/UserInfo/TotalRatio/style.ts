import styled from "styled-components";

export const TotalRatioWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 lightgray;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 1.3rem;

  p {
    span {
      color: #07f;
    }
  }
`;

export const RatioGrid = styled.div`
  height: calc(100% - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export const RatioGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
`;
