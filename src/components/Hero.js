import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from './shared-components/Container';
import Image from './image';
import heroSrc from "../images/laptop-browser-view.png"
import agriSrc from "../images/hero-background-img.jpg"

const styles = theme => ({
  root: {
    background:
      'linear-gradient(to bottom right, rgba(17, 153, 142, 0.9), rgba(56, 239, 125, 0.9))',
    color: '#fff',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: '""',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundImage: `${agriSrc}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'left center',
      },
      zIndex: '-1',
    },
  },
  gridItem: {
    padding: '8em 1.5em 0',
    [theme.breakpoints.down('sm')]: {
      padding: '4em 1em',
    },
  },
  title: {
    lineHeight: '1.25em',
  },
  subtitle: {
    marginBottom: '1.5em',
  },
  imgContainer: {
    position: 'relative',
    padding: '8em 1.5em 0',
    [theme.breakpoints.down('sm')]: {
      padding: '1.5em 0 30%',
    },
  },
  img: {
    width: '110%',
    position: 'absolute',
    left: '-2em',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      left: 0,
    },
  },
  svg: {
    fill: '#fafafa',
    marginBottom: '-5px',
  },
});

const Hero = props => {
  const { classes } = props;
  return (
    <section className={classes.root}>
      <Container>
        <Grid container>
          <Grid item className={classes.gridItem} md={6} xs={12}>
            <Typography
              className={classes.title}
              color="inherit"
              variant="h1"
              gutterBottom
            >
              Online Agricultural Commodities Futures Trading Platform
            </Typography>
            <Typography
              className={classes.subtitle}
              color="inherit"
              variant="h6"
              gutterBottom
            >
              The future is here
            </Typography>
            <Button variant="contained" color="primary">
              Getting Started
            </Button>
          </Grid>
          <Grid item className={classes.imgContainer} md={6} xs={12}>
              <img
                className={classes.img}
                src={heroSrc}
                alt="browser view in laptop"
              />
          </Grid>
        </Grid>
      </Container>
      <svg className={classes.svg} viewBox="0 0 1440 160">
        <g>
          <path
            d="M0,160 L0,0 C548.949848,3.38469e-14 823.425766,157.977 1440,157.977 L1440,160 L0,160 Z"
            transform="matrix(-1 0 0 1 1440 0)"
          />
        </g>
      </svg>
    </section>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
