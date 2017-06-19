import { apiMap } from '../config';
import { NAME_SPACE } from '../constants';
import { localFetch, localSave, addUrlParams } from '../utils';

const fetchPersonalized = () => fetch(apiMap.personalized);
const fetchLatestMusic = () => fetch(apiMap.latestMusic);
const fetchHotMusic = () => fetch(apiMap.hotMusic);
const fetchHotSearch = () => fetch(apiMap.hotSearch);
const fetchSearchSuggest = () => fetch(apiMap.searchSuggest);
const fetchSearchResult = () => fetch(apiMap.searchResult);
const fetchSongDetail = params => fetch(addUrlParams(apiMap.songDetail, params));
const fetchSongLyrics = params => fetch(addUrlParams(apiMap.songLyrics, params));
const fetchSongUrl = params => fetch(addUrlParams(apiMap.songUrl, params));


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

