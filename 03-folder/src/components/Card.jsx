import React from 'react'

const Card = (props) => {
  return (
    <div className="Card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit temporibus accusamus hic eius a molestias cupiditate ea at doloremque sunt, ex ad blanditiis vero magni odit itaque eligendi numquam?</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card