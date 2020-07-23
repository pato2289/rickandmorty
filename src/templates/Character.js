import React from "react"
import CharacterDetail from "../components/CharacterDetail"

export default function Product({ pageContext }) {
  return <CharacterDetail {...pageContext} />
}
