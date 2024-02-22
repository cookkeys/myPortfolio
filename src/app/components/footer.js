import React from 'react'
import styles from "./styles/footer.module.css"

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
      <div className={styles.footer1}>
        <h4>Nitin Singh</h4>
        <p>Software Engineer    </p>
      </div>
      <div className={styles.footer2}>
        <h4>About</h4>
        <p>CSE Student</p>
        <p>VIT-AP University</p>
        <p>Student</p>
      </div>
      <div className={styles.footer3}>
        <h4>Services</h4>
        <p>NextJS</p>
        <p>NodeJS</p>
        <p>Android Development</p>
      </div>
      <div className={styles.footer4}>
        <h4>Profile</h4>
        <p>LinkedIn</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      </div>
      <div className={styles.footerText}><p>Developed by Nitin Singh</p></div>
    </div>
  )
}
