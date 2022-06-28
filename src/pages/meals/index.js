import { useState, useEffect } from "react";
import CustomSkeleton from "@/components/Skeleton";
import Card from "@/components/Card";
import { Container, Grid } from "@material-ui/core";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    setLoading(true);
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    setMeals(data.categories);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (loading) {
    return <CustomSkeleton />;
  }

  if (!meals) {
    return (
      <Container fixed style={{ marginTop: "86px" }}>
        No data found
      </Container>
    );
  }

  return (
    <Container fixed style={{ marginTop: "86px" }}>
      <Grid container spacing={3}>
        {meals.map((meal) => (
          <Card
            key={meal.idCategory}
            idCategory={meal.idCategory}
            strCategory={meal.strCategory}
            strCategoryThumb={meal.strCategoryThumb}
            strCategoryDescription={meal.strCategoryDescription}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default MealsPage;
