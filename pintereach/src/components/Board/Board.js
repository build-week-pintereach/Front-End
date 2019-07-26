import React from 'react';
import './Board.css';

export default function(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <img src={props.article.image} alt={props.article.title} />
      <p>{props.article.link}</p>
      <p>{props.article.summary}</p>
      <h4>{props.article.category_name}</h4>
    </div>
  );
}
