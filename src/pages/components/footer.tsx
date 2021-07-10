import { Link, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const linkedinLink = "https://linkedin.com/in/nortonpengra"
const twitterLink = "https://twitter.com/@nortwat"

const useStyles = makeStyles(theme => createStyles({
  root: {
    marginTop: "40px",
    textAlign: "center",
    marginBottom: "40px"
  },
  a: {
    fontWeight: "bold",
    color: "#999",
    textDecoration: "none"
  }
}));

const FooterBar = () => {
  const classes = useStyles()
  return <footer className={classes.root}>
    <Typography variant="body1" color="textSecondary">
      Hope you're enjoying your day :)
    </Typography>
    <Typography variant="body1" color="textSecondary">
      <Link color="secondary" href={linkedinLink}>LinkedIn</Link> |{" "}
      <Link color="secondary" href={twitterLink}>Twitter</Link>
    </Typography>
  </footer>
}

export default FooterBar;