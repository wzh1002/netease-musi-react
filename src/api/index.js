import { localFetch, localSave, addUrlParams } from '../utils';

const NAME_SPACE = 'NETEASE_MUSIC';
const HOST = "http://localhost:1002";
const map = {
    personalized: HOST + "/personalized",
    latestMusic: HOST + "/personalized/newsong",
    hotMusic: HOST + '/top/list?idx=1',
    hotSearch: HOST + '/search/hot',
    searchSuggest: HOST + '/search/suggest',
    searchResult: HOST + '/search',
    songDetail: HOST + '/song/detail',
    songLyrics: HOST + '/lyric',
    songUrl: HOST + '/music/url'
};

const fetchPersonalized = () => fetch(map.personalized);
const fetchLatestMusic = () => fetch(map.latestMusic);
const fetchHotMusic = () => fetch(map.hotMusic);
const fetchHotSearch = () => fetch(map.hotSearch);
const fetchSearchSuggest = () => fetch(map.searchSuggest);
const fetchSearchResult = () => fetch(map.searchResult);
const fetchSongDetail = params => fetch(addUrlParams(map.songDetail, params));
const fetchSongLyrics = params => fetch(addUrlParams(map.songLyrics, params));
const fetchSongUrl = params => fetch(addUrlParams(map.songUrl, params));

const fetchSearchHistory = () => localFetch(NAME_SPACE);
const saveSearchHistory = data => localSave(NAME_SPACE, data);

export {
    fetchPersonalized,
    fetchLatestMusic,
    fetchHotMusic,
    fetchHotSearch,
    fetchSearchSuggest,
    fetchSearchResult,
    fetchSongDetail,
    fetchSongLyrics,
    fetchSongUrl,

    fetchSearchHistory,
    saveSearchHistory
}

