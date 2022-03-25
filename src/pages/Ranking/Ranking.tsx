import React from "react";

import * as S from "./style";
import { FcServices } from "react-icons/fc";

function Ranking() {
  return (
    <S.WaringWrapper>
      <FcServices />
      <S.Title>경기가 진행중입니다...</S.Title>
      <S.SubTitle>
        서비스 이용에 불편을 드려 죄송합니다. 빠른 시일 내에 복구하도록 하겠습니다.
      </S.SubTitle>
    </S.WaringWrapper>
  );
}

export default Ranking;
