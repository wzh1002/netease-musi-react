import React from 'react';
import { RECOMMEND, HOT, SEARCH } from '../constants';
import { classNames } from '../utils';

const Nav = ({ actions, active }) => {
    const update = actions.updateNav;
    const selectRecommend = () => update(RECOMMEND);
    const selectHot = () => update(HOT);
    const selectSearch = () => update(SEARCH);

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