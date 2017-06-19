import React from 'react';

const Loading = ({ style }) => {
    return (
        <div className="loading" style={style || {}}>
            <i className="icon-loading">正在加载...</i>
        </div>
    );
};

export default Loading;
