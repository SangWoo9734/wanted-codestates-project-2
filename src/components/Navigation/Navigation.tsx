import React from "react";
import { useNavigate } from "react-router";

import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface Menu {
  name: string;
  url: string;
}

function Navigation() {
  const navigate = useNavigate();
  const menus: Menu[] = [
    { name: "홈", url: "/" },
    { name: "랭킹", url: "/rank" },
    { name: "카트/트랙", url: "/bodytrack" },
  ];

  return (
    <S.NavigationWrapper>
      <S.TopNavigation>
        <S.TopInnerWrapper>
          <S.LogoWrapper
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="https://tmi.nexon.com/img/assets/logo_kart.png" alt="kartLogo" />
            <AiOutlineClose />
            <img src="https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg" alt="tmiLogo" />
          </S.LogoWrapper>
          <S.LinkToNexon>
            <a href="https://kart.nexon.com/Main/Index.aspx">카트라이더 바로가기</a>
          </S.LinkToNexon>
        </S.TopInnerWrapper>
      </S.TopNavigation>
      <S.BottomNavigation needBackground={window.location.pathname === "/"}>
        <S.BottomInnerWrapper>
          {menus.map((menu: Menu, index: number) => {
            return (
              <S.MenuButton
                key={index}
                onClick={() => {
                  navigate(menu.url);
                }}
              >
                {menu.name}
              </S.MenuButton>
            );
          })}
        </S.BottomInnerWrapper>
      </S.BottomNavigation>
    </S.NavigationWrapper>
  );
}

export default Navigation;
