import React from 'react'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

// https://iammatthias.com/blog/netlify-form-gatsby-v2-and-no-cache-1/
// https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/recaptcha.js
class ContactForm extends React.Component {
  state = {
    surname: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    formSuccess: null, // disable form elements and green
    formError: null, // contact us via phone and red
  }

  handleSubmit = e => {
    // TODO: check if either phone or email

    e.preventDefault()

    fetch('/kontakt?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => () => this.setState({ formSuccess: true }))
      .catch(() => this.setState({ formError: true }))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      surname,
      name,
      email,
      phone,
      subject,
      message,
      formSuccess,
      formError,
    } = this.state

    return (
      <form
        data-netlify="true"
        data-netlify-honeypot="bot"
        onSubmit={this.handleSubmit}
      >
        {/* <input type="hidden" name="form-name" value="contact" /> */}
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
