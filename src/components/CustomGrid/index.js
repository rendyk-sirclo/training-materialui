import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Typography, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "orange",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "violet",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "blue",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
    },
  },
  info: {
    color: "white",
  },
}));

const CustomGrid = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.info} component="p">
          {`<600px = orange`}
        </Typography>
        <Typography className={classes.info} component="p">
          {`<960px = violet`}
        </Typography>
        <Typography className={classes.info} component="p">
          {`<1280px = blue`}
        </Typography>
        <Typography className={classes.info} component="p">
          {`>1280px = green`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomGrid;
