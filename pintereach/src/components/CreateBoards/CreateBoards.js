import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import styled from 'styled-components';

class CreateBoards extends Component {
  state = {
    articles: []
    //newArticles: []
  };

  componentDidMount() {
    axios
      .get('https://build-week-pintereach.herokuapp.com/api/articles/')
      .then(response => {
        this.setState({
          articles: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  createBoard = () => {
    const { articles } = this.state;
    // const filteredArticles = articles.filter(
    //   article => article.category_name === 'Game'
    // );

    this.setState({
      articles: articles
    });
  };

  editPost = id => {};

  render() {
    const { articles } = this.state;

    if (!articles) {
      return <div>Loading...</div>;
    }

    console.log('articles', articles);
    return (
      <div>
        <button type="button" onClick={this.createBoard}>
          +
        </button>
        <ArticleSection>
        {articles.map(article => {
          return <Post article={article} key={article.id} />;
        })}
        </ArticleSection>
      </div>
    );
  }
}
export default CreateBoards;

const ArticleSection = styled.div`
display: flex;
margin-top: 10px;

`;
