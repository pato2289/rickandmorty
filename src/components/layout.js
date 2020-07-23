import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
