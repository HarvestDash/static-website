import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from './shared-components/Container';
import Section from './shared-components/Section';

import missionSrc from "../images/mission.svg"
import visionSrc from "../images/vision.svg"

const styles = theme => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
    },
  },
  gridItem: {
    padding: '5em 1.5em 0',
    [theme.breakpoints.down('sm')]: {
      padding: '2em 1em 0',
    },
  },
  container: {
    padding: '2em 3em',
    [theme.breakpoints.down('sm')]: {
      padding: '2em',
    },
  },
  imgMission: {
    width: '80%',
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imgVision: {
    width: '95%',
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

const About = props => {
  const { classes } = props;
  return (
    <Section id="about" className={classes.root}>
      <Container>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          sapiente fugiat dolore voluptas.
        </Typography>
        <Grid container>
          <Grid item className={classes.gridItem} md={6} xs={12}>
            <Paper className={classes.container}>
              <img
                className={classes.imgMission}
                src={missionSrc}
                alt="mission"
              />
              <Typography variant="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                To lead the improvement of the state of agricultural sector in
                Southeast Asia.
              </Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.gridItem} md={6} xs={12}>
            <Paper className={classes.container}>
              <img
                className={classes.imgVision}
                src={visionSrc}
                alt="vision"
              />
              <Typography variant="h3" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To be the best online agricultural commodities futures trading
                platform in Southeast Asia in 10 years.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
