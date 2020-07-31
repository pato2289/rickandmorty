import React from "react"
import CharactersList from "../components/CharactersList"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query($page: Int = 17) {
    RickAndMorty {
      characters(page: $page) {
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

export default function characters({ data }) {
  const characters = data.RickAndMorty.characters.results
  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  )
}
