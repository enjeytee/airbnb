import React from "react"

export default function Card(props) {
    // const {id, img, img_alt, rating, reviewCount, location, title, price, openSpots} = props.item
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`/images/${props.item.coverImg}`} alt=""></img>
            <div className="card-stats">
                <img className="card--star" src={"/images/star.png"} alt="star"></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}