import axios from "axios";

import { ParentMatchesType, UserType, MatchInfo, MatchDetailType } from "./type";
import gemeTypeMeta from "../assets/data/gameType.json";

const headers: {
  Authorization: string;
} = {
  Authorization: process.env.REACT_APP_API_KEY as string,
};

const getGameQuery = (infoType: string) => {
  let gameTypeString = "";

  if (infoType === "팀") {
    gemeTypeMeta.forEach((item) => {
      gameTypeString += item.name.includes("팀") ? `${item.id},` : "";
    });
  } else if (infoType === "개인") {
    gemeTypeMeta.forEach((item) => {
      gameTypeString += !item.name.includes("팀") ? `${item.id},` : "";
    });
  }

  return gameTypeString;
};

export const getUserId = async (nickName: string) => {
  try {
    // const { data }: { data: UserType } = await axios.get(`/kart/v1.0/users/nickname/${nickName}`, {
    //   headers: headers,
    // });
    const response = await axios.get(`/kart/v1.0/users/nickname/${nickName}`, {
      headers: headers,
    });

    return response;
  } catch (error) {
    return false;
  }
};

export const getUserInfo = async (id: string) => {
  try {
    const { data }: { data: UserType } = await axios.get(`/kart/v1.0/users/${id}`, {
      headers: headers,
    });

    return data;
  } catch (error) {
    return false;
  }
};

export const getUserMatchData = async (userId: string, infoType: string) => {
  const gameTypeString = getGameQuery(infoType);
  try {
    const { data }: { data: MatchInfo } = await axios.get(`/kart/v1.0/users/${userId}/matches`, {
      headers: headers,
      params: {
        limit: 200,
        match_types: gameTypeString,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllMatch = async (infoType: string) => {
  const gameTypeString = getGameQuery(infoType);
  try {
    const { data }: { data: ParentMatchesType } = await axios.get(`/kart/v1.0/matches/all`, {
      headers: headers,
      params: {
        limit: 200,
        match_types: "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a",
      },
    });

    return data;
  } catch (error) {
    return [];
  }
};

export const getMatchDetailData = async (matchId: string) => {
  try {
    const { data }: { data: MatchDetailType } = await axios.get(`/kart/v1.0/matches/${matchId}`, {
      headers: headers,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
