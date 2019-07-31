import React, { Component } from 'react';
import axios from 'axios';

export default class AddArticle extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      summary: '',
      link: '',
      article: []
    };
  }
  changeHandler = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
