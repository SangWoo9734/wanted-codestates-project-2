import React from "react";

import { FilterdTrackType } from "../../../modules/KartTrack/filteredData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as S from "./style";

interface Props {
  rank: number;
  cardData: FilterdTrackType;
}

function RankCard({ cardData, rank }: Props) {
  return (
    <S.RankCardWrapper isFirst={rank === 1}>
      <S.RankCardMain>
        <S.Rank>{rank}.</S.Rank>
        <S.Name>{cardData.name}</S.Name>
      </S.RankCardMain>
      <S.RankCardStatus>
        <S.Content>
          <div>
            <p>횟수</p>
            <CircularProgressbar
              value={100}
              text={`${cardData.count}회`}
              styles={buildStyles({
                textSize: "24px",
                textColor: "#07f",
                pathColor: "#07f",
                trailColor: "lightgray",
              })}
            />
          </div>
        </S.Content>
        <S.Content>
          <div>
            <p>리타율</p>
            <CircularProgressbar
              value={(cardData.retired / cardData.count) * 100}
              text={`${((cardData.retired / cardData.count) * 100).toFixed(0)}%`}
              styles={buildStyles({
                textSize: "24px",
                textColor: "red",
                pathColor: "red",
                trailColor: "lightgray",
              })}
            />
          </div>
        </S.Content>
      </S.RankCardStatus>
    </S.RankCardWrapper>
  );
}

export default RankCard;
