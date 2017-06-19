import React from 'react';
import { classNames } from '../utils';

const Disc = props => {
    const { data, status } = props;
    const play = status.playing ? null : <i className="song-play"></i>;
    return (
        <div className={
            classNames(
                "song-disc",
                {
                    "song-disc-stop": status.playing === false
                }
            )
        }>
            <div className="song-turn">
                <div className="song-img">
                    <img src={data[0].al.picUrl} />
                </div>
                {play}
            </div>
        </div>
    );
};

export default Disc;
