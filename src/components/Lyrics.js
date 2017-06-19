import React, { Component } from 'react';
import { computeTime } from '../utils';

class Lyrics extends Component {

    constructor(props) {
        super(props);
        this.timeArr = [];
        this.lyricArr = [];

        const clientWidth = document.documentElement.clientWidth;
        if (clientWidth <= 320) {
            this.lyricHeight = Math.floor(13 * 1.5);
            this.lyricInterval = 5;
        } else {
            this.lyricHeight = 16 * 1.5;
            this.lyricInterval = 8;
        }
    }

    state = {
        index: 0
    };

    componentDidUpdate() {
        const { timeArr, props, state } = this;
        const { status, updateEndStatus } = props;
        const { index } = state;
        if (Math.floor(status.progress) === timeArr[index + 1]) {
            this.setState({
                index: index + 1
            });
        }
        if (status.end && index !== 0) {
            this.setState({
                index: 0
            });
            updateEndStatus(false);
        }
    }

    componentWillMount() {
        const { timeArr, lyricArr } = this;
        const { data } = this.props;
        const arr = data.lyric.split(/[\r\n]/);
        arr.forEach(item => {
            if (item) {
                const arr = item.slice(1).split(']');
                if (arr[1]) {
                    timeArr.push(computeTime(arr[0]));
                    lyricArr.push(arr[1]);
                }
            }
        });
    }

    render() {
        const { state, lyricArr } = this;
        const activeStyle = {
            color: 'rgb(255, 255, 255)'
        };
        const lyricsContent = lyricArr.map((item, index) => {
            return index === state.index ?
                <p className="song-lyrics-item" key={index} style={activeStyle}>{item}</p> :
                <p className="song-lyrics-item" key={index}>{item}</p>;
        });
        const translate = state.index === 0 ? 0 : -(this.lyricHeight + this.lyricInterval) * (state.index - 1);
        const listStyle = {
            transform: `translateY(${translate}px)`
        };
        const viewStyle = {
            height: `${ this.lyricHeight * 3 + this.lyricInterval * 2 }px`
        };
        return (
            <div className="song-lyrics">
                <div className="song-lyrics-view" style={viewStyle}>
                    <div className="song-lyrics-list" style={listStyle}>
                        {lyricsContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lyrics;