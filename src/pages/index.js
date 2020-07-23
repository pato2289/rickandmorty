import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Characters from "../components/Characters"

export const query = graphql`
  query MyQuery {
    RickAndMorty {
      characters {
        results {
          id
          name
          species
          gender
          image
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const characters = data.RickAndMorty.characters.results
  return (
    <>
      <SEO title="Home" />
      <Characters characters={characters} />
    </>
  )
}
export default IndexPage
