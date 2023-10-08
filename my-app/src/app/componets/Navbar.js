import React from 'react'
import styles from './css/navbar.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Navbar = () => {

  return (

    <div className={`${styles.navbar} ${roboto.className}`}>

      <div className={styles.logo}>

        <h1>Navbar</h1>


      </div>



      <div className={styles.links}>

        <Link className={styles.link} href={'#'}>Home</Link>
        <Link className={styles.link} href={'#'}>About</Link>
        <Link className={styles.link} href={'#'}>Contact</Link>

      </div>


    </div>

  )
}

export default Navbar