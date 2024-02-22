import Image from "next/image";
import styles from "./page.module.css";
import img1 from "./images/myImage.jpg";

export default function Home() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.inner_div_1}>
        <div>
        <p className={styles.name1}>Nitin</p>
        <p className={styles.name2}>Singh</p>
        </div>
        <p className={styles.info}>Computer Science Student</p> 
        <button className={styles.button1}>Get Connected</button>
      </div>
      <div className={styles.inner_div_2}>
          <Image src={img1} className={styles.img}></Image>
      </div>
    </div>
  );
}
