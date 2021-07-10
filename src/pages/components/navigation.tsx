import { Toolbar, Container, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
    height: 90,
    background: "rgba(255,255,255,0.9)",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100000
  },
  link: {
    textDecoration: "none"
  }
}));

const NavigationBar = () => {
  const classes = useStyles()
  return (
    <Toolbar className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} md={9}>
            <Typography variant="h5">
              Norton Pengra
            </Typography>
          </Grid>
          <Grid item xs md>
            <Link className={classes.link} to="/">
              <Button fullWidth>Home</Button>
            </Link>
          </Grid>
          <Grid item xs md>
            <Link className={classes.link} to="/about">
              <Button fullWidth>About</Button>
            </Link>
          </Grid>
          <Grid item xs md>
            <Link className={classes.link} to="/resume">
              <Button fullWidth>Resume</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  );
}

export default NavigationBar;
