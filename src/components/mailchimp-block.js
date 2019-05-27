import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
    }
  }

  _handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)
        if (result !== "Your suscription is complete!") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  _handleChange = e => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="wrapper">
          <input
            type="email"
            onChange={this._handleChange}
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input type="submit" value="suscribe" />
        </div>
      </form>
    )
  }
}
