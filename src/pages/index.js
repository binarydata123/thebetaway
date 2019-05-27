import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/shared/Header"
import {
  IntroBlock,
  ProcessBlock,
  CreatorsBlock,
  InActionBlock,
  PressBlock,
  CTABlock,
} from "../components/Index-blocks"

class Index extends React.Component {
  render() {
    const pressItem = this.props.data.allPrismicBlogPost.edges
    const instaContent = this.props.data.allInstagramContent

    const {
      sub_title_header,
      title_header,
      intro_title,
      intro_sub,
      intro_text,
      process_title,
      process_text,
      cta_text,
    } = this.props.data.allPrismicHome.edges[0].node.data

    const allData = this.props.data.allPrismicHome.edges[0].node.data

    const john = this.props.data.allPrismicJohnkasten.edges[0].node.data
    const mai = this.props.data.allPrismicMaillard.edges[0].node.data

    return (
      <div className="index">
        <Layout>
          <Header title={title_header.text} subtitle={sub_title_header.text} />
          <IntroBlock
            title={intro_title.text}
            sub={intro_sub.text}
            text={intro_text.html}
          />
          <ProcessBlock
            title={process_title.text}
            text={process_text.text}
            alldata={allData}
          />
          <CreatorsBlock john={john} mai={mai} />
          <InActionBlock data={instaContent} />
          <PressBlock data={pressItem} />
          <CTABlock text={cta_text.text} />
        </Layout>
      </div>
    )
  }
}

export default Index

export const query = graphql`
  {
    allPrismicBlogPost(limit: 2) {
      edges {
        node {
          id
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
    allPrismicHome {
      edges {
        node {
          data {
            sub_title_header {
              text
            }
            title_header {
              text
            }
            intro_title {
              text
            }
            intro_sub {
              text
            }
            intro_text {
              html
            }
            process_title {
              text
            }
            process_text {
              text
            }
            cta_text {
              text
            }
            process_01 {
              text
            }
            process_01_img {
              url
            }
            process_02 {
              text
            }
            process_02_img {
              url
            }
            process_03 {
              text
            }
            process_03_img {
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
            name {
              text
            }
            lastname {
              text
            }
            quote {
              text
            }
            home_image {
              url
            }
          }
        }
      }
    }
    allPrismicJohnkasten {
      edges {
        node {
          data {
            name {
              text
            }
            lastname {
              text
            }
            quote {
              text
            }
            home_image {
              url
            }
          }
        }
      }
    }
    allInstagramContent(limit: 18) {
      edges {
        node {
          link
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`
