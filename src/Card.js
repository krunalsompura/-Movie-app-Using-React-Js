import React from 'react'

const Card = (props) => {
  return (
    <div style={{width:"300px", border:"1px solid #171717"}}>
      <img style={{width:"100%" , height:"434px", objectFit:"cover"}} src={props.img} alt={props.title}/>
      <h4>{props.title}</h4>
      <h4>{props.type}</h4>
      <h4>{props.year}</h4>
    </div>
  )
}

export default Card