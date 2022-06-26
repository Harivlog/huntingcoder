import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../styles/blog.module.css'

const blog = () => {
  useEffect(() => {
    console.log("effect is running")
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})  
    a.then((data)=>{
        parsed = data.json();
        console.log(parsed)
      })
    })
  
    
  }, [])
  return (
    <div className={styles.main}>
      <div >
          <h2>Latest Blogs</h2>
          <div className='blogItem'>
            <Link href={'/blogpost/learn-javascript'}>
             

             <h3>How to learn JavaScript in 2022 ?</h3>
             
             
            </Link>
             <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className='blogItem'>
             <h3>How to learn C++ in 2022 ?</h3>
             <p>C++ is the language used to design logic for the web</p>
          </div>
          <div className='blogItem'>
             <h3>How to learn Java in 2022 ?</h3>
             <p>Java is the language used to design logic for the web</p>
          </div>
        </div>
    </div>
  )
}

export default blog