import { Avatar, Chip, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import me from './../../assets/goodphoto.png';

const useStyles = makeStyles(theme => createStyles({
  root: {
    paddingTop: 40,
    paddingBottom: 40
  },
  title: {
    fontWeight: "bold"
  },
  chip: {
    marginRight: 5
  }
}));

interface BlogHeaderProps {
  title: string | JSX.Element;
  image: string;
  monthYear: string;
  tags: string[];
}

const Img = ({ src }: { src: string; }) => {
  return (
    <div style={{ maxHeight: 500, overflow: "hidden", marginBottom: 30 }}>
      <img style={{ objectFit: "fill", width: "100%", height: "100%" }} src={src} />
    </div>
  )
}

const BlogHeader = (props: BlogHeaderProps) => {
  const classes = useStyles();

  const tagChips = props.tags.map(e => <Chip variant="outlined" className={classes.chip} label={e} key={e} /> )

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Img src={props.image} />
          <Typography variant="h4" gutterBottom className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="h5">
            <Chip className={classes.chip} avatar={<Avatar src={me} />} label="Norton Pengra" />
            <Chip className={classes.chip} variant="outlined" label={props.monthYear} />
            {tagChips}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogHeader;