import { getAllMatch, getMatchDetailData } from "../../api/getApiCall";
import { ParentMatchesType, MatchDetailType } from "../../api/type";

import kartMetaData from "../../assets/data/kart.json";
import trackMetaData from "../../assets/data/track.json";

export interface FilterdKartType {
  id: string;
  count: number;
  name: string;
  win: number;
  retired: number;
}

export interface FilterdTrackType {
  id: string;
  count: number;
  name: string;
  retired: number;
}

interface MetaType {
  id: string;
  name: string;
}

export const filteredForKart = (matchData: MatchDetailType[]) => {
  const filteredList: FilterdKartType[] = [];
  matchData.forEach((item) => {
    item.players.forEach((player) => {
      if (kartMetaData.find((element) => element.id === player.kart)) {
        const target = filteredList.find((element) => element.id === player.kart);
        if (target) {
          target.count += 1;
          target.win += item.matchResult === "1" ? 1 : 0;
          target.retired += player.matchRetired === "1" ? 1 : 0;
        } else {
          filteredList.push({
            id: player.kart,
            count: 1,
            name: (kartMetaData.find((element) => element.id === player.kart) as MetaType).name,
            win: item.matchResult === "1" ? 1 : 0,
            retired: player.matchRetired === "1" ? 1 : 0,
          });
        }
      }
    });
  });

  return filteredList.sort(function (a, b) {
    return b.count - a.count;
  });
};

export const filteredForTrack = (matchData: MatchDetailType[]) => {
  const filteredList: FilterdTrackType[] = [];

  matchData.forEach((item) => {
    if (trackMetaData.find((element) => element.id === item.trackId)) {
      const target = filteredList.find((element) => element.id === item.trackId);
      if (target) {
        item.players.forEach((player) => {
          target.count += 1;
          target.retired += player.matchRetired === "1" ? 1 : 0;
        });
      } else {
        let initRetired = 0;
        item.players.forEach((player) => {
          initRetired += player.matchRetired === "1" ? 1 : 0;
        });
        filteredList.push({
          id: item.trackId,
          count: item.players.length,
          name: (trackMetaData.find((element) => element.id === item.trackId) as MetaType).name,
          retired: initRetired,
        });
      }
    }
  });

  return filteredList.sort(function (a, b) {
    return b.count - a.count;
  });
};
