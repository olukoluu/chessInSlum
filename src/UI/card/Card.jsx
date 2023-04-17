import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.src} alt={props.title} />
        <div className="card__text">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        {props.button}
    </div>
  )
}

export default Card