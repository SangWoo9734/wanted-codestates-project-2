import styled from "styled-components";

export const RankColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const RankCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const RankTable = styled.ul`
  li {
    display: grid;
    grid-template-columns: 1.5fr 3fr 3fr 2fr 2fr;
    width: 100%;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000040;
    * {
      text-align: center;
    }
  }
`;
export const RankHeader = styled.li`
  height: 40px;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 40px;
  background: #0077ff38;
`;
export const RankRow = styled.li`
  height: 80px;
  background: white;
  line-height: 80px;
`;

export const Rank = styled.p`
  font-size: 2.4rem;
  font-style: italic;
  font-weight: bolder;
  color: #07f;
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  overflow: hidden;
  margin: auto;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 #00000040;

  img {
    width: 100%;
  }
`;

export const Content = styled.p`
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: bolder;
  color: black;
`;
