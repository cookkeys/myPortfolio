"use client"
import React, { useState } from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'
import {FaBars, FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa"

export default function Navbar() {
  const [isNavBarOpen, setisNavBarOpen] = useState(false)
  return (
    <div className={styles.outer_div}>
      <FaBars className={styles.bar} onClick={()=>{setisNavBarOpen(!isNavBarOpen)}}/>
      <p>nitin</p>
      <ul className={isNavBarOpen ? styles.inner_div_1 : styles.inner_div_3}>
        <li><Link href="https://my-portfolio-nine-sand.vercel.app/"className={styles.links}>Home</Link></li>
        <li><Link href="">About</Link></li>
        <li><Link href="https://github.com/cookkeys?tab=repositories" target="_blank">My Work</Link></li>
        <li><Link href="https://my-portfolio-nine-sand.vercel.app/">portfolio</Link></li>
      </ul>

      <div className={styles.inner_div_2}>
        <Link href="https://www.instagram.com/nitinnssingh/" target="_blank"><FaInstagram className={styles.logo1}/></Link>
        <Link href="https://www.facebook.com/profile.php?id=100034325422673" target="_blank"><FaFacebook className={styles.logo2}/></Link>
        <Link href="https://github.com/cookkeys" target="_blank"><FaGithub className={styles.logo3}/></Link>
        <Link href="https://x.com/nitinnssingh/" target="_blank"><FaTwitter className={styles.logo4}/></Link>
      </div>
    </div>
  )
}
