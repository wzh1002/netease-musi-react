import React from 'react';
import { Link } from 'react-router-dom';

const LatestMusicItem = ({ data }) => {
    const alias = data.song.alias.length === 0 ? '' : `(${data.song.alias.join(' / ')})`;
    const sq = data.unknown ? '' : <i className="icon icon-sq"></i>;
    return (
        <Link className="remd-latest-item" to={`/song?id=${data.id}`}>
            <div className="item-left">
                <p className="item-title">
                    {data.name}
                    <span className="item-title-des">
                        { alias }
                    </span>
                </p>
                <p className="item-info">
                    { sq }
                    {data.song.artists.map(item => item.name).join(' / ')} - {data.song.album.name}
                </p>
            </div>
            <div className="item-right">
                <i className="icon icon-play"></i>
            </div>
        </Link>
    )
};

export default LatestMusicItem;
