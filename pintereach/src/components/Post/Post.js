import React from 'react';

export default function(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <img src={props.article.image} alt={props.article.title} />
      <a href={props.article.link}>{props.article.link}</a>
      <p>{props.article.summary}</p>
      <h4>{props.article.category_name}</h4>
    </div>
  );
}
