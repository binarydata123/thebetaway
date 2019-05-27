import React from "react"
import { Helmet } from "react-helmet"

import "../styles/main.scss"
import "animate.css/animate.min.css";

import Footer from "./shared/Footer"

const HeaderCompo = props => (
  <Helmet>
    <title>The Beta Way</title>
  </Helmet>
)

const Layout = ({ children }) => (
  <main>
    <HeaderCompo />
    <div>{children}</div>
    <Footer />
  </main>
)

export default Layout
