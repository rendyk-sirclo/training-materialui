import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Container, Box } from "@material-ui/core";

const CustomSkeleton = () => {
  return (
    <Container fixed style={{ marginTop: "86px" }}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <Skeleton variant="rect" width="100%" height={200} />
            </Box>
            <Box pt={0.5}>
              <Skeleton width="30%" height={24} />
              <div style={{ marginTop: 2 }}>
                <Skeleton animation="wave" height={14} />
                <Skeleton animation="wave" height={14} />
                <Skeleton animation="wave" width="60%" height={14} />
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomSkeleton;
