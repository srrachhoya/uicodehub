import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Roboto } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})

const r2 = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
  return (


    <div className={styles.container}>


      <p className={r2.className}>Make Web development easy with us. Get ready to use UI components Pick and Use</p>

      <Link href={'#'} className={styles.link + " " + r2.className}>Explore <AiOutlineArrowRight />
      </Link>



    </div>


  )
}

export default page