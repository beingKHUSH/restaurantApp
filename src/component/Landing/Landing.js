import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import RestaurantList from "../RestaurantList/RestaurantList";
import styles from "./Landing.module.css";

const url = "http://localhost:3001/restaurants";

const Landing = () => {
  const [show, setShow] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res);
        if (searchStr != "") {
          let res = restaurants.filter((restaurant) => {
            let cuisines = restaurant["cuisines"].split(",");
            let res = cuisines.find((c) => c.toLowerCase().includes(searchStr));
            if (res) {
              return restaurant;
            }
          });
          setRestaurants([...res]);
        }
      });
  }, [searchStr]);

  const searchRestaurant = (e) => {
    let value = e.target.value.toLowerCase();
    setSearchStr(value);
  };

  return (
    <div className={show ? styles["white-background"] : styles["background"]}>
      <Header />
      {!show ? (
        <div className={styles["landing"]}>
          <h1>Choosing Quality Food</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className={styles["btn"]} onClick={() => setShow(true)}>
            <span>Explore Restaurants</span>
          </button>
        </div>
      ) : (
        <div className={styles["result-container"]}>
          <Search onClick={searchRestaurant} value={searchStr} />
          <RestaurantList restaurants={restaurants} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Landing;
