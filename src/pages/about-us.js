import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/Layout"
import Header from "../components/shared/Header"

import PressBlockShared from "../components/shared/Press_item"
import { Link } from "gatsby"

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const AboutUsContent = ({ mai, john }) => (
  <div className="about_wrapper">
    <div className="trainer_info mai">
      <div className="top layout">
        <div className="list">
          <h2>
            {mai.name.text} {mai.lastname.text}
          </h2>
          <p>“{mai.quote.text}.”</p>
          <div
            className="text_wrapper"
            dangerouslySetInnerHTML={{
              __html: mai.ceritifations_list.html,
            }}
          />
        </div>
        <div className="img">
          <div className="wrapper">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={50}>
              <img src={mai.image.url} alt="main" />
              <div className="mail_anchor">
                <p>
                  <a href={`mailto:${mai.email.text}`}>
                    {capitalizeFirstLetter(mai.email.text)}
                  </a>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="info_wrapper layout">
        <div
          className="text_wrapper"
          dangerouslySetInnerHTML={{
            __html: mai.text.html,
          }}
        />
      </div>
    </div>
    <div className="trainer_info john">
      <div className="top layout">
        <div className="img">
          <div className="wrapper">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={50}>
              <img src={john.image.url} alt="john" />
              <div className="mail_anchor">
                <p>
                  <a href={`mailto:${john.email.text}`}>
                    {capitalizeFirstLetter(john.email.text)}
                  </a>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="list">
          <h2>
            {john.name.text} {john.lastname.text}
          </h2>
          <p>“{john.quote.text}.”</p>
          <div
            className="text_wrapper"
            dangerouslySetInnerHTML={{
              __html: john.ceritifations_list.html,
            }}
          />
        </div>
      </div>

      <div className="info_wrapper layout">
        <div
          className="text_wrapper"
          dangerouslySetInnerHTML={{
            __html: john.text.html,
          }}
        />
      </div>
    </div>
  </div>
)

const CTAblock = props => (
  <section className="cta_block cta_block_img">
    <div className="layout">
      <p>Do you want the beta way to be part of your life?</p>

      <div className="link_wrapper">
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  </section>
)

class AboutUs extends React.Component {
  render() {
    const pressItem = this.props.data.allPrismicBlogPost.edges
    const mai = this.props.data.allPrismicMaillard.edges[0].node.data
    const john = this.props.data.allPrismicJohnkasten.edges[0].node.data

    return (
      <div className="AboutUs">
        <Layout>
          <Header title="About Us" subtitle="THE BETA TEAM" />
          <AboutUsContent john={john} mai={mai} />
          <PressBlockShared data={pressItem} />
          <CTAblock />
        </Layout>
      </div>
    )
  }
}

export default AboutUs

export const query = graphql`
  {
    allPrismicBlogPost(limit: 2) {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            texto {
              text
            }
            cover_image {
              url
            }
            media_link {
              url
            }
          }
        }
      }
    }
    allPrismicMaillard {
      edges {
        node {
          data {
            image {
              url
            }
            name {
              text
            }
            lastname {
              text
            }
            quote {
              text
            }
            email {
              text
            }
            ceritifations_list {
              html
            }
            text {
              html
            }
          }
        }
      }
    }
    allPrismicJohnkasten {
      edges {
        node {
          data {
            image {
              alt
              copyright
              url
            }
            name {
              text
            }
            lastname {
              text
            }
            quote {
              text
            }
            email {
              text
            }
            ceritifations_list {
              html
            }
            text {
              html
            }
          }
        }
      }
    }
  }
`
