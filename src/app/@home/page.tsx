import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <Link href="/homepage">click to go <strong>homepage</strong></Link>
        </div>
    )
}

export default page