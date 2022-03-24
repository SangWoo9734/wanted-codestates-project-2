import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000060;
  z-index: 10000;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
  height: 20vh;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 #00000090;
`;
export const Message = styled.p`
  font-size: 2rem;
`;
export const Close = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background: #07f;
  font-size: 1.3rem;
  color: white;
`;
