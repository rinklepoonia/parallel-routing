import React from 'react'

const dashboardLayout = ({ children, team, user }: { children: React.ReactNode; team: React.ReactNode; user: React.ReactNode; }) => {
    // const role = "admin";
    return (
        <div className='p-20'>
            <h2>hlo this is dashboard <strong>navigation</strong></h2>
            {children}
            <div className='grid grid-cols-2 mt-10'>
                {team}
                {user}
                {/* {role === "admin" ? <div>{team}</div>:<div>{user}</div>} */}
            </div>
        </div>
    )
}

export default dashboardLayout