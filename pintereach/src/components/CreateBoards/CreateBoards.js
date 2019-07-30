import React, { Component } from 'react';
import axios from 'axios';
import Board from '../Board/Board';

class CreateBoards extends Component {
  state = {
    articles: [
      {
        id: 1,
        title: 'Pokemon electronic game',
        summary:
          'Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.',
        link: 'https://www.britannica.com/topic/Pokemon-electronic-game',
        image:
          'https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg',
        user_id: 1,
        category: 'Game'
      },
      {
        id: 2,
        title: 'Dota 2',
        summary:
          "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
        link: 'https://en.wikipedia.org/wiki/Dota_2',
        image:
          'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg',
        user_id: 2,
        category: 'Game'
      }
    ],
    filteredArticles: []
  };

  componentDidMount() {
    axios
      .get('https://build-week-pintereach.herokuapp.com/api/articles/')
      .then(response => {
        console.log(response);
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
    const filteredArticles = articles.filter(
      article => article.category_name === 'Game'
    );

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
          return <Board article={article} key={article.id} />;
        })}
      </div>
    );
  }
}
export default CreateBoards;
