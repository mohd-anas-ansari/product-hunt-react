import React from "react";




function Card(props) {
  return (
    <div className='one-card-container'>
      <div className='check-container'>
        <div className='image-container'>
          <img src={props.img} alt={props.name} />
        </div>
        <div className='name-description-tag-container'>
          <h4>{props.name}</h4>
          <p>{props.description}</p>

          <div>
            {props.tags.map((oneTag) => {
              return <button>{oneTag}</button>;
            })}
          </div>
        </div>
      </div>
      <div className='upvote-box'>
        <p><i class="fas fa-sort-up"></i></p>
        <p>{props.upvote}</p>
      </div>
    </div>
  );
}


export default Card;