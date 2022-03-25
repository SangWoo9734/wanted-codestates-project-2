import { MatchInfoDTO } from "../api/type";

import trackMeta from "../assets/data/track.json";
import characterMeta from "../assets/data/character.json";
import kartMeta from "../assets/data/kart.json";

interface returnType {
  id: string;
  name: string;
}

const getDataFromMeta = (type: string, target: string) => {
  const INIT_FORM = { id: "1", name: "이름없음" };
  let result: returnType;
  switch (type) {
    case "track":
      result = trackMeta.find((element) => element.id === target) as returnType;
      result = result ? result : INIT_FORM;
      break;
    case "character":
      result = characterMeta.find((element) => element.id === target) as returnType;
      result = result ? result : INIT_FORM;
      break;
    case "kart":
      result = kartMeta.find((element) => element.id === target) as returnType;
      result = result ? result : INIT_FORM;
      break;
    default:
      result = INIT_FORM;
      alert("잘못된 접근입니다.");
  }
  return result;
};

const calcTime = (time1: string, time2: string) => {
  return Date.parse(time1) - Date.parse(time2);
};

const timeToString = (time: number) => {
  const minute = Math.floor(time / (1000 * 60));
  const second = Math.floor((time % (1000 * 60)) / 1000);
  const mili = Math.floor(((time % (1000 * 60)) % 1000) / 10);
  return `${minute}'${second}'${mili}`;
};

export const calcMatchRowData = (matchData: MatchInfoDTO) => {
  const now = new Date();
  const rowData = {
    hoursBefore: 0,
    rank: "",
    totalPlayer: 0,
    track: "",
    character: "",
    characterId: "",
    kartBody: "",
    kartBodyId: "",
    runningTime: "",
  };

  rowData.hoursBefore = Math.floor(
    calcTime(now.toString(), matchData.startTime.toString()) / (1000 * 60 * 60),
  );
  rowData.rank = matchData.player.matchRank;
  rowData.totalPlayer = matchData.playerCount;
  rowData.track = getDataFromMeta("track", matchData.trackId).name;
  rowData.character = getDataFromMeta("character", matchData.character).name;
  rowData.characterId = matchData.character;
  rowData.kartBody = getDataFromMeta("kart", matchData.player.kart).name;
  rowData.kartBodyId = matchData.player.kart;
  rowData.runningTime = matchData.player.matchTime
    ? timeToString(parseInt(matchData.player.matchTime))
    : "--'--'--";

  return rowData;
};
