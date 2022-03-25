import React, { useEffect, useState } from "react";

import { filteredForKart, filteredForTrack } from "../../modules/KartTrack/filteredData";
import { getAllMatch, getMatchDetailData } from "../../api/getApiCall";
import { ParentMatchesType, MatchDetailType } from "../../api/type";

import * as S from "./style";
import { AiFillExclamationCircle } from "react-icons/ai";
import KartRankColumn from "../../components/KartTrack/KartRankColumn";
import TrackRankColumn from "../../components/KartTrack/TrackRankColumn";
import Loading from "../../components/Loading";

function KartTrack() {
  const [targetData, setTargetData] = useState<MatchDetailType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loadingState, setLoadingState] = useState<number>(0);

  const getTotalMatchData = async () => {
    setLoadingState(1);
    return await getAllMatch().then((response) => {
      return (response as ParentMatchesType).matches[0].matches.slice(0, 60).map((matchCode) => {
        return matchCode;
      });
    });
  };

  const getDetailData = async (matchCodeList: string[]) => {
    const res = matchCodeList.map(async (matchCode) => {
      setCount(count + 1);
      return await getMatchDetailData(matchCode);
    });
    const taskPromises = await Promise.all(res);
    return taskPromises as MatchDetailType[];
  };

  useEffect(() => {
    void getTotalMatchData().then((res) => {
      void getDetailData(res).then((result) => {
        setTargetData(result);
        setLoadingState(0);
      });
    });
  }, []);

  return (
    <S.KartTrackNoticeWrapper>
      {targetData.length > 20 && !loadingState ? (
        <>
          <S.Background>
            <S.AnimationFast />
            <S.AnimationSlow />
          </S.Background>
          <S.Notice>
            <AiFillExclamationCircle /> 최근 스피드개인전 120경기 기준으로 산정한 데이터입니다.
          </S.Notice>
          <S.KartTrackWrapper>
            <S.ColumnWrapper>
              <p>
                <span>트랙</span> 인기 순위
              </p>
              <TrackRankColumn dataType={"Track"} rankData={filteredForTrack(targetData)} />
            </S.ColumnWrapper>
            <S.ColumnWrapper>
              <p>
                <span>카드바디</span> 인기 순위
              </p>
              <KartRankColumn dataType={"Kart"} rankData={filteredForKart(targetData)} />
            </S.ColumnWrapper>
          </S.KartTrackWrapper>
        </>
      ) : (
        <Loading />
      )}
    </S.KartTrackNoticeWrapper>
  );
}

export default KartTrack;
