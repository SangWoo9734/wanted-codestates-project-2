import styled from "styled-components";

export const MatchRow = styled.li<{ color: string }>`
  height: 80px;
  line-height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 2fr 1fr;
  text-align: center;
  border: 1px solid lightgray;
  border-left: 4px solid
    ${({ color }) => (color === "first" ? "#0077ff" : color === "fail" ? "#f62459" : "#a1a1a1")};
  background: ${({ color }) =>
    color === "first" ? "#eceffa" : color === "fail" ? "#faebef" : "#ffffff"};
`;
export const MatchImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MatchImage = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  overflow: hidden;
  background: white;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 10px 0 #0000003d;
`;

export const MatchRank = styled.div<{ color: string }>`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bolder;
  color: ${({ color }) =>
    color === "first" ? "#0077ff" : color === "fail" ? "#f62459" : "#a1a1a1"};

  span {
    font-size: ${({ color }) => (color === "fail" ? "1.6rem" : "2.4rem")};
  }
`;

export const MatchText = styled.div`
  font-size: 1.2rem;
`;
