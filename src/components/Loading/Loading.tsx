import React from "react";

import * as S from "./style";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <S.LoadingBackground>
      <Oval color="#00BFFF" height={50} width={50} secondaryColor="#07f" />
      <p>Loading...</p>
    </S.LoadingBackground>
  );
}

export default Loading;
