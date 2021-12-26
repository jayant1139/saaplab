import React from 'react'

export default function Team() {
    return (
        <>
           <div className="d-flex justify-content-around">
           <div className="card_w_title">
           <h1>Group Leader</h1>
               <div className="grp-item d-flex flex-column align-items-center">
         <img src={require('../images/team_pics/sachin_srivastav.png').default} alt="" />
                <p><a href="">Sachin Kumar Srivastava</a></p>  
                <p>Assistant Professor</p>  
               </div>
           </div>

           <div className="card_w_title">
           <h1>Post doc</h1>
               <div className="grp-item d-flex flex-column align-items-center">
         <img src={require('../images/team_pics/postdoc.png').default} alt="" />
                <p>Yadvendra Singh</p>  
                <p>PhD (IIT-ISM, Dhanbad)</p>  
               </div>
           </div>
           </div>
        </>
    )
}
