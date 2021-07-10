import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40
  },
  title: {
    fontWeight: "bold"
  },
  nvidia: {
    fontWeight: "bold",
    color: "#76b900"
  },
  uw: {
    fontWeight: "bold",
    color: "#4b2e83"
  },
  msft: {
    fontWeight: "bold",
    color: "#00a2ed"
  }
}));

interface JumbotronProps {
  title?: string | JSX.Element;
  content?: string | JSX.Element;
}

const Jumbotron = (props: JumbotronProps) => {
  const classes = useStyles();
  const title = props.title || "Musings of a Deep Learning Infrastructure Engineer"
  const content = props.content || <>
    I like writing and creating visualizations.
  </>

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={8}>
          <Typography variant="h3" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h5">
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Jumbotron;