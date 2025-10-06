import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_DISHES = [
  {
    id: "01",
    name: "Shahi Paneer",
    description: "Creamy paneer curry with rich spices",
    price: 250,
  },
  {
    id: "02",
    name: "Cheese Garlic Naan",
    description: "Soft naan stuffed with cheese, garlic",
    price: 120,
  },
  {
    id: "03",
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato",
    price: 180,
  },
  {
    id: "04",
    name: "Dal Makhani",
    description: "Creamy lentils slow-cooked in butter",
    price: 220,
  },
  {
    id: "05",
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fried bread",
    price: 160,
  },
  {
    id: "06",
    name: "Paav Bhaji",
    description:
      "Pav Bhaji is a popular Indian street food that originated in Mumbai",
    price: 160,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_DISHES.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
