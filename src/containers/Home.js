import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Nav, Recommend, Hot } from '../components';
import * as actions from '../actions';
import { RECOMMEND, HOT, SEARCH } from '../constants';

const Home = props => {
    const { nav, actions } = props;
    const data = props[nav];
    let content;

    if (nav === RECOMMEND) {
        content = <Recommend data={data} actions={actions} />;
    } else if (nav === HOT) {
        content = <Hot {...data} actions={actions} />;
    } else if (nav === SEARCH) {
        content = '';
    } else {
        content = <Recommend data={data} actions={actions} />;
    }

    return (
        <div>
            <Header />
            <Nav actions={actions} active={nav} />
            <div className="tab-content">
                {content}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const data = state.Home;
    return {
        ...data
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
