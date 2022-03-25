import React, { useEffect } from "react";

import { FilterdTrackType } from "../../../modules/KartTrack/filteredData";

import * as S from "./style";
import RankCard from "../TrackRankCard";

interface Props {
  dataType: string;
  rankData: FilterdTrackType[];
}

function RankColumn({ dataType, rankData }: Props) {
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
            <p>트랙</p>
            <p>횟수</p>
            <p>리타율</p>
          </S.RankHeader>
          {rankData &&
            rankData.slice(3, 10).map((item, index) => {
              return (
                <S.RankRow key={index}>
                  <S.Rank>{index + 4}.</S.Rank>
                  <S.Content>{item.name}</S.Content>
                  <S.Content>{item.count}회</S.Content>
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
