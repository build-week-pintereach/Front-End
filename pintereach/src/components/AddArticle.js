import React, { Component } from 'react';

export default class AddArticle extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      summary: '',
      link: '',
      article: [
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
        }
      ]
    };
  }

  render() {
    const { title, summary, link } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="title-field" className="label">
            Title:{' '}
            <input
              type="text"
              id="title-field"
              className="input"
              name="title"
              placeholder="Title..."
              value={title}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="summary-field" className="label">
            summary:{' '}
            <textarea
              id="summary-field"
              className="summary"
              name="summary"
              placeholder="Summary..."
              value={summary}
              onChange={this.changeHandler}
            />
          </label>
          <label htmlFor="link-field" className="label">
            Link:{' '}
            <input
              type="text"
              id="link-field"
              className="input"
              name="link"
              placeholder="Link..."
              value={link}
              onChange={this.changeHandler}
            />
          </label>
          <button type="submit">Add Article</button>
        </form>
      </section>
    );
  }
}
