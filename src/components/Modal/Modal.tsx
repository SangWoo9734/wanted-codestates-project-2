import React from "react";

import * as S from "./style";

interface Props {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setModalState }: Props) {
  return (
    <S.ModalBackground
      onClick={() => {
        setModalState(false);
      }}
    >
      <S.ModalWrapper>
        <S.Message>검색결과가 없습니다.</S.Message>
        <S.Close
          onClick={() => {
            setModalState(false);
          }}
        >
          CLOSE
        </S.Close>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
}

export default Modal;
