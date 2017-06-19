import React from 'react';
import { RECOMMEND, HOT, SEARCH } from '../constants';
import { classNames } from '../../../utils';

const Nav = ({ updateActive, active }) => {
    const selectRecommend = () => updateActive(RECOMMEND);
    const selectHot = () => updateActive(HOT);
    const selectSearch = () => updateActive(SEARCH);

    return (
        <nav className="nav">
            <li onClick={selectRecommend}
                className={
                classNames('tab', {
                    active: active === RECOMMEND
                })
            }>
                <div className="tab-text">
                    <span>推荐音乐</span>
                </div>
            </li>
            <li onClick={selectHot}
                className={
                classNames('tab', {
                    active: active === HOT
                })
            }>
                <div className="tab-text">
                    <span>热歌榜</span>
                </div>
            </li>
            <li onClick={selectSearch}
                className={
                classNames('tab', {
                    active: active === SEARCH
                })
            }>
                <div className="tab-text">
                    <span>搜索</span>
                </div>
            </li>
        </nav>
    );
};

export default Nav;