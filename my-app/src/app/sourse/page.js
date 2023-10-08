import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'


const page = () => {

const code ='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Bootstrap demo</title></head><body><h1>Hello, world!</h1></body></html>'


    return (

        <div className={styles.container}>

            <div className={styles.preview}>

                <Image
                    src='/src.jpg'
                    height={500}
                    alt="Picture of the author"
                    width={500}

                    className={styles.img}
                />

            </div>

            <div className={styles.code}>

                <SyntaxHighlighter language="javascript" style={docco}>
{code}

                </SyntaxHighlighter>



            </div>
        </div>

    )
}

export default page