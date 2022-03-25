import { MatchInfoDTO } from "../api/type";

import trackMetaData from "../assets/data/track.json";
import kartMetaData from "../assets/data/kart.json";

export interface GraphData {
  id: string;
  name: string;
  count: number;
  win: number;
  retired: number;
  lapTime?: number;
}

export const timeToString = (time: number) => {
  if (!time) return "--'--'--";
  const minute = Math.floor(time / (1000 * 60));
  const second = Math.floor((time % (1000 * 60)) / 1000);
  const mili = Math.floor(((time % (1000 * 60)) % 1000) / 10);
  return `${minute}'${second}'${mili}`;
};

export const createTrackGraphData = (match: MatchInfoDTO[]) => {
  const userTrackInfo: GraphData[] = [];

  match.forEach((game) => {
    const trackName = trackMetaData.find((element) => element.id === game.trackId)?.name;

    if (userTrackInfo.find((element) => element.name === trackName)) {
      const target = userTrackInfo.find((element) => element.name === trackName) as GraphData;
      target.count += 1;
      (target.lapTime as number) +=
        game.player.matchRetired === "1" ? 0 : parseInt(game.player.matchTime);
      if (game.matchResult === "1") target.win += 1;
      if (game.player.matchRetired === "1") target.retired += 1;
    } else {
      userTrackInfo.push({
        id: game.trackId,
        name: trackName as string,
        count: 1,
        win: game.matchResult === "1" ? 1 : 0,
        retired: game.player.matchRetired === "1" ? 1 : 0,
        lapTime: game.player.matchRetired === "1" ? 0 : parseInt(game.player.matchTime),
      });
    }
  });
  return userTrackInfo;
};

export const createKartGraphData = (match: MatchInfoDTO[]) => {
  const userKartInfo: GraphData[] = [];

  match.forEach((game) => {
    const kartName = kartMetaData.find((element) => element.id === game.player.kart)?.name;

    if (userKartInfo.find((element) => element.name === kartName)) {
      const target = userKartInfo.find((element) => element.name === kartName) as GraphData;
      target.count += 1;

      if (game.matchResult === "1") target.win += 1;
      if (game.player.matchRetired === "1") target.retired += 1;
    } else {
      userKartInfo.push({
        id: game.player.kart,
        name: kartName as string,
        count: 1,
        win: game.matchResult === "1" ? 1 : 0,
        retired: game.player.matchRetired === "1" ? 1 : 0,
      });
    }
  });
  return userKartInfo;
};
