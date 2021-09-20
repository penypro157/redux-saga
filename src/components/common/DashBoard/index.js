
import { Button, Card, CardActions, CardContent, Fab, Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { Route } from 'react-router';
import { style } from './style';
import Header from './Header/index';
import SideBar from './SideBar/index';
import { bindActionCreators, compose } from 'redux';
import * as dashBoardActions from '../../../actions/dashBoard'
import { connect } from 'react-redux';
import { SideBarPosition } from '../../../constants';
class Dashboard extends Component {
    toggleSideBar = (open) => {
        var { dashBoardActions } = this.props;
        dashBoardActions.toggleSideBar(open ? SideBarPosition.LEFT : '');
    }
    render() {
        const { children,title } = this.props;
        console.log(title)
        return (
            <div>
                <Header onMenuClick={this.toggleSideBar} title={title} />
                <SideBar  />
                {children}
            </div>

        )

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dashBoardActions: bindActionCreators(dashBoardActions, dispatch)
    }

}
export default compose(withStyles(style), connect(null, mapDispatchToProps))(Dashboard);
