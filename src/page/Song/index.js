import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { Disc, Play, Lyrics } from './components';
import { getQueryValue, computeTime } from '../../utils';
import { Loading } from '../../components';

class Song extends Component {

    constructor(props) {
        super(props);

        this.lyricsMapArr = [];
        this.isParse = false;
        this.updatePlayState = this.updatePlayState.bind(this);
        this.updateIndexState = this.updateIndexState.bind(this);
        this.updateEndState = this.updateEndState.bind(this);
    }

    state = {
        playing: false,
        index: 0,
        end: false
    };

    componentDidMount() {
        this.fetchData();
    }

    updatePlayState() {
        this.setState({
            playing: !this.state.playing
        });
    }

    updateIndexState(currentTime) {
        const { lyricsMapArr, state } = this;
        const { index, end } = state;
        const currentMap = lyricsMapArr[index + 1];
        if (currentMap === undefined) {
            return;
        }
        if (Math.floor(currentTime) === currentMap.time) {
            this.setState({
                index: index + 1
            });
        }
    }

    updateEndState(state) {
        this.setState({
            end: state,
            index: 0
        });
    }

    fetchData() {
        const { actions, location } = this.props;
        const id = getQueryValue(location.search, 'id');

        actions.fetchSongUrl({id});
        actions.fetchSongDetail({ids: id});
        actions.fetchSongLyrics({id});
    }

    isReady() {
        const { url, detail, lyrics } = this.props;
        return url.data.length > 0 && detail.data.length > 0 && lyrics.data.lyric;
    }

    parseLyrics() {
        const { props, lyricsMapArr } = this;
        if (this.isParse) {
            return;
        }
        const { lyrics } = props;
        const arr = lyrics.data.lyric.split(/[\r\n]/);
        const reg = /\[([^\]]+)\]/g;
        const separator = 'a-b-c-d-e';
        arr.forEach(item => {
            if (item) {
                const arr = item.replace(reg, ($0, $1) => $1 + separator).split(separator);
                const lyric = arr[arr.length - 1].trim();
                if (!lyric) {
                    return;
                }
                while (arr.length > 2) {
                    lyricsMapArr.push({
                        time: computeTime(arr[0]),
                        lyric
                    });
                    arr.splice(0, 1);
                }
                if (arr.length > 1) {
                    lyricsMapArr.push({
                        time: computeTime(arr[0]),
                        lyric
                    });
                }
            }
        });
        lyricsMapArr.sort((a, b) => a.time - b.time);
        this.isParse = true;
    }

    getSongWrap() {
        const { props, state, updateIndexState, updatePlayState, updateEndState } = this;
        const { url, detail } = props;

        const discSrc = detail.data[0].al.picUrl;
        const playing = state.playing;
        const songSrc = url.data[0].url;

        return (
            <div className="song-wrap">
                <Disc
                    src={discSrc}
                    playing={playing} />
                <Play
                    src={songSrc}
                    playing={playing}
                    updateIndexState={updateIndexState}
                    updatePlayState={updatePlayState}
                    updateEndState={updateEndState} />
            </div>
        );
    }

    getSongInfo() {
        this.parseLyrics();

        const { props, state, lyricsMapArr } = this;
        const { detail } = props;
        const { index } = state;

        const songName = detail.data[0].name;
        const songAutr = detail.data[0].al.name;
        const lyricsArr = lyricsMapArr.map(item => item.lyric);

        const updateEndState = this.updateEndState.bind(this);

        return (
            <div className="song-info">
                <h2 className="song-title">
                    <span className="song-name">{songName}</span>
                    <span className="song-gap">-</span>
                    <span className="song-autr">{songAutr}</span>
                </h2>
                <Lyrics
                    lyricsArr={lyricsArr}
                    index={index}
                    updateEndState={updateEndState} />
            </div>
        )
    }

    getReadyView() {
        const { props } = this;
        const { detail } = props;
        const updatePlayState = this.updatePlayState.bind(this);
        const bgStyle = {
            backgroundImage: `url("http://music.163.com/api/img/blur/${detail.data[0].al.pic}")`,
            opacity: 1
        };
        const songWrap = this.getSongWrap();
        const songInfo = this.getSongInfo();
        return (
            <div className="app-wrap" onClick={updatePlayState}>
                <div className="song-bg" style={bgStyle}></div>
                <div className="">
                    {songWrap}
                    {songInfo}
                </div>
            </div>
        );
    }

    getLoadingView() {
        const loadingStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        return (
            <Loading style={loadingStyle} />
        );
    }

    render() {
        if (this.isReady()) {
            return this.getReadyView();
        }
        return this.getLoadingView();
    }
}

const mapStateToProps = state => {
    const song = state.Song;
    return {
        ...song
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Song);
