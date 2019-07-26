import React, { Component } from 'react';
import axios from 'axios';
import Board from '../Board/Board';

class CreateBoards extends Component {
  state = {
    articles: [],
    filteredArticles: []
  };

  componentDidMount() {
    axios
      .get('https://build-week-pintereach.herokuapp.com/api/articles/')
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createBoard = () => {
    const { articles } = this.state;
    const filteredArticles = articles.filter(
      article => article.category_name === 'Game'
    );

    this.setState({
      filteredArticles: filteredArticles
    });
  };

  render() {
    const { articles, filteredArticles } = this.state;

    if (!articles) {
      return <div>Loading...</div>;
    }

    console.log('filter', filteredArticles);
    console.log('articles', this.state.articles);
    return (
      <div>
        <button type="button" onClick={this.createBoard}>
          +
        </button>
        {filteredArticles.map(article => {
          return <Board article={article} key={article.id} />;
        })}
      </div>
    );
  }
}
export default CreateBoards;
