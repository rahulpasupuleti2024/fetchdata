import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div className="card">
        <img src={strMealThumb} alt="" />
        <div className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </div>
      </div>
    );
  });
  return <div className="container">{itemslist}</div>;
};

export default Items;
