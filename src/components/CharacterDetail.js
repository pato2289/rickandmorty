import React from "react"
import { Grid } from "@material-ui/core"

export default function CharacterDetail({ character }) {
  console.log(character)
  const { name, gender, species, image, episode } = character
  return (
    <Grid container align="center" direction="column">
      <Grid item>
        <h1>{name}</h1>
      </Grid>
      <Grid item>
        <img src={image} alt={name} />
      </Grid>
      <Grid item>
        <h3>{gender}</h3>
      </Grid>
      <Grid item>
        <h5>{species}</h5>
      </Grid>
      <Grid item>
        <h1>Episodes</h1>
      </Grid>
      <Grid container>
        {episode.map(cap => (
          <Grid item xs={12} md={4}>
            <>
              <h3 style={{ marginBottom: 5 }}>{cap.name}</h3>
              <h5>{cap.episode}</h5>
            </>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
