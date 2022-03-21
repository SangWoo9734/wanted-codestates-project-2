import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

function Footer() {
  return (
    <S.FooterWrapper>
      <a href="https://www.nexon.com">
        <img src="https://ssl.nexon.com/s2/game/fo4/CBT/common/logo_nexon.png" alt="Nexon" />
      </a>
      <p>Data based on NEXON DEVELOPERS</p>
    </S.FooterWrapper>
  );
}

export default Footer;
