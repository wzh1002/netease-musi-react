import React from 'react';
import { Link } from 'react-router-dom';
import { serializeRankNum, classNames } from '../../../utils';

const hotMusicItem = ({ data, index }) => {
    const alias = data.alias.length === 0 ? '' : `(${data.alias.join(' / ')})`;
    const sq = data.unknown ? '' : <i className="icon icon-sq"></i>;
    return (
        <Link className="remd-latest-item" to={`/song?id=${data.id}`}>
            <div className={
                classNames('item-rank', {
                    topThree: index < 4
                })
            }>{serializeRankNum(index)}</div>
            <div className="item-left">
                <p className="item-title">
                    {data.name}
                    <span className="item-title-des">
                        { alias }
                    </span>
                </p>
                <p className="item-info">
                    { sq }
                    {data.artists.map(item => item.name).join(' / ')} - {data.album.name}
                </p>
            </div>
            <div className="item-right">
                <i className="icon icon-play"></i>
            </div>
        </Link>
    );
};


export default hotMusicItem;
