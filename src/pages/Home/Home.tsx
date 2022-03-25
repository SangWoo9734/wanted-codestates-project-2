import React, { useState } from "react";

import { getUserId } from "../../api/getApiCall";
import { UserType } from "../../api/type";
import { useNavigate } from "react-router";

import * as S from "./style";
import Modal from "../../components/Modal";

function Home() {
  const searchText = {
    user: "카트라이더 닉네임을 입력",
    body: "카트바디 이름을 입력",
    track: "트랙 이름을 입력",
  };
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("user");

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      void searchUser();
    }
  };

  const searchUser = async () => {
    await getUserId(userInput).then((response) => {
      if (!response) {
        setModalState(true);
        return;
      }
      const result = response.data as UserType;
      navigate(`/user?user=${result?.accessId}`);
    });
  };

  return (
    <>
      <S.HomeWrapper>
        <S.ImageBackground>
          <S.ImageBoxLeft>
            <img src="https://tmi.nexon.com/img/assets/covid_left.png" alt="left background" />
            <img src="https://tmi.nexon.com/img/main_left_bg.png" alt="left character background" />
          </S.ImageBoxLeft>
          <S.ImageBoxRight>
            <img src="https://tmi.nexon.com/img/assets/covid_right.png" alt="right background" />
            <img
              src="https://tmi.nexon.com/img/main_right_bg.png"
              alt="right character background"
            />
          </S.ImageBoxRight>
        </S.ImageBackground>
        <S.HomeSearchWrapper>
          <S.HomeTitle>
            <p className="small">넥슨 오픈API 기반</p>
            <p className="big">
              카트라이더 <span>전적</span> 검색
            </p>
          </S.HomeTitle>
          <S.HomeSearchModule>
            <select onChange={(event) => setSearchType(event.target.value)}>
              <option value="user">유저</option>
              <option value="body">카트</option>
              <option value="track">트랙</option>
            </select>
            <input
              type="text"
              name="userInput"
              placeholder="카트라이더 닉네임을 입력"
              onChange={(event) => setUserInput(event.target.value)}
              onKeyUp={(event) => handleEnter(event)}
            />
            <button onClick={() => searchUser}>
              <img src="https://tmi.nexon.com/img/assets/tmi_logo_default.svg" alt="" />
            </button>
          </S.HomeSearchModule>
        </S.HomeSearchWrapper>
      </S.HomeWrapper>
      {modalState && <Modal setModalState={setModalState} />}
    </>
  );
}

export default Home;
