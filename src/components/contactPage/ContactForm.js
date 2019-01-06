import React from 'react'

import InputField from './InputField'
import {
  Form,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from './FormElements'

const FORM_NAME = 'kontaktV3'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class ContactForm extends React.Component {
  state = {
    fields: {
      surname: '',
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    emailRequired: true,
    phoneRequired: true,
    formSuccess: false,
    formError: false,
    currentFocus: null,
  }

  handleFocus = e => {
    this.setState({ currentFocus: e.target.name })
  }

  handleBlur = () => {
    this.setState({ currentFocus: null })
  }

  handleChange = e => {
    const field = e.target.name
    const value = e.target.value

    // at least one communication way is required
    if (field === 'email') {
      this.setState({ phoneRequired: !value.length })
    }
    if (field === 'phone') {
      this.setState({ emailRequired: !value.length })
    }

    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [field]: value,
      },
    }))
  }

  handleSubmit = e => {
    // https://iammatthias.com/blog/netlify-form-gatsby-v2-and-no-cache-1/
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': FORM_NAME,
        ...this.state.fields,
      }),
    })
      .then(() =>
        this.setState({
          formSuccess: true,
        }),
      )
      .catch(() =>
        this.setState({
          formError: true,
        }),
      )
    e.preventDefault()
  }

  render() {
    const {
      fields: { surname, name, email, phone, subject, message },
      formSuccess,
      formError,
      currentFocus,
      phoneRequired,
      emailRequired,
    } = this.state

    const commonProps = {
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      currentFocus: currentFocus,
      disabled: formSuccess,
    }

    return (
      <Form
        name={FORM_NAME}
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
          required={emailRequired}
          {...commonProps}
        />
        <InputField
          type="tel"
          text="Telefonnummer"
          id="phone"
          value={phone}
          required={phoneRequired}
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
        <SubmitButton type="submit" disabled={formSuccess}>
          Senden
        </SubmitButton>
        {formError && (
          <ErrorMessage>
            Es ist ein Fehler aufgetreten.
            <br />
            <br />
            Bitte versuchen Sie es nochmal oder rufen Sie uns an!
          </ErrorMessage>
        )}
        {formSuccess && (
          <SuccessMessage>
            Erfolgreich übermittelt.
            <br />
            <br />
            Wir antworten Ihnen sobald wie möglich.
          </SuccessMessage>
        )}
      </Form>
    )
  }
}

export default ContactForm
