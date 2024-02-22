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
        <li><Link href="" className={styles.links}>Home</Link></li>
        <li><Link href="">About</Link></li>
        <li><Link href="">Service</Link></li>
        <li><Link href="">portfolio</Link></li>
      </ul>

      <div className={styles.inner_div_2}>
        <FaInstagram className={styles.logo}/>
        <FaFacebook className={styles.logo}/>
        <FaGithub className={styles.logo}/>
        <FaTwitter className={styles.logo}/>
      </div>
    </div>
  )
}
