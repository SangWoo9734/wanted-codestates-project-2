import React, { useEffect, useState } from "react";

import { MatchInfoDTO } from "../../../api/type";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import * as S from "./style";

interface Props {
  matchData: MatchInfoDTO[];
}

interface miniDataType {
  count: number;
  win: number;
  retired: number;
}

function TotalRatio({ matchData }: Props) {
  const [ratioData, setRatioData] = useState<miniDataType>({
    count: 0,
    win: 0,
    retired: 0,
  });

  useEffect(() => {
    const matchResult: miniDataType = {
      count: 0,
      win: 0,
      retired: 0,
    };
    matchData.forEach((match) => {
      matchResult.count += 1;
      if (match.matchResult === "1") matchResult.win += 1;
      if (match.player.matchRetired === "1") matchResult.retired += 1;
    });

    setRatioData(matchResult);
  }, [matchData]);

  return (
    <S.TotalRatioWrapper>
      <S.InnerWrapper>
        <p>
          <span>종합</span>전적
        </p>
        <p>
          {ratioData.count}전 {ratioData.win}승 {ratioData.count - ratioData.win}패
        </p>
      </S.InnerWrapper>
      <S.RatioGrid>
        <S.RatioGraph>
          <p>승률</p>
          <CircularProgressbar
            value={(ratioData.win / ratioData.count) * 100}
            text={`${((ratioData.win / ratioData.count) * 100).toFixed(0)}%`}
            styles={buildStyles({
              textSize: "24px",
              textColor: "#07f",
              pathColor: "#07f",
              trailColor: "lightgray",
            })}
          />
        </S.RatioGraph>
        <S.RatioGraph>
          <p>완주율</p>
          <CircularProgressbar
            value={((ratioData.count - ratioData.retired) / ratioData.count) * 100}
            text={`${(((ratioData.count - ratioData.retired) / ratioData.count) * 100).toFixed(
              0,
            )}%`}
            styles={buildStyles({
              textSize: "24px",
              textColor: "rgb(168, 213, 77)",
              pathColor: "rgb(168, 213, 77)",
              trailColor: "lightgray",
            })}
          />
        </S.RatioGraph>
        <S.RatioGraph>
          <p>리타이어율</p>
          <CircularProgressbar
            value={(ratioData.retired / ratioData.count) * 100}
            text={`${((ratioData.retired / ratioData.count) * 100).toFixed(0)}%`}
            styles={buildStyles({
              textSize: "24px",
              textColor: "rgb(226, 62, 92)",
              pathColor: "rgb(226, 62, 92)",
              trailColor: "lightgray",
            })}
          />
        </S.RatioGraph>
      </S.RatioGrid>
      <S.InnerWrapper>
        <p>
          <span>최다주행</span>모드
        </p>
        <p></p>
      </S.InnerWrapper>
    </S.TotalRatioWrapper>
  );
}

export default TotalRatio;
