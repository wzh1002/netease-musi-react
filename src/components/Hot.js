import React, { Component } from 'react';
import HotMusicItem from './hotMusicItem';
import Loading from './Loading';

class Hot extends Component {
    componentWillMount() {
        const { actions } = this.props;
        actions.fetchHotMusic();
    }

    render() {
        const { data, pending, error } = this.props;
        let content,
            ready = false;
        if (data.tracks.length !== 0 && pending === false) {
            ready = true;
        }
        if (ready) {
            content = data.tracks.slice(0, 20).map((item, index) => (
                <HotMusicItem data={item} index={index + 1} key={item.id} />
            ));
        } else {
            const loadingStyle = {
                marginTop: '100px'
            };
            content = <Loading style={loadingStyle} />;
        }
        const more = <div className="hot-more"><i className="hot-view icon-next">查看完整榜单</i></div>;
        return (
            <div className="hot-music">
                <div className="hot-top">
                    <div className="hot-bg">
                        <div className="hot-name icon icon-hot"></div>
                        <div className="hot-time">更新日期：06月15日</div>
                    </div>
                </div>
                {content}
                {ready && more}
            </div>
        );
    }
}

export default Hot;
