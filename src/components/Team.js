import React, {useState,useEffect} from 'react'
import Member from './Member'

const Team = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
       
        fetch('https://api.github.com/users')
            .then(data => data.json())
            .then(data => {
                setusers(data)
            })

    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <h3>Git hub User Api</h3>
            </div>
            <div className="row mt-3">
                {
                    users.map((user) => <Member user={user} />)
                }
                
               
            </div>
        </div>
    )
}

export default Team
