import React, { Component } from 'react';
import HotMusicItem from './hotMusicItem';
import { Loading } from '../../../components';

class Hot extends Component {
    componentWillMount() {
        const { actions } = this.props;
        actions.fetchHotMusic();
    }

    isReady() {
        const { data, pending } = this.props;
        return data.tracks.length !== 0 && pending === false
    }

    getContent() {
        const { data } = this.props;
        let content;
        if (this.isReady()) {
            content = data.tracks.slice(0, 20).map((item, index) => (
                <HotMusicItem data={item} index={index + 1} key={item.id} />
            ))
        } else {
            const loadingStyle = {
                marginTop: '100px'
            };
            content = <Loading style={loadingStyle} />;
        }
        return content;
    }

    getMore() {
        return this.isReady() ?
            <div className="hot-more"><i className="hot-view icon-next">查看完整榜单</i></div> :
            null;
    }

    render() {
        const content = this.getContent();
        const more = this.getMore();
        return (
            <div className="hot-music">
                <div className="hot-top">
                    <div className="hot-bg">
                        <div className="hot-name icon icon-hot"></div>
                        <div className="hot-time">更新日期：06月15日</div>
                    </div>
                </div>
                {content}
                {more}
            </div>
        );
    }
}

export default Hot;
