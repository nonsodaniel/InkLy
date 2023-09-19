import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{Date.now()} - </span>
          <span className={styles.category}>{"Category"}</span>
        </div>
        <Link href={`/posts/`}>
          <h1>{"Some title"}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consequuntur praesentium laudantium itaque fuga, consectetur dolore
          nulla excepturi illo quas deserunt libero magni repellat ullam, eum
          sed qui odio sunt.
        </p>

        <Link href={`/posts/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
