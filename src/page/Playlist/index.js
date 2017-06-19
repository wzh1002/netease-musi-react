import React, { Component } from 'react';

class Playlist extends Component {

    render() {
        const tipsStyle = {
            position: 'absolute',
            textAlign: 'center',
            margin: '100px 50px'
        };
        return (
            <div className="search">
                <p style={tipsStyle}>proxyServer中关于歌单的API不全(有的不能用)，找API中...</p>
            </div>
        );
    }
}

export default Playlist;