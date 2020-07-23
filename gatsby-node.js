const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  //usamos el metodo createPage
  const { createPage } = actions
  //le indicamos a partir de que diseño (el que hacemos en template)
  const characterTemplate = path.resolve(`src/templates/Character.js`)
  //definimos un resultado y una llamada asincrona que espere el resultado de graphql con el query
  const result = await graphql(`
    query {
      RickAndMorty {
        characters {
          results {
            id
            name
            species
            gender
            image
            episode {
              episode
              name
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  //si no hay erorres, traigo la data y hago un forEach por cada nodo
  result.data.RickAndMorty.characters.results.forEach(character => {
    //createPage es un objeto con el path y el componente que lo resuelve
    createPage({
      path: `/${character.id}`,
      component: characterTemplate,
      context: { character: character },
    })
  })
}
