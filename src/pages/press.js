import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/shared/Header"
import PressBlockShared from "../components/shared/Press_item"

class Press extends React.Component {
  render() {
    const pressItem = this.props.data.allPrismicBlogPost.edges

    return (
      <div className="press">
        <Layout>
          <Header title="Press" subtitle="we crafted the Beta Way" />
          <div className="press_wrappper">
            <PressBlockShared data={pressItem} />
          </div>
        </Layout>
      </div>
    )
  }
}

export default Press

export const query = graphql`
  {
    allPrismicBlogPost {
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
  }
`
