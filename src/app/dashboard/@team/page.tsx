import Link from 'next/link'
import React from 'react'

// async is a keyword use to define a function  that always return a function
// await keyword pauses the execution of an async function until a Promise is resolved.
// A Promise is a JavaScript object that represents the eventual completion(or failure) of an asynchronous operation
async function getTeam() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Error");
}

const TeamSlots = async () => {
  await getTeam ();

  return (
    <div className='bg-white border border-solid border-black rounded-xl shadow-lg p-5 max-w-[300px]'>
      <h2>Team Members List</h2>
      <ul>
        <li>team 1</li>
        <li>team 2</li>
        <li>team 3</li>
        <li>team 4</li>
        <li>team 5</li>
      </ul>
      <Link href="/dashboard/admin">go to admin</Link>
    </div>
  )
}

export default TeamSlots