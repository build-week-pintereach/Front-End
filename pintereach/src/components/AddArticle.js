import React, { Component } from 'react';
import axios from 'axios';

export default class AddArticle extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      summary: '',
      link: '',
      imageLink: '',
      category_name: '',
      article: []
    };
  }
  changeHandler = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitArticle = e => {
    e.preventDefault();
    const { title, summary, link } = this.state;
    const payload = { title, summary, link };
    const token = localStorage.getItem('token');

    axios
      .post(
        'https://build-week-pintereach.herokuapp.com/api/articles/',
        payload,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log(response);
        this.props.history.push('/protected');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { title, summary, link, imageLink, category_name } = this.state;
    return (
      <section>
        <form onSubmit={this.submitArticle}>
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
          <label htmlFor="link-field" className="label">
            Image Link:{' '}
            <input
              type="text"
              id="link-field"
              className="input"
              name="imageLink"
              placeholder="Image..."
              value={imageLink}
              onChange={this.changeHandler}
            />
          </label>
          <label htmlFor="category-field" className="label">
            Link:{' '}
            <input
              type="text"
              id="link-field"
              className="input"
              name="category_name"
              placeholder="category name..."
              value={category_name}
              onChange={this.changeHandler}
            />
          </label>
          <button type="submit">Add Article</button>
        </form>
      </section>
    );
  }
}
