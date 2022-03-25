import styled from "styled-components";

export const RankCardWrapper = styled.div<{ isFirst: boolean }>`
  position: relative;
  width: ${({ isFirst }) => (isFirst ? "100%" : "49%")};
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  padding-right: ${({ isFirst }) => (isFirst ? "50%" : "10px")};
  background: white;
  box-shadow: 0 0 10px 0 #00000040;
`;

export const RankCardMain = styled.div`
  border-bottom: 1px solid lightgray;
`;
export const RankCardStatus = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  padding: 5px;
`;
export const Rank = styled.p`
  font-size: 2.4rem;
  font-style: italic;
  font-weight: bolder;
  color: #07f;
`;
export const Name = styled.p`
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  color: black;
`;
export const ImageWrapper = styled.div<{ isFirst: boolean }>`
  position: absolute;
  top: ${({ isFirst }) => (isFirst ? "50%" : "10px")};
  right: ${({ isFirst }) => (isFirst ? "0" : "10px")};
  transform: ${({ isFirst }) => (isFirst ? "translate(-10%, -50%)" : "none")};
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 150px;
  width: ${({ isFirst }) => (isFirst ? "40%" : "60px")};
  overflow: hidden;
  margin: auto;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 #00000040;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;

    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
