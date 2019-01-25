import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from './shared-components/Container'
import Section from './shared-components/Section'

const styles = {
  root: {
    backgroundColor: '#38ef7d',
    textAlign: 'center',
  },
  facebookButton: {
    marginTop: '2em',
  },
  topSeparator: {
    backgroundColor: '#f5f6fa',
  },
  bottomSeparator: {
    backgroundColor: '#fafafa',
  },
  svg: {
    fill: '#38ef7d',
    marginBottom: '-5px',
    marginTop: '-1px',
  },
}

const Contact = props => {
  const { classes } = props

  return (
    <section id="contact" className={classes.root}>
      <div className={classes.topSeparator}>
        <svg
          className={classes.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>
      <Section>
        <Container>
          <Typography variant="h2" gutterBottom>
            Stay Connected
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sapiente fugiat dolore voluptas.
          </Typography>
          <Button
            className={classes.facebookButton}
            variant="contained"
            color="primary"
            href="https://facebook.com/AgriFuturesPH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit us on Facebook
          </Button>
        </Container>
      </Section>
      <div className={classes.bottomSeparator}>
        <svg
          className={classes.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 C 50 100 80 100 100 0 Z" />
        </svg>
      </div>
    </section>
  )
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact)
