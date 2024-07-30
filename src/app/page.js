import Image from "next/image";
import styles from "./page.module.css";
import img1 from "./images/myImage.jpg";
import { FaCode, FaCog, FaGem, FaInstagram, FaNode, FaNodeJs, FaProjectDiagram, FaPuzzlePiece, FaReact } from "react-icons/fa";
import Footer from "./components/footer";
import Link from "next/link";

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
          <Image src={img1} className={styles.img} alt=""></Image>
      </div>
    </div>

    <p className={styles.getInTouch}>My Skills</p>
    <div className={styles.skills}>
      <div  className={styles.skill1}>
        <FaNodeJs className={styles.skill_Icon}/>
        <h3>NextJS</h3>
        <p>I am proficient in developing dynamic and responsive frontend sites using Next.js.
           My expertise includes utilizing server-side rendering and static site generation to enhance performance and scalability.
            With a strong grasp of React and modern web design principles,
             I create engaging, high-quality user experiences tailored to meet diverse needs.</p>
      </div>
      <div  className={styles.skill2}>
        <FaProjectDiagram className={styles.skill_Icon}/>
      <h3>NodeJS</h3>
      <p>I specialize in building robust, scalable backend applications with Node.js. My skills include creating RESTful APIs,
         managing databases, and leveraging Node.js's event-driven architecture for high performance and efficiency.</p>
      </div>
      <div  className={styles.skill3}>
      <FaCode className={styles.skill_Icon}/>
      <h3>Data Structures and Algorithms (DSA)</h3>
      <p>I have a good grasp of data structures and algorithms, which allows me to solve complex problems efficiently.
         I enjoy optimizing code and finding the best approaches to improve performance and scalability.
          My experience with DSA helps me write clean, effective solutions that handle a variety of challenges with precision.</p>
      </div>
    </div>

<p className={styles.getInTouch}>Get in Touch</p>

    <div className={styles.contacts}>
      <div> 
        <p>Name</p>
        <p>Nitin Singh</p>
      </div>
      <div>
        <p>Intagram</p>
        <Link href="https://www.instagram.com/nitinnssingh/" target="_blank"><p className={styles.txt1}>Nitin Singh</p></Link>
      </div>
      <div>
        <p>Email</p>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=snitin.imk@mgmail.com" target="_blank"><p className={styles.txt1}>Personal</p></Link>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=nitin.21bce8031@vitapstudent.ac.in" target="_blank"><p className={styles.txt1}>Work</p></Link>
      </div>
      <div>
        <p>LinkedIn</p>
        <Link href="https://www.linkedin.com/in/nitin-singh-61580221b/" target="_blank"><p className={styles.txt1}>LinkedIn Profile</p></Link> 
      </div>
    </div>
    <Footer/>
    </div>
  );
}
