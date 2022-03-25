import React from "react";

import { GraphData } from "../../../modules/createGraphData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as S from "./style";

interface Props {
  rank: number;
  cardData: GraphData;
}

function RankCard({ cardData, rank }: Props) {
  return (
    cardData && (
      <S.RankCardWrapper isFirst={rank === 1}>
        <S.RankCardMain>
          <div>
            <S.Rank>{rank}.</S.Rank>
            <S.Name>{cardData.name}</S.Name>
          </div>
          <S.ImageWrapper isFirst={rank === 1}>
            <img
              src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${cardData.id}.png?v=undefined`}
              alt=""
            />
          </S.ImageWrapper>
        </S.RankCardMain>
        <S.RankCardStatus>
          <S.Content>
            <div>
              <p>승률</p>
              <CircularProgressbar
                value={(cardData.win / cardData.count) * 100}
                text={`${((cardData.win / cardData.count) * 100).toFixed(0)}%`}
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
    )
  );
}

export default RankCard;
