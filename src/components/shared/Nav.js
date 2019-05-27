import React from "react"
import { CSSTransitionGroup } from "react-transition-group"

import logo from "../img/logo-zubi.png"
import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      animateClass: "",
    }
  }

  handleMenuClick() {
    this.setState({
      menuOpen: true,
      animateClass: "hamburgermenu",
    })
  }

  render() {
    return (
      <nav>
        <HamburgerMenu
          open={this.state.menuOpen}
          animateClass={this.state.animateClass}
        />

        <div className="content_wrapper">
          <div className="logo_wrapper">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="text_wrapper_nav">
            <p className={this.props.theme}>
              Co-founding Businesses that <b>Make the World Better</b>
            </p>
          </div>
        </div>
        <div className="menu_wrapper">
          <div className="menu_item">
            <Link to="/sumate/">Súmate</Link>
          </div>
          <div
            className="icon_wrapper_super"
            onClick={() => this.handleMenuClick()}
          >
            <svg
              width="42"
              height="18"
              viewBox="0 0 42 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="6" fill="#17E1AC" className="uno" />
              <rect
                x="17"
                y="12"
                width="25"
                height="6"
                fill="#17E1AC"
                className="dos"
              />
            </svg>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
      animateClass: "hamburgermenu",
    }
  }

  handleMenuClickClose() {
    this.setState({
      open: false,
      animateClass: "hamburgermenu",
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.open ? (
          <div className={this.props.animateClass}>
            <div
              className="close_wrapper"
              onClick={() => this.handleMenuClickClose()}
            >
              <p>X</p>
            </div>

            <div className="menu_items_wrapper">
              <div className="links_wrapper">
                <div className="link_wrapper">
                  <Link to="/about-us">About Us</Link>
                </div>
                <div className="link_wrapper">
                  <Link to="/press">Press</Link>
                </div>
                <div className="link_wrapper">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    )
  }
}
