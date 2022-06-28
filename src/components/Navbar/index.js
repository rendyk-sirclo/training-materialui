import { AppBar, Toolbar, Box, Button } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Box className={classes.wrapper}>
          <Button href="/" variant="text" color="inherit">
            Home
          </Button>

          <Button href="/test" variant="text" color="inherit">
            Components
          </Button>

          <Button href="/meals" variant="text" color="inherit">
            Meals
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
