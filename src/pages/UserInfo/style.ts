import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  max-width: 1000px;
  width: 80%;
  height: fit-content;
  margin: auto;
  padding: 90px 0;

  & > div {
    margin-top: 15px;
  }
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  svg {
    margin-right: 5px;
  }
`;

export const VirtualFight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 30px;
  padding: 10px 15px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  animation: Gradiant 13s ease infinite;

  button {
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    padding: 5px 10px;

    svg {
      font-size: 1.7rem;
      margin-right: 5px;
    }
  }

  @keyframes Gradiant {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const MatchTotalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  height: 250px;
`;

export const MatchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px;
`;

export const GoTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 60px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: 0 0 10px 0 #00000040;
  z-index: 3000;
`;
