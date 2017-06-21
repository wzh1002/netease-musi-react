import React, { PureComponent } from 'react';
import { classNames } from '../../../utils';

class Disc extends PureComponent {
    render() {
        const { props } = this;
        const { src, playing } = props;
        const play = playing ? null : <i className="song-play"></i>;
        return (
            <div className={
                classNames(
                    "song-disc",
                    {
                        "song-disc-stop": playing === false
                    }
                 )
            }>
                <div className="song-turn">
                    <div className="song-img">
                        <img src={src} />
                    </div>
                    {play}
                </div>
            </div>
        );
    }
}

export default Disc;
