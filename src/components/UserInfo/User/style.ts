import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border: 1px solid lightgray;
  border-left: 4px solid #07f;
  background: url("https://tmi.nexon.com/img/background_flag_w.png");
`;
export const UserImages = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  width: 150px;
  overflow: hidden;
  margin-right: 20px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 #0000003d;
`;

export const UserDetail = styled.div`
  width: calc(100% - 150px);
  padding: 0 15px;
`;
export const UserDetailInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserInfo = styled.div``;

export const UserName = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const UserLevel = styled.p`
  font-size: 1.4rem;
  color: gray;
  margin-bottom: 10px;
`;
export const UserMatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
`;
export const MatchType = styled.div`
  display: flex;
  margin-right: 15px;
  border: 1px solid #07f;
  border-radius: 5px;
  overflow: hidden;
`;

export const MatchTypeBtn = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  padding: 3px 30px;
  background: ${({ active }) => (active ? "#07f" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#07f")};

  svg {
    margin-right: 5px;
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const UserReaction = styled.div`
  display: flex;
  align-items: center;
`;
export const ReactionBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  svg {
    margin-right: 5px;
  }
`;

export const UserKart = styled.div`
  p {
    font-size: 1.4rem;
    color: gray;
    margin-bottom: 10px;
  }
`;

export const UserMostKart = styled.div`
  display: flex;
  margin-bottom: 15px;

  div {
    display: flex;
    align-items: center;
    aspect-ratio: 1;
    width: 60px;
    margin-right: 15px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 #0000003d;
    overflow: hidden;
  }
`;
