import React, { useState, useEffect } from "react";

import { MatchDTO, MatchInfoDTO } from "../../../api/type";
import {
  GraphData,
  timeToString,
  createTrackGraphData,
  createKartGraphData,
} from "../../../modules/createGraphData";
import { sortData } from "../../../modules/MatchGraph/sortData";

import * as S from "./style";

interface Props {
  matchData: MatchDTO[];
}
function MatchGraph({ matchData }: Props) {
  const [dataType, setDataType] = useState<string>("track");
  const [sortType, setSortType] = useState<string>("");
  const [activeRow, setActiveRow] = useState<number>(0);
  const [trackData, setTrackData] = useState<GraphData[]>([]);
  const [kartData, setKartData] = useState<GraphData[]>([]);

  const sortTargetData = () => {
    dataType === "track"
      ? setTrackData([...sortData(trackData, sortType)])
      : setKartData([...sortData(kartData, sortType)]);
  };

  useEffect(() => {
    let allMatch: MatchInfoDTO[] = [];
    matchData.forEach((match) => {
      allMatch = [...allMatch, ...match.matches];
    });
    setTrackData(createTrackGraphData(allMatch));
    setKartData(createKartGraphData(allMatch));
  }, []);

  useEffect(() => {
    sortType && sortTargetData();
    setActiveRow(0);
  }, [sortType]);

  return (
    <div>
      <S.TypeChangeButtonWrapper active={dataType === "track"}>
        <S.TypeChangeButton onClick={() => setDataType("track")} active={dataType === "track"}>
          트랙
        </S.TypeChangeButton>
        <S.TypeChangeButton onClick={() => setDataType("kart")} active={dataType === "kart"}>
          카트
        </S.TypeChangeButton>
      </S.TypeChangeButtonWrapper>
      <S.MatchGraphTableWrapper dataType={dataType}>
        <S.MatchGraphTableHeader>
          <p>선택</p>
          <button onClick={() => setSortType("트랙")}>트랙</button>
          <button onClick={() => setSortType("횟수")}>횟수</button>
          <button onClick={() => setSortType("승률")}>승률</button>
          <button onClick={() => setSortType(dataType === "track" ? "기록" : "리타율")}>
            {dataType === "track" ? "기록" : "리타율"}
          </button>
        </S.MatchGraphTableHeader>
        <S.TableInnerWrapper>
          {(dataType === "track" ? trackData : kartData).map((data, index) => {
            return (
              <S.MatchGraphTableRow
                key={data.id}
                onClick={() => {
                  setActiveRow(index);
                }}
                active={activeRow === index}
              >
                <S.RadioWrapper>
                  <input
                    type="radio"
                    name="onGraph"
                    checked={activeRow === index}
                    onChange={() => {
                      setActiveRow(index);
                    }}
                  />
                </S.RadioWrapper>
                <S.RowName>
                  {/* <img src="" alt="" /> */}
                  <p>{data.name}</p>
                </S.RowName>
                <p>{data.count}</p>
                <p>{((data.win / data.count) * 100).toFixed(0)}%</p>
                <p>
                  {dataType === "track"
                    ? timeToString((data.lapTime as number) / (data.count - data.retired))
                    : ((data.retired / data.count) * 100).toFixed(1)}
                </p>
              </S.MatchGraphTableRow>
            );
          })}
        </S.TableInnerWrapper>
      </S.MatchGraphTableWrapper>
    </div>
  );
}

export default MatchGraph;
