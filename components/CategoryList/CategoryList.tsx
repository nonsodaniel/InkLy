import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {["travel", "culture", "food", "fashion", "style", "Education"]?.map(
          (item) => (
            <Link
              href="/blog?cat=style"
              className={`${styles.category} ${styles.travel}`}
            >
              <Image
                src={"/style.png"}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
              Some style
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default CategoryList;
