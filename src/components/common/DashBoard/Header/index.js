
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, withStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { Component } from 'react';
import { style } from './style';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }
    setAnchorEl = (target) => {
        this.setState({
            anchorEl: target
        })
    }
    handleMenu = (event) => {
        this.setAnchorEl(event.currentTarget);
    };
    handleClose = (event) => {
        this.setAnchorEl(null);
    };
    render() {
        var { onMenuClick, title } = this.props;
        console.log(this.props)
        var { anchorEl } = this.state;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon onClick={() => onMenuClick(true)} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default withStyles(style)(Header);
