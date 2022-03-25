import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  background: url("https://tmi.nexon.com/img/main_bg1.png");
  background-size: cover;
  background-position: 50%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #005fcc;
  opacity: 0.7;
`;

export const ImageBackground = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;

  div {
    position: relative;
    display: flex;
    align-items: center;
    width: 28%;

    img {
      position: absolute;
    }
  }
`;

export const ImageBoxLeft = styled.div`
  img {
    left: 0;
    animation-name: moveLeftToRight;
    animation-duration: 1s;
  }
  @keyframes moveLeftToRight {
    0% {
      left: -150px;
    }
    100% {
      left: 0px;
    }
  }
`;
export const ImageBoxRight = styled.div`
  img {
    right: 0;
    animation-name: moveRightToLeft;
    animation-duration: 1s;
  }
  @keyframes moveRightToLeft {
    0% {
      right: -150px;
    }
    100% {
      right: 0px;
    }
  }
`;

export const HomeSearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 1;
`;

export const HomeTitle = styled.div`
  margin-bottom: 30px;
  text-align: center;
  .small {
    font-size: 3rem;
  }
  .big {
    font-size: 3.5rem;

    span {
      font-weight: bold;
    }
  }
`;

export const HomeSearchModule = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  border: 4px solid white;
  border-radius: 50px;
  font-size: 2rem;
  overflow: hidden;
  animation-name: searchInit;
  animation-duration: 1s;

  * {
    opacity: 1;
    animation-name: fadeIn;
    animation-duration: 1.5s;
  }

  select {
    width: 80px;
    background: none;
    padding: 0 10px;
    border: none;
    outline: none;
  }

  input {
    border: none;
    background: none;
    width: 30vw;
    height: 40px;
    padding: 0 20px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
      opacity: 0.6;
    }
  }

  button {
    width: fit-content;
    padding: 0 10px;
  }

  @keyframes searchInit {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
