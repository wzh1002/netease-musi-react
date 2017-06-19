import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Nav, Recommend, Hot, Search } from './components';
import * as actions from './actions';
import { RECOMMEND, HOT, SEARCH } from './constants';

class Home extends Component {

    state = {
        active: RECOMMEND
    };

    updateActive(active) {
        this.setState({
            active
        });
    }

    render() {
        const { props, state, updateActive } = this;
        const { active } = state;
        const { actions } = props;
        let content;

        if (active === RECOMMEND) {
            content = <Recommend {...props[RECOMMEND]} actions={actions} />;
        } else if (active === HOT) {
            content = <Hot {...props[HOT]} actions={actions} />;
        } else if (active === SEARCH) {
            content = <Search />;
        } else {
            content = <Recommend {...props[RECOMMEND]} actions={actions} />;
        }

        return (
            <div>
                <Header />
                <Nav updateActive={updateActive.bind(this)} active={active} />
                <div className="tab-content">
                    {content}
                </div>
            </div>
        );
    }
}

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
