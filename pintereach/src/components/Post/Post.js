import React from 'react';
import styled from 'styled-components';

export default function(props) {
  return (
    <Post>
      <h2>{props.article.title}</h2>
      <img src={props.article.image} alt={props.article.title} />
      <a href={props.article.link}>{props.article.link}</a>
      <p>{props.article.summary}</p>
      <h4>{props.article.category_name}</h4>
    </Post>
  );
}

const Post = styled.div`
background-color: #fcd3ff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 5px;
margin-right: 5px;
width: 33.333%;
`;
