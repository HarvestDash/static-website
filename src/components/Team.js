import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from './shared-components/Container';
import Section from './shared-components/Section';
import avatarSrc from "../images/avatar.svg";

const team = [
  {
    name: 'Rem Lampa',
    designation: 'Co-Founder/CEO',
    img: avatarSrc
  },
  {
    name: 'Alvea Lejano',
    designation: 'Co-Founder/Finance and Research',
    img: avatarSrc
  },
  {
    name: 'Theon Puyat',
    designation: 'Co-Founder/Business Development',
    img: avatarSrc
  },
  {
    name: 'Joselie Castañeda',
    designation: 'Engineering/Architecture',
    img: avatarSrc
  },
  {
    name: 'Billy Wilson Arante',
    designation: 'Engineering',
    img: avatarSrc
  },
  {
    name: 'Nicco Lampa',
    designation: 'Engineering/Data Analytics',
    img: avatarSrc
  },
  {
    name: 'Jerome Estiller',
    designation: 'Engineering/UI and UX',
    img: avatarSrc
  },
  {
    name: 'Bryan Martinez',
    designation: 'Engineering',
    img: avatarSrc,
  },
];

const styles = theme => ({
  root: {
    backgroundColor: '#f5f6fa',
    textAlign: 'center',
  },
  gridItem: {
    padding: '5em 1.5em 0',
    [theme.breakpoints.down('sm')]: {
      padding: '2em 1em 0',
    },
  },
  container: {
    padding: '2em',
    height: '100%',
  },
  avatarImg: {
    width: '70%',
    marginBottom: '2em',
    borderRadius: '50%',
  },
});

const Team = props => {
  const { classes } = props;
  return (
    <Section id="team" className={classes.root}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Meet the Team
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          sapiente fugiat dolore voluptas.
        </Typography>
        <Grid container justify="center">
          {team.map(member => (
            <Grid
              item
              className={classes.gridItem}
              md={3}
              xs={12}
              key={member.name}
            >
              <Paper className={classes.container}>
                <img
                  className={classes.avatarImg}
                  src={member.img}
                  alt={member.name}
                />
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body1">{member.designation}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
