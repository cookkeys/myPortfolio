import React from 'react'
import styles from "./styles/footer.module.css"
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
      <div className={styles.footer1}>
        <h4>Nitin Singh</h4>
        <p>Frontend Developer</p>
        <p>Backend Developer</p>
        <p>DSA</p>
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
        <Link href="https://www.linkedin.com/in/nitin-singh-61580221b/" target="_blank"><p className={styles.linkedIn}>LinkedIn</p></Link>
        <Link href="https://x.com/nitinnssingh/" target="_blank"><p className={styles.X}>Twitter</p></Link>
        <Link href="https://www.instagram.com/nitinnssingh/" target="_blank"><p className={styles.insta}>Instagram</p></Link>
      </div>
      </div>
      <div className={styles.footerText}><p>Developed by Nitin Singh</p></div>
    </div>
  )
}
