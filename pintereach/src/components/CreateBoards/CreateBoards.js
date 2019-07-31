import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

class CreateBoards extends Component {
  state = {
    articles: [],
    filteredArticles: []
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
      filteredArticles: articles
    });
  };

  render() {
    const { articles, filteredArticles } = this.state;

    if (!articles) {
      return <div>Loading...</div>;
    }

    console.log('filter', filteredArticles);
    console.log('articles', articles);
    return (
      <div>
        <button type="button" onClick={this.createBoard}>
          +
        </button>
        {filteredArticles.map(article => {
          return <Post article={article} key={article.id} />;
        })}
      </div>
    );
  }
}
export default CreateBoards;
