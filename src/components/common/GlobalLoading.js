import { Box, CircularProgress, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { style } from './../style';


class GlobalLoading extends Component {
    render() {
        var { classes, showLoading } = this.props;
        return (
            <Box className={classes.divLoading} component="div" display={showLoading ? 'block' : 'none'}>
                <CircularProgress color="secondary" className={classes.loading} />
            </Box>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        showLoading: state.ui.showLoading
    }
}
export default compose(withStyles(style), connect(mapStateToProps, null))(GlobalLoading);