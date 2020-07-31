import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Link to="/characters">
        <p>Characters</p>
      </Link>
    </>
  )
}
export default IndexPage
