import React from 'react'

import InputField from './InputField'
import { Form, SubmitButton } from './FormElements'

const FORM_NAME = 'kontaktV3'

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
    formSuccess: false, // disable form elements and green
    formError: false, // contact us via phone and red
    currentFocus: null,
  }

  handleFocus = e => {
    this.setState({ currentFocus: e.target.name })
  }

  handleBlur = () => {
    this.setState({ currentFocus: null })
  }

  handleSubmit = e => {
    // TODO: check if either phone or email

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...this.state }),
    })
      .then(() => this.setState({ formSuccess: true }))
      .catch(() => this.setState({ formError: true }))

    e.preventDefault()
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
      currentFocus,
    } = this.state

    const commonProps = {
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      currentFocus: currentFocus,
    }

    return formSuccess ? (
      <p>Success</p>
    ) : (
      <Form
        data-netlify="true"
        data-netlify-honeypot="bot"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <InputField
          text="Name"
          id="surname"
          value={surname}
          required
          {...commonProps}
        />
        <InputField
          text="Vorname"
          id="name"
          value={name}
          required
          {...commonProps}
        />
        <InputField
          type="email"
          text="Email"
          id="email"
          value={email}
          {...commonProps}
        />
        <InputField
          type="tel"
          text="Telefonnummer"
          id="phone"
          value={phone}
          {...commonProps}
        />
        <InputField
          text="Betreff"
          id="subject"
          value={subject}
          required
          {...commonProps}
        />
        <InputField
          type="textarea"
          text="Mitteilung"
          id="message"
          value={message}
          required
          {...commonProps}
        />
        <div data-netlify-recaptcha="true" />
        <SubmitButton type="submit">Senden</SubmitButton>
        {formError && (
          <p style={{ background: 'red', color: 'white' }}>
            Es ist ein Fehler aufgetreten.
          </p>
        )}
      </Form>
    )
  }
}

export default ContactForm
