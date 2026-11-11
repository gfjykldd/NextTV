export const ItemTypes = {
  MOVIE: "movie",
  TV: "tv",
  ANA: "ana",
};

export const DEFAULT_VIDEO_SOURCES = [
  {
    id: "1",
    name: "光速",
    key: "gszy",
    url: "https://api.guangsuapi.com/api.php/provide/vod/josn",
    enabled: true,
    type: "video",
  },
  {
    id: "2",
    name: "豪华",
    key: "hhzy",
    url: "https://hhzyapi.com/api.php/provide/vod/at/json",
    enabled: true,
    type: "video",
  },
  {
    id: "3",
    name: "红牛",
    key: "hnzy",
    url: "https://www.hongniuzy2.com/api.php/provide/vod/at/josn",
    enabled: true,
    type: "video",
  },
  {
    id: "4",
    name: "猫眼",
    key: "myzy",
    url: "https://api.maoyanapi.top/api.php/provide/vod/at/json",
    enabled: true,
    type: "video",
  },
  {
    id: "5",
    name: "如意",
    key: "rycj",
    url: "https://cj.rycjapi.com/api.php/provide/vod",
    enabled: true,
    type: "video",
  },
  {
    id: "6",
    name: "旺旺短剧",
    key: "wwdj",
    url: "https://api.wwzy.tv/api.php/provide/vod",
    enabled: true,
    type: "video",
  },
];

export const DEFAULT_DANMAKU_SOURCES = [];
