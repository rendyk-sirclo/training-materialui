import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[700],
  },
  wrapper: {
    marginLeft: "auto",
  },
}));

export default useStyles;
