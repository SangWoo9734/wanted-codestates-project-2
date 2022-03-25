import React from "react";

import { FilterdKartType } from "../../../modules/KartTrack/filteredData";

import * as S from "./style";
import RankCard from "../KartRankCard";

interface Props {
  dataType: string;
  rankData: FilterdKartType[];
}

function RankColumn({ dataType, rankData }: Props) {
  console.log(rankData);
  return (
    rankData && (
      <S.RankColumnWrapper>
        <RankCard rank={1} cardData={rankData[0]} />
        <S.RankCardWrapper>
          <RankCard rank={2} cardData={rankData[1]} />
          <RankCard rank={3} cardData={rankData[2]} />
        </S.RankCardWrapper>
        <S.RankTable>
          <S.RankHeader>
            <p>#</p>
            <p>카트</p>
            <p>이름</p>
            <p>승률</p>
            <p>리타율</p>
          </S.RankHeader>
          {rankData &&
            rankData.slice(3, 10).map((item, index) => {
              return (
                <S.RankRow key={index}>
                  <S.Rank>{index + 4}.</S.Rank>
                  <S.ImageWrapper>
                    <img
                      src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${item.id}.png?v=undefined`}
                      alt=""
                    />
                  </S.ImageWrapper>
                  <S.Content>{item.name}</S.Content>
                  <S.Content>{((item.win / item.count) * 100).toFixed(0)}%</S.Content>
                  <S.Content>{((item.retired / item.count) * 100).toFixed(0)}%</S.Content>
                </S.RankRow>
              );
            })}
        </S.RankTable>
      </S.RankColumnWrapper>
    )
  );
}

export default RankColumn;
