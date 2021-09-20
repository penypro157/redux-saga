
import { Button, Card, CardActions, CardContent, Fab, Grid, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import { Route } from 'react-router';
import { style } from './style';
import Dashboard from './../DashBoard/index';
class AdminLayoutRoute extends Component {
    render() {
        var { name, ...remainProps } = this.props;
        console.log(name);
        var { exact, path, component: YourComponent } = remainProps;
        return (
            <Route exact={exact} path={path} render={routeProps => (
            <Dashboard title={name}>
                <YourComponent  />
            </Dashboard>)} />
        )

    }
}

export default withStyles(style)(AdminLayoutRoute);
