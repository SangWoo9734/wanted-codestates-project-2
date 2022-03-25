import React, { useEffect, useState, useRef } from "react";

import { MatchDTO, MatchInfoDTO } from "../../../api/type";
import { calcMatchRowData } from "../../../modules/calcMatchRowData";

import * as S from "./style";
import MatchRow from "../MatchRow";

interface Props {
  matchData: MatchDTO[];
}

function MatchLog({ matchData }: Props) {
  const [totalMatch, setTotalMatch] = useState<MatchInfoDTO[]>([]);
  const [matchPage, setMatchPage] = useState<number>(0);
  const targetRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let totalMatch: MatchInfoDTO[] = [];
    matchData.forEach((match) => {
      totalMatch = [...totalMatch, ...match.matches];
    });

    setTotalMatch(totalMatch);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserver);
    targetRef.current && observer.observe(targetRef.current);
  }, [matchPage]);

  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        console.log("hihi");
      }
    });
  };

  return (
    <S.MatchTable>
      {totalMatch &&
        totalMatch.slice(0, (matchPage + 1) * 20).map((item, index) => {
          const calcResult = calcMatchRowData(item);
          const color =
            calcResult && calcResult.rank === "1"
              ? "first"
              : calcResult && parseInt(calcResult.rank) > calcResult.totalPlayer
              ? "fail"
              : "default";
          if (index + 1 === (matchPage + 1) * 20) {
            return <MatchRow ref={targetRef} calcResult={calcResult} color={color} key={index} />;
          }

          return <MatchRow color={color} calcResult={calcResult} key={index} />;
        })}
    </S.MatchTable>
  );
}

export default MatchLog;
