import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from './shared-components/Container'

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '5em 0 2em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0 1em',
    },
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1em',
  },
  svg: {
    fill: '#3b5998',
    width: '40px',
  },
})

const Footer = props => {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.social}>
          <Typography variant="body2">Like us on:</Typography>
          <a
            href="https://facebook.com/AgriFuturesPH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
            </svg>
          </a>
        </div>
        <Typography variant="body2">
          &copy; 2018 AgriFutures Team. All right reserved.
        </Typography>
      </Container>
    </section>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
