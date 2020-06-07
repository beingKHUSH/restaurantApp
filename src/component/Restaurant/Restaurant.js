import React from "react";
import styles from "./Restaurant.module.css";

const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles["restaurant-card"]}>
      <div className={styles["main-container"]}>
        <p>{restaurant.name}</p>
        <div className={styles["rating-container"]}>
          <p>{restaurant.aggregate_rating}</p>
          <p>{restaurant.votes}</p>
        </div>
      </div>
      <div className={styles["cuisine-container"]}>
        <p>Cuisines</p>
        <ul>
          {restaurant.cuisines.split(",").map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
      <div className={styles["cost-container"]}>
        <span>Average Cost For Two</span>
        <span>{restaurant.average_cost_for_two}</span>
      </div>
    </div>
  );
};

export default Restaurant;
