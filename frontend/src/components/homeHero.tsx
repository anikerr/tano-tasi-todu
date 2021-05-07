import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';

import tTheme from '../theme';

const useStyles = makeStyles({
  root: {
    backgroundImage: (hero: any) => `url(${hero.cover.url})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh'
  },
  overlay: {
    backgroundImage: (hero) => hero.gradientOverlay 
      ? hero.gradientOverlay 
      : `linear-gradient(#00107dcc, #ffffff00)`,
    opacity: 0.65,
    height: '100vh',
    width: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: tTheme.size.appBar,
    width: '100%',
    minHeight: '100vh',
    textShadow: '1px 1px 17px #0000004f',
  },
  description: {
    lineHeight: '1.75rem',
    marginTop: '2rem',
    maxWidth: 900,
    color: tTheme.theme.palette.text.secondary,
  },
})

const HomeHero = ({ hero }) => {
  const classes = useStyles(hero);
  console.log(hero)

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
      </div>
      <div className={classes.content}>
        <Container>
          <Grid container spacing={2}>
            <Typography variant='h1' color='textSecondary'>
              {hero.title}
            </Typography>
            <Grid item xs={12} className={classes.description}>
              <Markdown source={hero.description} escapeHtml={false} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
};

export default HomeHero;