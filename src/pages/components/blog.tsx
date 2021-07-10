import { Avatar, List, ListItemAvatar, ListItemText, ListItem, GridSize } from "@material-ui/core";
import { Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Chip, Link } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import musings from "../paths";

const useStyles = makeStyles(theme => createStyles({
  card: {
    border: "none"
  },
  title: {
    fontWeight: "bold"
  },
  media: {
    height: 300
  },
  chip: {
    marginRight: 5,
    color: "#aaa"
  },
  cardTitle: {
    fontWeight: 600
  },
  link: {
    textDecoration: "none",
    '&:hover': {
      textDecoration: "none"
    }
  },
  sectionHeaders: {
    marginTop: 40,
  },
  inline: {
    display: "inline"
  }
}));

const BlogPost = (
  {
    title,
    slug,
    description,
    image,
    tags = []
  }: {
    title: string;
    slug: string;
    image: string;
    description?: string;
    tags?: string[] | null;
  }
) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} href={slug}>
      <Card className={classes.card} variant="outlined" square>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography className={classes.cardTitle} gutterBottom variant="h4" component="h2">
              {title}
            </Typography>
            {tags !== null && tags.length ? (
              <Typography gutterBottom variant="h6">
                {tags.sort().map((e, i) => (
                  <Chip
                    className={classes.chip}
                    variant="outlined"
                    size="small"
                    label={e}
                    key={i}
                  />
                ))}
              </Typography>
            ) : null}
            {
              description
                ? <Typography variant="h6" gutterBottom component="p">
                  {description}
                </Typography>
                : null
            }

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

const MiniBlogPost = (
  {
    title,
    slug,
    description,
    image
  }: {
    title: string;
    slug: string;
    image: string;
    description?: string;
  }
) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <Link className={classes.link} href={slug}>
        <ListItemText
          primary={title}
          secondary={description}
        />
      </Link>
    </ListItem>
  );
}

const Blog = () => {
  const classes = useStyles();
  const largeBlogDisplays = musings.slice(0, 7).map((e, i) => {
    let width: GridSize = 12;
    if (i < 2 || (i >= 5 && i < 7)) {
      width = 6;
    } else if (i >= 2 && i < 5) {
      width = 4;
    }

    return (
      <Grid item xs={12} md={width} spacing={1} alignItems="stretch" key={e.slug}>
        <BlogPost
          title={e.title}
          slug={e.slug}
          tags={e.tags}
          description={e.description}
          image={e.image}
        />
      </Grid>
    );
  })
  const smallBlogDisplays = musings.slice(7).map(e => {
    return (
      <MiniBlogPost 
        key={e.slug}
        title={e.title}
        slug={e.slug}
        description={e.description}
        image={e.image}
      />
    );
  })

  return (
    <Container>
      <Grid className={classes.sectionHeaders} container>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className={classes.title}>Musings</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={1} alignItems="stretch">
        {largeBlogDisplays}
      </Grid>

      {
        smallBlogDisplays.length
          ? <Grid className={classes.sectionHeaders} container>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom className={classes.title}>Even More Musings</Typography>
              </Grid>
            </Grid>
          : null
      }

      <Grid container direction="row" spacing={1} alignItems="stretch">
        <Grid item xs={6}>
          <List>
            {smallBlogDisplays}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Blog