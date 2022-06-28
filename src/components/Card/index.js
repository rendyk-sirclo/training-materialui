import { Grid, Box, Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./styles";

const Card = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const classes = useStyles();

  return (
    <Grid key={idCategory} item xs={12} sm={6} md={4} lg={3}>
      <Box>
        <Image
          src={strCategoryThumb}
          alt={strCategory}
          width={320}
          height={200}
        />
      </Box>
      <Box pt={0.5}>
        <Typography
          className={classes.title}
          gutterBottom
          component="h2"
          align="left"
        >
          {strCategory}
        </Typography>
        <div style={{ marginTop: 2 }}>
          <Typography className={classes.description} component="p">
            {strCategoryDescription}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
};

export default Card;
