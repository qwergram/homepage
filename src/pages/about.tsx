import { Avatar, Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from "react";
import me from "./../assets/goodphoto.png";

const useStyles = makeStyles(theme => createStyles({
  title: {
    fontWeight: "bold"
  },
  avatar: {
    width: "95%",
    height: "auto",
    textAlign: "center"
  },
  red: {
    color: "#ff5252",
    fontWeight: "bold"
  },
  red2: {
    color: "#d50000",
    fontWeight: "bold"
  },
  blue: {
    color: "#00b0ff",
    fontWeight: "bold"
  },
  purple: {
    color: "#6a1b9a",
    fontWeight: "bold"
  },
  nvidia: {
    fontWeight: "bold",
    color: "#76b900"
  },
  timelineHeader: {
    marginTop: 40
  },
  rightAlign: {
    textAlign: "right"
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} spacing={1}>
          <Avatar className={classes.avatar} src={me} />
        </Grid>
        <Grid item xs={12} md={8} spacing={1}>
          <Typography variant="h3" gutterBottom className={classes.title}>
            Hey there, I'm Norton Pengra.
          </Typography>
          <Typography gutterBottom variant="h5">
            I'm a deep learning infrastructure engineer at Nvidia. I help make sure
            the CI/CD for Deep Learning teams stay green. Teams such as {" "}
            <Link href="https://developer.nvidia.com/tensorrt">TensorRT</Link>,{" "}
            <Link href="https://www.nvidia.com/en-us/data-center/mlperf/">MLPerf</Link>{" "}
            and <Link href="https://www.nvidia.com/en-us/self-driving-cars/">Auto</Link> teams
            to name a few.
          </Typography>
          <Typography gutterBottom variant="h5">
            I've been writing code since I booted out of high school. Since then,
            I've jumped around a <span className={classes.red}>few start ups</span>,
            attended <Link href="https://codefellows.org" className={classes.red2}>Codefellows</Link>,
            jumped around even more start ups, worked at <span className={classes.blue}>Microsoft</span>,
            got accepted into the <span className={classes.purple}>University of Washington</span>'s computer
            science program, where I received an offer from <span className={classes.nvidia}>Nvidia</span>.
            I've been at Nvidia for a year now.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;