import React, { ForwardedRef, forwardRef } from "react";

import * as S from "./style";

interface clacResultType {
  hoursBefore: number;
  rank: string;
  totalPlayer: number;
  track: string;
  character: string;
  characterId: string;
  kartBody: string;
  kartBodyId: string;
  runningTime: string;
}

interface Props {
  calcResult: clacResultType;
  color: string;
}

function MatchRow(props: Props, ref: ForwardedRef<HTMLLIElement>) {
  return (
    <S.MatchRow ref={ref} color={props.color}>
      <S.MatchText>{props.calcResult.hoursBefore}시간 전</S.MatchText>
      <S.MatchRank color={props.color}>
        {parseInt(props.calcResult.rank) > props.calcResult.totalPlayer ? (
          <span>#리타이어</span>
        ) : (
          <>
            <span>#{props.calcResult.rank}</span> / {props.calcResult.totalPlayer}
          </>
        )}
      </S.MatchRank>
      <S.MatchText>{props.calcResult.track}</S.MatchText>
      <S.MatchImageWrapper>
        <S.MatchImage>
          <img
            src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${props.calcResult.characterId}.png`}
            alt="usedCharacter"
          />
        </S.MatchImage>
        <S.MatchImage>
          <img
            src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${props.calcResult.kartBodyId}.png`}
            alt="usedKartBody"
          />
        </S.MatchImage>
      </S.MatchImageWrapper>
      <S.MatchText>{props.calcResult.runningTime}</S.MatchText>
    </S.MatchRow>
  );
}

export default forwardRef(MatchRow);
