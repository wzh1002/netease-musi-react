import React, { Component } from 'react';
import RemdSongsItem from './RemdSongsItem';
import LatestMusicItem from './LatestMusicItem';
import Loading from './Loading';

class Recommend extends Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.fetchPersonalized();
        actions.fetchLatestMusic();
    }

    render() {
        const { personalized, latestMusic } = this.props.data;
        const personalizedList = personalized.data;
        const personalizedFirst = personalizedList.slice(0, 3);
        const personalizedSecond = personalizedList.slice(3);

        let personalizedListEle;
        if (personalizedList.length !== 0 && personalized.pending === false) {
            personalizedListEle = [personalizedFirst, personalizedSecond].map((item, index) => {
                return (
                    <div className="remd-songs-ul" key={index}>
                        {item.map(item => (
                            <RemdSongsItem key={item.id} data={item} />
                        ))}
                    </div>
                )
            })
        } else {
            personalizedListEle = <Loading />;
        }

        const latestMusicList = latestMusic.data;
        let latestMusicListEle;

        if (latestMusicList.length !== 0 && latestMusic.pending === false) {
            latestMusicListEle = latestMusicList.map(item => <LatestMusicItem key={item.id} data={item} />);
        } else {
            latestMusicListEle = <Loading />;
        }

        return (
            <div className="remd-music">
                <h2 className="remd-title">推荐歌单</h2>
                <div className="remd-songs-list">
                    {personalizedListEle}
                </div>
                <h2 className="remd-title">最新音乐</h2>
                <div className="remd-latest">
                    {latestMusicListEle}
                </div>
            </div>
        );
    }
}

export default Recommend;
