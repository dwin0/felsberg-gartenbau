import React, { Fragment } from 'react'
import { FiSend } from 'react-icons/fi'

import InputField from './InputField'
import {
  Form,
  ReponsiveRecaptcha,
  SubmitButton,
  SuccessMessage,
  WarningMessage,
  ErrorMessage,
} from './FormElements'
import Subtitle from '../common/Subtitle'

const FORM_NAME = 'kontaktV3'
const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

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
      'g-recaptcha-response': null,
    },
    emailRequired: true,
    phoneRequired: true,
    formSuccess: false,
    formError: false,
    currentFocus: null,
    recaptchaWarning: false,
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

  handleRecaptcha = value =>
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        'g-recaptcha-response': value,
      },
      recaptchaWarning: false,
    }))

  handleSubmit = e => {
    if (!this.state.fields['g-recaptcha-response']) {
      this.setState({ recaptchaWarning: true })
      e.preventDefault()
      return
    }

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
      recaptchaWarning,
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

    // recaptcha: https://github.com/imorente/gatsby-netlify-form-example
    return (
      <Fragment>
        <Subtitle>Kontaktformular</Subtitle>
        <Form
          name={FORM_NAME}
          data-netlify="true"
          data-netlify-recaptcha="true"
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
          {formSuccess || (
            <ReponsiveRecaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
          )}
          <SubmitButton type="submit" disabled={formSuccess}>
            Senden&nbsp;
            <FiSend />
          </SubmitButton>
          {formError && (
            <ErrorMessage>
              Es ist ein Fehler aufgetreten.
              <br />
              <br />
              Bitte versuchen Sie es nochmal oder rufen Sie uns an!
            </ErrorMessage>
          )}
          {recaptchaWarning && (
            <WarningMessage>
              Bitte klicken Sie die reCAPTCHA Checkbox oberhalb des
              Senden-Buttons an.
            </WarningMessage>
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
      </Fragment>
    )
  }
}

export default ContactForm
