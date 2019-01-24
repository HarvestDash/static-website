import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from './shared-components/Container';
import Section from './shared-components/Section';

const team = [
  {
    name: 'Rem Lampa',
    designation: 'Co-Founder/CEO',
    img: 'avatar.svg',
  },
  {
    name: 'Alvea Lejano',
    designation: 'Co-Founder/Finance and Research',
    img: 'avatar.svg',
  },
  {
    name: 'Theon Puyat',
    designation: 'Co-Founder/Business Development',
    img: 'avatar.svg',
  },
  {
    name: 'Joselie Castañeda',
    designation: 'Engineering/Architecture',
    img: 'avatar.svg',
  },
  {
    name: 'Billy Wilson Arante',
    designation: 'Engineering',
    img: 'avatar.svg',
  },
  {
    name: 'Nicco Lampa',
    designation: 'Engineering/Data Analytics',
    img: 'avatar.svg',
  },
  {
    name: 'Jerome Estiller',
    designation: 'Engineering/UI and UX',
    img: 'avatar.svg',
  },
  {
    name: 'Bryan Martinez',
    designation: 'Engineering',
    img: './avatar.svg',
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
                  src={`/static/${member.img}`}
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
