import React from "react"

import Layout from "../components/Layout"
import Header from "../components/shared/Header"

class TheBetaWay extends React.Component {
  render() {
    return (
      <div className="thebetaway">
        <Layout>
          <Header
            title="we crafted the Beta Way"
            subtitle="for your body and mind"
            backimg="http://lorempixel.com/400/200/sports/"
          />
        </Layout>
      </div>
    )
  }
}

export default TheBetaWay
