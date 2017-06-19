const host = "http://localhost:1002";
const apiMap = {
    personalized: host + "/personalized",
    latestMusic: host + "/personalized/newsong",
    hotMusic: host + '/top/list?idx=1',
    hotSearch: host + '/search/hot',
    searchSuggest: host + '/search/suggest',
    searchResult: host + '/search',
    songDetail: host + '/song/detail',
    songLyrics: host + '/lyric',
    songUrl: host + '/music/url'
};

export {
    apiMap
}
