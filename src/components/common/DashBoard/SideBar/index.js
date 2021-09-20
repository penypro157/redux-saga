
import { Box, Button, Card, CardActions, CardContent, Drawer, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { style } from './style';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as dashBoardActions from '../../../../actions/dashBoard'
import { SideBarPosition } from '../../../../constants';
import routeList from './../../../../router';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: null
        }
    }
    toggleDrawer = (open) => (event) => {
        var { dashBoardActions } = this.props;
        dashBoardActions.toggleSideBar(open ? SideBarPosition.LEFT : '');
    };
    list = (anchor) => {
        var {classes} = this.props
        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
            >
                <List>
                    {
                        routeList.map((item, index) => {
                            var { name, path, exact, symbol: SymbolIcon } = item;
                            return (
                                <NavLink to={path} exact={exact} activeClassName={classes.menuLinkActive}  className={classes.menuLink} >
                                <ListItem button key={path}>
                                    <ListItemIcon>
                                        <SymbolIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={name} />
                                </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </Box>
        );
    }
    render() {
        debugger
        var { sideBarPosition } = this.props.dashBoard;
        return (
            <Drawer
                anchor={sideBarPosition}
                open={Boolean(sideBarPosition)}
                onClose={this.toggleDrawer(false)}
                SlideProps={{ direction: 'right' }}
            >
                {this.list(sideBarPosition)}
            </Drawer>

        )

    }
}
const mapStateToProps = (state) => {
    return {
        dashBoard: state.dashBoard
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dashBoardActions: bindActionCreators(dashBoardActions, dispatch)
    }

}
export default compose(withStyles(style), connect(mapStateToProps, mapDispatchToProps))(SideBar);
