import { Container, Grid } from "@material-ui/core";
import CustomGrid from "@/components/CustomGrid";
import ButtonShowcase from "@/components/ButtonShowcase";

const TestPage = () => {
  return (
    <Container fixed style={{ marginTop: "86px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Showcase Buttons</h2>
          <ButtonShowcase />
        </Grid>
      </Grid>

      <h2>Showcase Breakpoints</h2>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CustomGrid />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestPage;
