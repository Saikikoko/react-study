import React, { useContext } from 'react'
import { ThemeContext } from '../context'

function UserPage() {
    const ctx = useContext(ThemeContext)
    console.log(ctx);
    
    return (
        <div>
            <h3 className={ctx.themeColor}>userPage</h3>
        </div>
    )
}

export default UserPage
