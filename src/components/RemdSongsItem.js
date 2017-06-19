import React from 'react';
import { serializeListen } from '../utils';

const RemdSongsItem = ({ data }) => {
    return (
        <a className="remd-songs-item" href={`#/${data.id}`}>
            <div className="remd-songs-img">
                <img src={data.picUrl} />
                <i className="icon-listen remd-num">{ serializeListen(data.playCount) }</i>
            </div>
            <p className="remd-songs-des">
                {data.name}
            </p>
        </a>
    )
};

export default RemdSongsItem;
