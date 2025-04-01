import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
     <Link href="/aboutpage">click here to go <strong>aboutPage</strong></Link>
     {/* <p>hii i am about link</p> */}
    </div>
  )
}

export default page