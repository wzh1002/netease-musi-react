import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { getQueryValue } from '../utils';
import { Disc, Play, Lyrics, Loading } from '../components';

class Song extends Component {

    state = {
        playing: false,
        progress: 0,
        end: false
    };

    updateProgress(progress) {
        this.setState({
            progress
        });
    }

    updatePlayStatus() {
        this.setState({
            playing: !this.state.playing
        });
    }

    updateEndStatus(status) {
        this.setState({
            end: status
        });
    }

    componentDidMount() {
        const { actions, location } = this.props;
        const id = getQueryValue(location.search, 'id');

        actions.fetchSongUrl({id});
        actions.fetchSongDetail({ids: id});
        actions.fetchSongLyrics({id});
    }

    render() {
        const { props, state } = this;
        const { location, url, detail, lyrics } = props;
        const updateProgress = this.updateProgress.bind(this);
        const updatePlayStatus = this.updatePlayStatus.bind(this);
        const updateEndStatus = this.updateEndStatus.bind(this);
        const id = getQueryValue(location.search, 'id');
        let ready = false;
        let view;
        if (url.data.length > 0 && detail.data.length > 0 && lyrics.data.lyric) {
            ready = true;
        }

        if (ready) {
            const bgStyle = {
                backgroundImage: `url("http://music.163.com/api/img/blur/${detail.data[0].al.pic}")`,
                opacity: 1
            };
            view = (
                <div className="app-wrap" onClick={updatePlayStatus}>
                    <div className="song-bg" style={bgStyle}></div>
                    <div className="">
                        <div className="song-wrap">
                            <Disc
                                {...detail}
                                id={id}
                                status={state} />
                            <Play
                                {...url}
                                id={id}
                                status={state}
                                updateProgress={updateProgress}
                                updatePlayStatus={updatePlayStatus}
                                updateEndStatus={updateEndStatus} />
                        </div>
                        <div className="song-info">
                            <h2 className="song-title">
                                <span className="song-name">{detail.data[0].name}</span>
                                <span className="song-gap">-</span>
                                <span className="song-autr">{detail.data[0].al.name}</span>
                            </h2>
                            <Lyrics
                                {...lyrics}
                                id={id}
                                status={state}
                                updateEndStatus={updateEndStatus} />
                        </div>
                    </div>
                </div>
            );
        } else {
            const loadingStyle = {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            view = <Loading style={loadingStyle} />;
        }

        return view;
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
