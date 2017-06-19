import React from 'react';
import { Link } from 'react-router-dom';
import { serializeListen } from '../../../utils';

const RemdSongsItem = ({ data }) => {
    return (
        <Link className="remd-songs-item" to={`/playlist?id=${data.id}`}>
            <div className="remd-songs-img">
                <img src={data.picUrl} />
                <i className="icon-listen remd-num">{ serializeListen(data.playCount) }</i>
            </div>
            <p className="remd-songs-des">
                {data.name}
            </p>
        </Link>
    )
};

export default RemdSongsItem;
