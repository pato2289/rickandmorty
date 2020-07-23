import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Rick and Morty
          </Link>
        </h1>
      </Container>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
