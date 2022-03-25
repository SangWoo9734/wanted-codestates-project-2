import { getUserMatchData } from "../api/getApiCall";
import { MatchInfoDTO } from "../api/type";

export interface MostCount {
  kart?: string;
  character?: string;
  count: number;
}

const getData = async (userId: string) => {
  let totalMatches: MatchInfoDTO[] = [];
  const teamResult = await getUserMatchData(userId, "");
  teamResult?.matches.forEach((matchType) => {
    totalMatches = [...totalMatches, ...matchType.matches];
  });

  return totalMatches;
};

export const mostUseKartBody = (userId: string) => {
  let useCountKart: MostCount[] = [];
  return getData(userId)
    .then((result) => {
      result.forEach((data) => {
        const target = useCountKart.find((element) => element.kart === data.player.kart);
        if (target) {
          target.count += 1;
        } else {
          useCountKart.push({
            kart: data.player.kart,
            count: 1,
          });
        }
      });
    })
    .then(() => {
      useCountKart = useCountKart.sort((a, b) => {
        return b.count - a.count;
      });
      return useCountKart;
    });
};

export const mostUseCharacter = (userId: string) => {
  let useCountCharacter: MostCount[] = [];
  return getData(userId)
    .then((result) => {
      result.forEach((data) => {
        const target = useCountCharacter.find((element) => element.character === data.character);
        if (target) {
          target.count += 1;
        } else {
          useCountCharacter.push({
            character: data.character,
            count: 1,
          });
        }
      });
    })
    .then(() => {
      useCountCharacter = useCountCharacter.sort((a, b) => {
        return b.count - a.count;
      });
      return useCountCharacter;
    });
};
