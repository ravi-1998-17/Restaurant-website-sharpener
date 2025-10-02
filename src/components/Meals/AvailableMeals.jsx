import React from "react";
import classes from './AvailableMeals.module.css';

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
];

const AvailableMeals = () => {
  const mealList = DUMMY_DISHES.map((meal) => {
    return <li key={meal.id}>{meal.name}</li>;
  });

  return (
    <>
      <section className={classes.meals}>
        <ul>{mealList}</ul>
      </section>
    </>
  );
};

export default AvailableMeals;
