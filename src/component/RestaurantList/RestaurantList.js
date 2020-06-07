import React from "react";
import Restaurant from "../Restaurant/Restaurant";
import styles from "./RestaurantList.module.css";

const RestaurantList = ({ restaurants }) => {
  const list = () => {
    if (restaurants.length) {
      return restaurants.map((item, index) => (
        <li key={item.id}>
          <Restaurant restaurant={item} />
        </li>
      ));
    } else {
      return (
        <li className={styles["error"]}>
          Opps! No restaurants exists. Please search for other cuisines.
        </li>
      );
    }
  };
  return (
    <div className={styles["restaurant-container"]}>
      <ul>{list()}</ul>
    </div>
  );
};

export default RestaurantList;
