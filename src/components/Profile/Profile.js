import React from 'react';
// import { Header } from '../header/header';
import { mockData } from '../../mock-data';



const Profile = () => {
    return (
        <div>
            {/* <Header /> */}
            
            <h1>Users DATA</h1>
       


                {/* <mockData /> */}

                     <ul className="list-group">
                    {
                        mockData.user.map((post,i)=>{
                         return <li key={i} className="list-group-item"><h4><small>
                        {post.id}
                         {post.name}
                         {post.age}
                         {post.gender}
                         {post.email}
                         {post.phoneNo}

                         </small></h4></li>
                         })
                     }</ul> 

            <button onClick={
                () => {
                    sessionStorage.removeItem("access-token");
                    window.location.href = '/';
                }
            }>LOGOUT</button>
        </div>
    )
}

export { Profile };