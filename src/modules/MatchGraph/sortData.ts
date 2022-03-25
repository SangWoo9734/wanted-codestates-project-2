import { GraphData } from "../createGraphData";

export const sortData = (sortData: GraphData[], sortType: string) => {
  switch (sortType) {
    case "트랙":
      return sortData.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        else return 0;
      });
    case "횟수":
      return sortData.sort(function (a, b) {
        return b.count - a.count;
      });
    case "승률":
      return sortData.sort(function (a, b) {
        return b.win / b.count - a.win / a.count;
      });
    case "기록":
      return sortData.sort(function (a, b) {
        return (
          (a.lapTime as number) / (a.count - a.retired) -
          (b.lapTime as number) / (b.count - b.retired)
        );
      });
    case "리타율":
      return sortData.sort(function (a, b) {
        return a.retired / a.count - b.retired / b.count;
      });
    default:
      return sortData;
  }
};
