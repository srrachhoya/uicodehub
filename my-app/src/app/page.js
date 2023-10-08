import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Roboto } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})


const page = () => {
  return (


    <div className={styles.container}>


      <h1 className={roboto.className}>Make Web development easy with us. Get ready to use UI components Pick and Use</h1>

      <Link href={'#'} className={styles.link + " " + roboto.className}>Explore <AiOutlineArrowRight/>
      </Link>



    </div>


  )
}

export default page