import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link as Scroll } from 'react-scroll'
import Container from './shared-components/Container'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0.25em',
    ...theme.mixins.toolbar,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  navItem: {
    display: 'inline-block',
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '1em',
    },
  },
})

const Navigation = ({ classes }) => (
  <nav role="navigation">
    <ul className={classes.navList}>
      <li className={classes.navItem}>
        <Scroll to="about" smooth offset={50} duration={300}>
          <Button>About Us</Button>
        </Scroll>
      </li>
      <li className={classes.navItem}>
        <Scroll to="team" smooth duration={300}>
          <Button>Meet the Team</Button>
        </Scroll>
      </li>
      <li className={classes.navItem}>
        <Scroll to="contact" smooth duration={300}>
          <Button>Contact Us</Button>
        </Scroll>
      </li>
      <li className={classes.navItem}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </li>
    </ul>
  </nav>
)

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { classes, width } = this.props
    const { open } = this.state
    return (
      <AppBar color="default" position="static">
        <Container>
          <Toolbar>
            <Typography className={classes.grow} variant="h5" color="primary">
              AgriFutures
            </Typography>
            {isWidthDown('sm', width) ? (
              <React.Fragment>
                <IconButton
                  color="primary"
                  aria-label="Open drawer"
                  onClick={this.toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="right"
                  open={open}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton color="primary" onClick={this.toggleDrawer}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <Divider />
                  <Navigation classes={classes} />
                </Drawer>
              </React.Fragment>
            ) : (
              <Navigation classes={classes} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withWidth()(withStyles(styles)(Navbar))
