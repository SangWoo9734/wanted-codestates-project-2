import styled from "styled-components";

export const KartTrackNoticeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: auto;
  padding-top: 100px;
`;
export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60vh;
  background: #005fcc;
`;
export const AnimationFast = styled.div`
  content: " ";
  background: url(https://tmi.nexon.com/img/background_wave.svg) repeat-x;
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 150px;
  animation: moveInfinit 13s linear infinite;
  @keyframes moveInfinit {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const AnimationSlow = styled.div`
  content: " ";
  background: url(https://tmi.nexon.com/img/background_wave.svg) repeat-x;
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 150px;
  animation: moveInfinit 15s linear infinite;
  @keyframes moveInfinit {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const Notice = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  background: #77bbff;
  margin: auto;
  padding: 10px 15px;
  border-radius: 5px;
  svg {
    margin-right: 10px;
  }
`;

export const KartTrackWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  width: 80%;
  margin: auto;
`;

export const ColumnWrapper = styled.div`
  position: relative;
  padding: 20px;
  z-index: 20;
  & > p {
    font-size: 2.5rem;
    font-style: italic;
    color: white;

    span {
      font-weight: bold;
    }
  }
`;

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
