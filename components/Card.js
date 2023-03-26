import React from 'react'

export default function Card(props) {
    
    let badgeText = ''
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    
    console.log(props.openSpots)
    
    return (
        <div className="card-container">
             {badgeText === 0 && <div className="card-badge">{badgeText}</div>}
             <img src={`images/${props.image}`} className="card-image" />
             <div className="stats-container">
                 <img src="images/star.png" className="star"/>
                 <p className="dark-color">{props.rating}.0</p>
                 <p className="light-stats-color">({props.reviewCount})</p>
                 <p className="light-stats-color">{props.location}</p>
             </div>
             <p className="dark-color">{props.title}</p>
             <p><strong>From ${props.price} </strong>/ person</p>
        </div>
    )
}
