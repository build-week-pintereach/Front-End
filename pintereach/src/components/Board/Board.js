import React from 'react';
import './Board.css';

export default function(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <p>{props.article.summary}</p>
    </div>
  );
}
