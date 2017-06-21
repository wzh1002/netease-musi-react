import React, { PureComponent } from 'react';
import { computeTime } from '../../../utils';

class Lyrics extends PureComponent {

    constructor(props) {
        super(props);

        const clientWidth = document.documentElement.clientWidth;
        if (clientWidth <= 320) {
            this.lyricHeight = Math.floor(13 * 1.5);
            this.lyricInterval = 5;
        } else {
            this.lyricHeight = 16 * 1.5;
            this.lyricInterval = 8;
        }
    }

    getLyricsContent() {
        const { lyricsArr, index } = this.props;
        const activeStyle = {
            color: 'rgb(255, 255, 255)'
        };
        return lyricsArr.map((item, i) => {
            return i === index ?
                <p className="song-lyrics-item" key={i} style={activeStyle}>{item}</p> :
                <p className="song-lyrics-item" key={i}>{item}</p>;
        });
    }

    render() {
        const { props, lyricHeight, lyricInterval } = this;
        const { index } = props;
        const lyricsContent = this.getLyricsContent();
        const translate = index === 0 ? 0 : -(lyricHeight + lyricInterval) * (index - 1);
        const listStyle = {
            transform: `translateY(${translate}px)`
        };
        const viewStyle = {
            height: `${ lyricHeight * 3 + lyricInterval * 2 }px`
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