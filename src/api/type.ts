export interface ParentMatchesType {
  matches: ChildMatchesType[];
}

export interface ChildMatchesType {
  matches: string[];
  matchType: string;
}

export interface ChildMatchesType {
  matches: string[];
  matchType: string;
}

export interface UserType {
  accessId: string;
  level: number;
  name: string;
}

export interface PlayerDTO {
  character: string;
  kart: string;
  license: string;
  pet: string;
  flyingPet: string;
  partsEngine: string;
  partsHandle: string;
  partsWheel: string;
  partsKit: string;
  matchRank: string;
  matchWin: string;
  matchTime: string;
  matchRetired: string;
  rankinggrade2: string;
  characterName: string;
}

export interface MatchInfoDTO {
  accountNo: string;
  matchId: string;
  matchType: string;
  matchResult: string;
  teamId: string;
  character: string;
  startTime: Date;
  endTime: Date;
  playTime: number;
  channelName: string;
  trackId: string;
  playerCount: number;
  player: PlayerDTO;
}

export interface MatchDetailType {
  channelName: string;
  startTime: string;
  endTime: string;
  gameSpeed: number;
  matchId: string;
  matchResult: string;
  matchType: string;
  playTime: number;
  trackId: string;
  players: PlayerDTO[];
}

export interface MatchDTO {
  matchType: string;
  matches: MatchInfoDTO[];
}

export interface MatchInfo {
  nickname: string;
  matches: MatchDTO[];
}
