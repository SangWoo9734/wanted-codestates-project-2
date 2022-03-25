import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { AiFillExclamationCircle, AiOutlineArrowUp } from "react-icons/ai";
import { IoIosCalculator } from "react-icons/io";
import { getUserInfo, getUserMatchData } from "../../api/getApiCall";
import { UserType, MatchDTO } from "../../api/type";
import { MostCount, mostUseKartBody, mostUseCharacter } from "../../modules/userMost";

import * as S from "./style";
import User from "../../components/UserInfo/User";
import TotalRatio from "../../components/UserInfo/TotalRatio";
import UserGraph from "../../components/UserInfo/UserGraph";
import Comment from "../../components/UserInfo/Comment";
import MatchGraph from "../../components/UserInfo/MatchGraph";
import MatchLog from "../../components/UserInfo/MatchLog";
import Loading from "../../components/Loading";

function UserInfo() {
  const [userInfo, setUserInfo] = useState<UserType>();
  const [matchData, setMatchData] = useState<MatchDTO[]>([]);
  const [mostKart, setMostKart] = useState<MostCount[]>([]);
  const [mostCharacter, setMostCharacter] = useState<string>("");
  const [matchType, setMatchType] = useState<string>("개인");
  const [loadingState, setLoadingState] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("user");

  const setUserData = async (matchType: string) => {
    setLoadingState(1);
    const userResult = await getUserInfo(userId as string);
    const matchResult = await getUserMatchData(userId as string, matchType);
    const mostKart = await mostUseKartBody(userId as string);
    const mostCharacter = await mostUseCharacter(userId as string);

    userResult && setUserInfo(userResult);
    matchResult && setMatchData(matchResult.matches);
    mostKart && setMostKart(mostKart);
    mostCharacter && setMostCharacter(mostCharacter[0].character as string);
  };

  useEffect(() => {
    void setUserData(matchType).then(() => {
      setLoadingState(0);
    });
  }, [matchType]);

  return (
    <S.UserInfoWrapper>
      {!loadingState && userInfo ? (
        <>
          <S.Notice>
            <AiFillExclamationCircle />
            <p>카트라이더 매치데이터는 최근 1년치 데이터만 확인 가능합니다.</p>
          </S.Notice>
          <User
            user={userInfo}
            mostKart={mostKart}
            mostCharacter={mostCharacter}
            matchType={matchType}
            setMatchType={setMatchType}
          />
          <S.VirtualFight>
            <p>{`1대1 매칭 시뮬레이터 - '${userInfo.name}'와 가상 대결을 평쳐보세요.`}</p>
            <button>
              <IoIosCalculator />
              <p>매칭하기</p>
            </button>
          </S.VirtualFight>
          <S.MatchTotalInfoGrid>
            <TotalRatio matchData={matchData[0].matches} />
            <UserGraph matchData={matchData[0].matches} />
            <Comment />
          </S.MatchTotalInfoGrid>
          <S.MatchGrid>
            <MatchGraph matchData={matchData} />
            <MatchLog matchData={matchData} />
          </S.MatchGrid>
        </>
      ) : (
        <Loading />
      )}
      <S.GoTop>
        <AiOutlineArrowUp />
      </S.GoTop>
    </S.UserInfoWrapper>
  );
}

export default UserInfo;
