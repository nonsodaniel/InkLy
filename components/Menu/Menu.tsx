import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../MenuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {[1, 2, 3].map((o) => (
        <MenuPosts key={o} withImage={false} />
      ))}
    </div>
  );
};

export default Menu;
