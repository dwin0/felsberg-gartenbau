import React from 'react'
import { navigate } from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// https://iammatthias.com/blog/netlify-form-gatsby-v2-and-no-cache-1/
// https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/recaptcha.js
class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = e => {
    const form = e.target

    fetch('/kontakt?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() =>
        navigate(form.getAttribute('action'), { state: { success: true } }),
      )
      .catch(error =>
        navigate(form.getAttribute('action'), { state: { error } }),
      )

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <form
        name="contact"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">
            Your Name:{' '}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email:{' '}
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:{' '}
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default ContactForm
