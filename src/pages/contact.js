import React from "react"

import Layout from "../components/Layout"
import Header from "../components/shared/Header"

class Contact extends React.Component {
  render() {
    return (
      <div id="contact_page">
        <Layout>
          <Header title="Contact us" subtitle="START WITH THE BETA WAY" />
          <div className="title_wrapper ">
            <div className="title layout">
              <h2>Contact</h2>
            </div>
            <div className="subtitle layout">
              Start with the program that will change your life
            </div>
          </div>
          <div className="contact_wrapper">
            <div className="info_wrapper layout">
              <div className="form_wrapper">
                <form
                  action="https://formspree.io/MNHowell00@gmail.com"
                  method="POST"
                >
                  <input type="text" name="name" id="name" placeholder="name" />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="last name"
                  />
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="Email"
                  />
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                  />
                  <select
                    type="text"
                    name="interest"
                    id="interest"
                    placeholder="Interested in"
                  >
                    <option value="null">-- select an option --</option>
                    <option value="BetaWay-programas">
                      BetaWay Programs Information
                    </option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    name="commet"
                    id="commet"
                    cols="30"
                    rows="10"
                    placeholder="comment"
                  />

                  <input type="submit" value="send" id="submit" />
                </form>
              </div>
              <div className="adrees_wrapper">
                <div className="postal_direction">
                  <p>623 Bergen St</p>
                  <p>Brooklyn</p>
                  <p>NY 11238, EE. UU.</p>
                  <p>+1 646-780-9019</p>
                  <p>
                    <a href="mailto:info@betaway.com">info@betaway.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Contact
