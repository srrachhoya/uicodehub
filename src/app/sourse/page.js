"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { nightOwl, sunburst, xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { FaCopy } from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { Roboto } from 'next/font/google'





const r2 = Roboto({
    weight: '400',
    subsets: ['latin'],
})



const page = () => {


    const [copy, setCopy] = useState('Copy')





    const code =
        `<!doctype html>
<html lang="en">
  <head>


    <meta charset="utf-8">



    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>



  </head>


  <body>


    <h1>Hello, world!</h1>



  </body>`



    const copyCode = (code) => {

        navigator.clipboard.writeText(code)

        setCopy('Copied')


    }





    return (

        <div className={styles.container}>

            <div className={styles.preview}>


                <div className={styles.previewImgContainer}>

                    <button>  <AiFillCaretLeft /> </button>


                    <div className={styles.imageContainer}>

                        <h1 className={r2.className} style={{ alignSelf: 'flex-start', color: '#18171D' }}>How to make A Stylish and Navbar</h1>


                        <img src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />

                        <p className={r2.className} style={{ color: '#27262B' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>

                    </div>

                    <button>  <AiFillCaretRight /> </button>


                </div>












            </div>

            <div className={styles.code}>
                {/* <h1 className={r2.className}>Code</h1> */}

                <div className={styles.item}>

                    <div className={styles.copy}>
                        <span style={{ float: 'left' }} className={r2.className}>HTML</span>
                       
                        <div>


                            {copy === 'Copied' ? <BsCheckCircleFill /> :

                                <FaCopy />

                            }


                            <span onClick={() => { copyCode(code) }} className={r2.className}>




                                {copy}



                            </span>
                        </div>
                    </div>
                    <hr />
                    <SyntaxHighlighter language="html" style={xcode} showLineNumbers={true} >
                        {code}

                    </SyntaxHighlighter>

                </div>

            </div>
        </div>

    )
}

export default page