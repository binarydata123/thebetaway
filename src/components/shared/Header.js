import React from "react"
import { Link } from "gatsby"

// import YouTube from "react-youtube"

import logo from "../../assets/img/logo.png"
import logo_totalwhite from "../../assets/img/logo_totalwhite.png"
import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube.png"

import ScrollAnimation from "react-animate-on-scroll"

import video from "../../assets/video/videoplayback_4.mp4"

const BurgerIcon = props => (
  <React.Fragment>
    <svg width="72" height="36" viewBox="0 0 72 36" fill="none">
      <rect id="uno" width="72" height="7" fill="#F5F5F5" />
      <rect id="dos" x="18" y="15" width="54" height="6" fill="#F5F5F5" />
      <rect id="tres" x="33" y="29" width="39" height="7" fill="#F5F5F5" />
    </svg>
  </React.Fragment>
)

export const RrssBlock = props => (
  <div className="rrss_header_block">
    <div>
      <a href="https://www.instagram.com/mnhowbeta/" target="blank">
        <img src={instagram} alt="instagram" />
      </a>
    </div>
    <div>
      <a
        href="https://www.youtube.com/channel/UCF63Y-zlW5xI6SggV-9JYMg"
        target="blank"
      >
        <img src={youtube} alt="youtube" />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/BetaWay.net/" target="blank">
        <img src={facebook} alt="facebook" />
      </a>
    </div>
  </div>
)

class NavigationBar extends React.Component {
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
      <React.Fragment>
        <HamburgerMenu
          open={this.state.menuOpen}
          animateClass={this.state.animateClass}
        />

        <nav className="layout">
          <div className="logo_wrapper">
            <Link to="/">
              <img src={logo} className="logo_item" alt="logo" />
            </Link>
          </div>

          <div className="menu_wrapper">
            <div className="cta_btn">
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="menu_icon" onClick={() => this.handleMenuClick()}>
              <BurgerIcon />
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

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
          <div className="hamburgermenu">
            <div className={this.props.animateClass}>
              <div
                className="close_wrapper"
                onClick={() => this.handleMenuClickClose()}
              >
                <p>close</p>
              </div>

              <div className="logo_wrapper">
                <img src={logo_totalwhite} className="logo_item" alt="logo" />
              </div>

              <div className="menu_items_wrapper">
                <div className="menu_item">
                  <Link to="/">Home</Link>
                </div>
                <div className="menu_item">
                  <Link to="/about-us">About Us</Link>
                </div>
                <div className="menu_item">
                  <Link to="/press">Press</Link>
                </div>
                <div className="menu_item">
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

// class VideoBlock extends React.Component {
//   render() {
//     const video = "ABw_HMjaKAw"
//     const opts = {
//       height: "100%",
//       width: "100%",
//       playerVars: {
//         autoplay: 1,
//         controls: 0,
//         disablekb: 1,
//         modestbranding: 0,
//         rel: 0,
//         showinfo: 0,
//       },
//     }
//     return (
//       <div className="video-background">
//         <div className="video-foreground">
//           <YouTube
//             videoId={video}
//             opts={opts}
//             onReady={this._onReady}
//             onEnd={this._onEnd}
//           />
//         </div>
//       </div>
//     )
//   }
//   _onReady(event) {
//     event.target.mute()
//     event.target.playVideo()
//   }
//   _onEnd(event) {
//     event.target.playVideo()
//   }
// }

const VideoRaw = () => (
  <div className="video_wrapper">
    <video autoPlay={true} muted loop>
      <source src={video} type="video/mp4" />
    </video>
  </div>
)

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <div className="header">
        <div className="content">
          <VideoRaw />
          <NavigationBar />
          <div className="text_wrapper">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              delay={500}
            >
              <h3>{subtitle}</h3>
              <h1>{title}</h1>
            </ScrollAnimation>
          </div>
          <RrssBlock />
        </div>
      </div>
    )
  }
}

export default Header
