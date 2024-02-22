import Image from "next/image";
import styles from "./page.module.css";
import img1 from "./images/myImage.jpg";
import { FaAndroid, FaBriefcase, FaCog, FaGem, FaInstagram, FaNode, FaNodeJs, FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <div>
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
    <div className={styles.skills}>
      <div  className={styles.skill1}>
        <FaReact className={styles.skill_Icon}/>
        <h3>NextJS</h3>
        <p>Google Career Certificates offer online training that can put you on the fast track to in-demand jobs — no experience necessary.</p>
      </div>
      <div  className={styles.skill2}>
        <FaNodeJs className={styles.skill_Icon}/>
      <h3>NodeJS</h3>
      <p>Google Career Certificates offer online training that can put you on the fast track to in-demand jobs — no experience necessary.</p>
      </div>
      <div  className={styles.skill3}>
      <FaAndroid className={styles.skill_Icon}/>
      <h3>Android</h3>
      <p>Google Career Certificates offer online training that can put you on the fast track to in-demand jobs — no experience necessary.</p>
      </div>
    </div>
    </div>
  );
}
