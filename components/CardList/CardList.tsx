import React from "react";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent posts</div>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination page={4} hasPrev={true} hasNext />
    </div>
  );
};

export default CardList;
