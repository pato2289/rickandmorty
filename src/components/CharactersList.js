import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Container,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "auto",
    padding: "0 30px",
    width: "100%",
  },
})

const CharactersList = ({ characters }) => {
  console.log("Desde characters: ", characters)
  const classes = useStyles()
  return (
    <>
      <Grid container alignItems="stretch" justify="center">
        {characters.map(character => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card variant="outlined">
              <CardActionArea>
                <Link to={`/${character.id}`}>
                  <CardMedia>
                    <img src={character.image} alt={character.name} />
                  </CardMedia>
                </Link>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    className={classes.root}
                  >
                    {character.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    {character.gender}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CharactersList
