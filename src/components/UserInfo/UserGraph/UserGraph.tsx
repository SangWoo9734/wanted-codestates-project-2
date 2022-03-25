import React, { useEffect, useState } from "react";

import { PieChart, Pie, Legend, Cell } from "recharts";
import { MatchInfoDTO } from "../../../api/type";

import * as S from "./style";

interface Props {
  matchData: MatchInfoDTO[];
}

interface miniDataType {
  rank: number;
  count: number;
}

function UserGraph({ matchData }: Props) {
  const [minData, setMinData] = useState<miniDataType[]>([]);
  const [randomColor, setRandomColor] = useState<string[]>([]);

  useEffect(() => {
    const target: miniDataType[] = [];

    matchData.forEach((match) => {
      if (match.player.matchRank) {
        const m = target.find((element) => element.rank === parseInt(match.player.matchRank));
        if (m) {
          m.count += 1;
        } else {
          target.push({
            rank: parseInt(match.player.matchRank),
            count: 1,
          });
        }
      } else {
        const m = target.find((element) => element.rank === 0);
        if (m) {
          m.count += 1;
        } else {
          target.push({
            rank: 0,
            count: 1,
          });
        }
      }
    });

    setMinData(target);
  }, [matchData]);

  useEffect(() => {
    const randColor: string[] = [];
    new Array(10).fill(0).forEach(() => {
      randColor.push("#" + Math.round(Math.random() * 0xffffff).toString(16));
    });

    setRandomColor(randColor);
  }, []);
  return (
    <S.UserGraphWrapper>
      <S.InnerWrapper>
        <p>
          <span>순이변동</span>추이
        </p>
      </S.InnerWrapper>
      {minData && randomColor && (
        <PieChart width={220} height={210}>
          <Pie
            data={minData}
            dataKey="count"
            nameKey="rank"
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            label
          >
            {minData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={randomColor[index]} />
            ))}
          </Pie>

          <Legend verticalAlign="top" height={20} />
        </PieChart>
      )}
    </S.UserGraphWrapper>
  );
}

export default UserGraph;
